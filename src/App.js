import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

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

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
