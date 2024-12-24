import "./App.css";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import AuthenticatePage from "./component/Pages/AuthenticatePage";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../src/component/utils/Auth";
import VideoPlay from "./component/Features/VideoPlay";
import VideoUpload from "./component/Features/VideoUpload";
import Video from "../src/component/Features/Video";

import Home from "./component/Pages/Home";
import About from "./component/Pages/About";
import Services from "./component/Pages/Services";
import Contact from "./component/Pages/Contact";
import SignUpForm from "./component/Form/SignUpForm";
import LoginForm from "./component/Form/LoginForm";

import HomePage from "./component/Pages/HomePage";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Header />
      <main>
        <main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUpForm />} />
            <Route path="/log-in/*" element={<LoginForm />} />

            <Route path="/*" element={<AuthenticatePage />} />
            <Route path="/video" element={<Video />} />
            <Route path="/video/:videoId" element={<VideoPlay />} />
            <Route path="/upload-video" element={<VideoUpload />} />
          </Routes>
        </main>
      </main>
      <Footer />
    </>
  );
}

export default App;
