import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";
const App= () => {

  const [showPopup, setShowPopup] = useState(true);

  function handleClosePopup() {
    setShowPopup(false);
  };
    return (
        <>
          <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Ruturaj Ashok Powar"
          studentPhotoUrl="\Images\WhatsApp Image 2025-07-02 at 12.18.09_0c9a046a.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
          <Router>
          
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path="/admission" element={<AdmissionPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>

            
          </Routes>
          
          <ChatbotComponent />
          
          </Router>
        </>
    )
}

export default App;
