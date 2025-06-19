import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./components/Services/Services";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import PackagesList from "./components/PackagesList/PackagesList";
import Homepage from "./components/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/packages/:category/:service"
            element={<PackagesList />}
          />
          <Route
            path="/package/:category/:service/:packageName"
            element={<PackageDetails />}
          />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
