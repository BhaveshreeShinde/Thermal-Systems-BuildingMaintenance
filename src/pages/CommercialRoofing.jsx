import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Container} from "@mui/material";
import "../assets/css/comman.css";
import ContainerCom from "../components/layouts/Container";
const CommercialRoofing = () => {
  const additionalContent = (
    <>
      <Box className="main">
        <Container>
          <p  className="justify-content">
            Safety is our first Core Value and a way of life. Thermal Systems
            Building Maintenance prides itself in being a leader in the Health
            Safety and Environment field. Thermal
          </p>

          <h2>Visual Inspections:</h2>
          <p  className="justify-content">
            Good commercial roof maintenance begins with annual roof inspection
            which provides you with the overall condition of the roof, as well
            as pointing out any areas of concern. Upon completion of the visual
            inspections, you are provided with a detailed report, complete with
            repair recommendations.
          </p>

          <p  className="justify-content">Contact us today to begin your roof maintenance program.</p>

          <div>
            <p  className="justify-content">
              As a member of the Alberta Roofing Contractors Association you can
              rest assured that all roof repairs are conducted by qualified
              personal to the highest standard.
            </p>
          </div>
          <div>
            <h2>Maintenance & Repairs:</h2>
            <ul>
              <li>Pressure washing</li>
            </ul>
            <ul>
              <li>Cut tests</li>
            </ul>
            <ul>
              <li>Flood tests</li>
            </ul>
            <ul>
              <li>Advancement</li>
            </ul>
            <ul>
              <li>Repairs on all types of roof membranes and metal roofs</li>
            </ul>
            <ul>
              <li>And much, much more…</li>
            </ul>
          </div>

          <div>
            <p  className="justify-content">Contact us today to begin your roof maintenance program.</p>
          </div>

          <div>
            <p  className="justify-content">
              As a member of the Alberta Roofing Contractors Association you can
              rest assured that all roof repairs are conducted by qualified
              personal to the highest standard.
            </p>
          </div>
        </Container>
      </Box>
    </>
  );
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/Improveemebnts-Tenant-Mechanical-Upgrades-banner-1.jpg"
        heading="COMMERCIAL ROOFING,
        MAINTENANCE & REPAIRS"
      />
      <ContainerCom
        title="Commercial Roofing, Maintenance & Repairs "
        additionalContent={additionalContent}
      />
    </>
  );
};

export default CommercialRoofing;
