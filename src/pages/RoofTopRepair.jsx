import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Container, Grid} from "@mui/material";
import "../assets/css/comman.css";
import solatube from "../assets/images/solatube.webp";
import ARCALogo from "../assets/images/ARCALogo.webp";
import BOMACalgaryLogo from "../assets/images/BOMACalgaryLogo.webp";
import AbconstructionassocLogo from "../assets/images/AbconstructionassocLogo.webp";
import ContainerCom from "../components/layouts/Container";
import { Helmet } from "react-helmet";
import RoofTopRepairLanding from "../assets/images/Tenant-Improvements-Mechanical-Upgrades.webp"

const RoofTopRepair = () => {
  const additionalContent = (
    <>
      <Box className="main">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <img alt="rooftoprepair" src={solatube} className="solatube" />
            </Grid>
            <Grid item xs={12} sm={6} md={5} sx={{ marginLeft: "25px" }}>
              <p className="justify-content">
                Thermal Systems Building Maintenance is a leader in the
                commercial roof top repair and tenant improvement installation
                industry. We pride ourselves in responding quickly to estimate
                requests and executing the repairs or tenant improvements on the
                client’s timeline.
              </p>
              <p className="justify-content">
                We work closely with Mechanical Contractors to support their
                work when the building envelope is affected.
              </p>
              <p className="justify-content">
                Thermal Systems is an exclusive distributor for two high quality
                daylighting products; Solatube and Kalwall both of which have
                the ability to truly renew and energize a dark interior. Don’t
                hesitate to ask us for more information on your daylighting
                project, we will have our product experts come and see you to
                explain the application of these two great products.
              </p>
              <p className="justify-content">
                Thermal Systems will execute on most any commercial rooftop
                repair projects including:
              </p>
              <ul>
                <li>Mechanical curb installs and deletions</li>
              </ul>
              <ul>
                <li>Partial roof replacements</li>
              </ul>
              <ul>
                <li>Supply and installation of snow stops</li>
              </ul>
              <ul>
                <li>
                  Daylighting – Tenant improvement installation or renew using
                  exclusive products such as{" "}
                  <a href="https://solatube.com/">Solatube </a>and{" "}
                  <a href="https://www.kalwall.com/">Kalwall</a>
                </li>
              </ul>
              <ul>
                <li>Tie–off anchor installation</li>
              </ul>
            </Grid>
          </Grid>

          <div>
            <p className="justify-content">
              Thermal Systems is a member of the Alberta Roofing Contractors
              Association.
            </p>
          </div>

          <Grid container>
            <Grid item xs={12} sm={12} md={3}>
              <img alt="rooftoprepair" className="arca" src={ARCALogo} />
            </Grid> 
            <Grid item xs={12} sm={12} md={3}>
              <img alt="rooftoprepair" className="boma" src={BOMACalgaryLogo} />
            </Grid>       
            <Grid item xs={12} sm={12} md={3}>
              <img alt="rooftoprepair" className="arca" src={AbconstructionassocLogo} />
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
        <title>Tenant Improvements And Mechanical Upgrades | Thermal Systems</title>
        <meta
          name="description"
          content="Thermal Systems Building Maintenance is a leader in the commercial roof top repair and tenant improvement installation industry."
        />
      </Helmet>
      <LandingPage
        landingImg={RoofTopRepairLanding}
        heading="TENANT IMPROVEMENTS &
        MECHANICAL UPGRADES"
      />
      <ContainerCom
        title="TENANT IMPROVEMENTS AND MECHANICAL UPGRADES"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default RoofTopRepair;
