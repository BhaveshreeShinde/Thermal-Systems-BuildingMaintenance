import React from "react";
import LandingPageSmall from "../components/layouts/LandingPageSmall";
import { Box, Container, Grid } from "@mui/material";
import "../assets/css/comman.css";
import ARCALogo from "../assets/images/ARCALogo.webp";
import ContainerCom from "../components/layouts/Container";
import { Helmet } from "react-helmet";
import CommercialReRoofingLanding from "../assets/images/Commercial-Re-Roofing-Services.webp"

const CommercialReRoofing = () => {
  const additionalContent = (
    <>
      <Box className="main">
        <Container>
          <div className="textfieldgrid">
            <p  className="justify-content">
              Thermal Systems is a leading roof replacement contractor. We
              understand the responsibility of operating as a prime contractor,
              which is very often the case when executing re-roof projects on
              behalf of our clients.
            </p>
          </div>

          <div>
            <p  className="justify-content">
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
            <Grid item xs={12} sm={12} md={3}>
              <img alt="commercialReRoofing" src={ARCALogo} className="myLogo" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Commercial Re-Roofing Services | Thermal Systems</title>
        <meta
          name="description"
          content="Thermal Systems is a leading roof replacement contractor able to service a wide variety of roofs, including standing seam, metal and asphalt roofs."
        />
      </Helmet>
      <LandingPageSmall
        landingImg={CommercialReRoofingLanding}
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
