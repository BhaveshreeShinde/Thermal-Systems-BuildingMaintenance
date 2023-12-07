import * as React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Safety from "./pages/Safety";
import BuildingMaintenance from "./pages/building-maintenance";
import Contact from "./pages/Contact";
import EmergencyService from "./pages/EmergencyService";
import CommercialRoofing from "./pages/CommercialRoofing";
import RoofTopRepair from "./pages/RoofTopRepair";
import CommercialReRoofing from "./pages/CommercialReRoofing";
import CommercialWall from "./pages/CommercialWall";
import TrustThermalSystems from "./pages/TrustThermalSystems";
import FlatRoofRepairAirdrie from "./pages/FlatRoofRepairAirdrie";
import CommercialCladdingRepairCalgary from "./pages/CommercialCladdingRepairCalgary";
import BuildingEnvelopeRepairCalgary from "./pages/BuildingEnvelopeRepairCalgary";
import Header from "./components/layouts/Header";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  function getCurrentPageTitle() {
    const path = location.pathname;
    switch (path) {
      case "/":
        return "Home";
      case "/about":
        return "About Us";
      case "/safety":
        return "Safety";
      case "/services/building-maintenance":
        return "Building Maintenance";
      case "/services/24-hour-emergency-service":
        return "Emergency Service";
      case "/services/commercial-roofing-maintenance-repairs":
        return "Commercial Roofing";
      case "/services/tenant-and-mechanical-upgrades":
        return "Roof Top Repair";
      case "/services/commercial-re-roofing":
        return "Commercial Re-Roofing";
      case "/services/commercial-wall-systems":
        return "Commercial Wall Systems";
      case "/TrustThermalSystems":
        return "Trust Thermal Systems";
      case "/FlatRoofRepairAirdrie":
        return "Flat Roof Repair in Airdrie";
      case "/CommercialCladdingRepairCalgary":
        return "Commercial Cladding Repair in Calgary";
      case "/BuildingEnvelopeRepairCalgary":
        return "Building Envelope Repair in Calgary";
      case "/contact":
        return "Contact";
      default:
        return "Thermal Systems";
    }
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/safety" element={<Safety />}></Route>
        <Route
          path="/services/building-maintenance"
          element={<BuildingMaintenance />}></Route>
        <Route
          path="/services/24-hour-emergency-service"
          element={<EmergencyService />}></Route>
        <Route
          path="/services/commercial-roofing-maintenance-repairs"
          element={<CommercialRoofing />}></Route>
        <Route
          path="/services/tenant-and-mechanical-upgrades"
          element={<RoofTopRepair />}></Route>
        <Route
          path="/services/commercial-re-roofing"
          element={<CommercialReRoofing />}></Route>
        <Route
          path="/services/commercial-wall-systems"
          element={<CommercialWall />}></Route>
        <Route
          path="/TrustThermalSystems"
          element={<TrustThermalSystems />}></Route>
        <Route
          path="/FlatRoofRepairAirdrie"
          element={<FlatRoofRepairAirdrie />}></Route>
        <Route
          path="/CommercialCladdingRepairCalgary"
          element={<CommercialCladdingRepairCalgary />}></Route>
        <Route
          path="/BuildingEnvelopeRepairCalgary"
          element={<BuildingEnvelopeRepairCalgary />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Helmet>
        <title>{getCurrentPageTitle()} | Thermal Systems</title>
      </Helmet>
      <Footer />
    </div>
  );
}

export default App;
