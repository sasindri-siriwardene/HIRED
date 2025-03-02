import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Pages/HomePage';
import Footer from './Components/Footer';
import ContactPage from './Pages/ContactPage'; 
import AboutUs from './Pages/AboutUs'; // Import the AboutUs page
import 'aos/dist/aos.css';
import Upgrade from './Pages/Upgrade';
import SignIn from './Pages/CreateAccount/Signin';
import Signup from './Pages/CreateAccount/SignupForm';
import Candidate from './Pages/Dashboard/Candidate';
import EditProfile from './Pages/Dashboard/EditProfile';
import Page from './Pages/CVUpload';

const App = () => {
  return (
    <Router>
      <div className="bg-[#0a0b14] min-h-screen">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} /> 
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/signin" element={<SignIn/>} /> 
          <Route path="/signup" element={<Signup/>} /> 
          <Route path="/upgrade" element={<Upgrade/>}/>
          <Route path="/dashboard" element={<Candidate/>}/>          
          <Route path="/editprofile" element={<EditProfile/>}/>  
          <Route path="/uploadcv" element={<Page/>}/>                  
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
