import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Container, Grid} from "@mui/material";
import "../assets/css/comman.css";
import solatube from "../assets/images/solatube.jpg";
import ARCALogo from "../assets/images/ARCALogo.jpg";
import BOMACalgaryLogo from "../assets/images/BOMACalgaryLogo.png";
import abconstructionassoc from "../assets/images/abconstructionassoc.gif";
import ContainerCom from "../components/layouts/Container";

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
              <p>
                Thermal Systems Building Maintenance is a leader in the
                commercial roof top repair and tenant improvement installation
                industry. We pride ourselves in responding quickly to estimate
                requests and executing the repairs or tenant improvements on the
                client’s timeline.
              </p>
              <p>
                We work closely with Mechanical Contractors to support their
                work when the building envelope is affected.
              </p>
              <p>
                Thermal Systems is an exclusive distributor for two high quality
                daylighting products; Solatube and Kalwall both of which have
                the ability to truly renew and energize a dark interior. Don’t
                hesitate to ask us for more information on your daylighting
                project, we will have our product experts come and see you to
                explain the application of these two great products.
              </p>
              <p>
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
            <p>
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
              <img alt="rooftoprepair" className="arca" src={abconstructionassoc} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/Tenant-Improve-3-Venting.jpg"
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
