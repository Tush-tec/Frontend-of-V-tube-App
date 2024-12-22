import './App.css';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import AuthenticatePage from './component/Pages/AuthenticatePage';
import GetAllVideoCompo from './component/Layout/GetAllVideoCompo';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../src/component/utils/Auth'; // Import the custom hook

function App() {
  const { isAuthenticated } = useAuth(); // Get the auth state

  return (
    <>
      <Header />
      <main>
        <Routes>
          {!isAuthenticated ? (
            <Route path="*" element={<AuthenticatePage />} />
          ) : (
            <Route path="/video" element={<GetAllVideoCompo />} />
          )}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
