import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Container} from "@mui/material";
import "../assets/css/comman.css";
import ARCALogo from "../assets/images/ARCALogo.webp";
import BOMACalgaryLogo from "../assets/images/BOMACalgaryLogo.webp";
import ContainerCom from "../components/layouts/Container";
import { Helmet } from "react-helmet";
import EmergencyLanding from "../assets/images/24-Hour-Emergency-Roof-Repair.webp"

const EmergencyService = () => {
  const additionalContent = (
    <>
      <Box className="main">
        <Container>
           <p  className="justify-content">
            Thermal Systems offers 24 Hour Emergency Services to respond to Roof
            Leaks, Architectural Panel, Exterior Cladding and Flashing issues.
            Thermal Systems use its tremendous all round Building Envelope
            expertise to be able to assist in either temporarily or permanently
            fixing a building envelope emergency to ensure no more damage is
            done or damage is averted quickly and professionally. The quicker a
            situation can be addressed the lower the risk to the building owner
            and in some cases to the public at large. Thermal Systems is
            building on a long roof leak repair legacy service acquired through
            the acquisition of Skyline Building Envelope Solutions (CGY) Inc in
            2015.
          </p>
           <p  className="justify-content">
            Thermal Systems maintains a long history of building service
            information that our clients regularly benefit from when deciding on
            the best course of action for their roof or wall system maintenance.
            Ask us about our General Service Agreements which can give you
            tremendous benefits in times of an emergency.
          </p>
           <p  className="justify-content">
            Thermal Systems is a member of the Alberta Roofing Contractors
            Association.
          </p>
        </Container>
        <Container>
          <div className="companyLogo">
          <div>
            <img alt="emergencyservice" src={ARCALogo} className="ARCALogo" />
          </div>
          <div>
            <img alt="emergencyservice" src={BOMACalgaryLogo} className="BOMACalgaryLogo" />
          </div>
          </div>
        </Container>
      </Box>
    </>
  );
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>24 Hour Emergency Roof Repair | Thermal Systems</title>
        <meta
          name="description"
          content="Thermal Systems offers 24 Hours Emergency Services to respond to Roof Leaks, Architectural Panel, Exterior cladding and flashing issues Roof damage."
        />
      </Helmet>
      <LandingPage
        landingImg={EmergencyLanding}
        heading="24 HOUR EMERGENCY SERVICE"
      />
      <ContainerCom
        title=" ROOF AND WALL SYSTEM LEAKS CALL: 403-230-6739"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default EmergencyService;
