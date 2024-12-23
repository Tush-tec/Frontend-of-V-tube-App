import './App.css';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import AuthenticatePage from './component/Pages/AuthenticatePage';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../src/component/utils/Auth'; 
import VideoPlay from './component/Features/VideoPlay';
import VideoUpload from './component/Features/VideoUpload';
import Video from '../src/component/Features/Video'


function App() {
  const { isAuthenticated } = useAuth(); 

  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<AuthenticatePage />} />
            <Route path="/video" element={<Video />} />
            <Route path="/video/:videoId" element={<VideoPlay />} />
            <Route path = '/upload-video' element={<VideoUpload/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
