import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Container} from "@mui/material";
import "../assets/css/comman.css";
import ContainerCom from "../components/layouts/Container";
const BuildingMaintenance = () => {
  const additionalContent = (
    <>
      <Container>
        <h4>Visual Inspection Services:</h4>
        <p className="justify-content">
          Good exterior building maintenance begins with an overall visual
          inspection. Once we have conducted a visual inspection of your
          building we will provide you with a detailed report of our findings
          and recommendations for permanent repairs on areas of concern.
        </p>

        <h4>Engineering/Consultant Inspection Services:</h4>

        <p className="justify-content">
          We work together with engineers/consultants to provide equipment and
          people to open areas of the buildings exterior to gain access to areas
          of concern therefor collecting the necessary information required to
          provide you with permanent repair recommendations. We also provide
          expert advice and help make the needed repairs.
        </p>

        <h4>Maintenance & Repairs Services:</h4>
        <div >
          <ul >
            <li>Emergency Cladding and Panel Repair, Replace or Removal</li>
          </ul>
          <ul >
            <li>
              Architectural Panel & Metal Cladding Repair and Replacement – All
              Size Projects
            </li>
          </ul>
          <ul >
            <li>Architectural Panel and Cladding Cleaning</li>
          </ul>
          <ul >
            <li>
              Insulation Repair or Replacement – Mold, R Value Concerns, Thermal
              Bridging
            </li>
          </ul>
          <ul >
            <li>
              Air/Vapor Membrane – Seam Lap Deficiencies & Penetration Issues
            </li>
          </ul>
          <ul >
            <li>Wall System Cleaning – Pressure Wash</li>
          </ul>
          <ul >
            <li>Caulking and Sealing</li>
          </ul>
        </div>
      </Container>
    </>
  );
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/Building-maint-1.jpg"
        heading="Building Maintenance"
      />
      <ContainerCom
        title="Building Maintenance"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default BuildingMaintenance;
