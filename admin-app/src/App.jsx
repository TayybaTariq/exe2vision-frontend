import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Signup from "./pages/Signup";
// import AboutResearch from "./pages/AboutResearch";
// import ExeVisionHome from "./pages/ExeVisionHome";
// import ScanHistoryComponent from "./pages/ScanHistory";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/AdminLogin";


const App = () => {
  return (
    <BrowserRouter>
     
     

      {/* Page Content */}
      <div> 
        <Routes>
          
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminPage />} />
         
         
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
