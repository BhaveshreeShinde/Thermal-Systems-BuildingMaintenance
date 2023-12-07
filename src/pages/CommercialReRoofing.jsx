import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Container, Grid } from "@mui/material";
import "../assets/css/comman.css";
import ARCALogo from "../assets/images/ARCALogo.jpg";
import ContainerCom from "../components/layouts/Container";

const CommercialReRoofing = () => {
  const additionalContent = (
    <>
      <Box className="main">
        <Container>
          <div className="textfieldgrid">
            <p>
              Thermal Systems is a leading roof replacement contractor. We
              understand the responsibility of operating as a prime contractor,
              which is very often the case when executing re-roof projects on
              behalf of our clients.
            </p>
          </div>

          <div>
            <p>
              Thermal Systems offers full-service re-roofing; installing almost
              all roof types including:
            </p>
          </div>
          <div>
            <ul>
              <li>Commercial Flat Roof Replacement</li>
            </ul>
            <ul>
              <li>Standing Seam Roof Replacement</li>
            </ul>
            <ul>
              <li>Metal Roof Replacement</li>
            </ul>
            <ul>
              <li>Green Roof Replacement</li>
            </ul>
            <ul>
              <li>Conventional Asphalt and Felt Systems</li>
            </ul>
            <ul>
              <li>EPDM, PVC, and TPO Single Ply Systems</li>
            </ul>
            <ul>
              <li>Waterproofing</li>
            </ul>
            <ul>
              <li>Roof Daylighting – Solatube and Kalwall</li>
            </ul>
          </div>

          <div>
            <p>
              Thermal Systems is a member of the Alberta Roofing Contractors
              Association.
            </p>
            <h4>
              Thermal Systems has exclusive distribution rights for the
              following Roof Renewal products{" "}
            </h4>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://solatube.com/">Solatube </a> – Daylighting
                Tubes
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <a href="https://www.kalwall.com/">Kalwall</a> – Translucent
                Daylighting Panels
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <a href="https://bemo.com/de">Bemo</a> – Standing Seam Roofing
              </li>
            </ul>
          </div>

          <Grid container>
            <Grid item xs={6} sm={6} md={3}>
              <img alt="commercialReRoofing" src={ARCALogo} className="myLogo" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2017/08/Homepage-2a.jpg"
        heading="COMMERCIAL RE-ROOFING"
      />
      <ContainerCom
        title="Commercial Re-roofing"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default CommercialReRoofing;
