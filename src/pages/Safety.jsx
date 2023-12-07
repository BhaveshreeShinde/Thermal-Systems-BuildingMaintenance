import React from "react";
import LandingPage from "../components/layouts/LandingPage";
// import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import "../assets/css/comman.css";

import logo from "../assets/images/avetta.png";
import cor2 from "../assets/images/cor2.png";
import CanQual from "../assets/images/CanQual.jpg";
import Complyworks from "../assets/images/Complyworks.jpg";
import ISN from "../assets/images/ISN.jpg";
import POST from "../assets/images/POST.png";
import ContainerCom from "../components/layouts/Container";
import { Container, Grid } from "@mui/material";
const Safety = () => {
  const additionalContent = (
    <>
      <Container>
        <p>
          Safety is our first Core Value and a way of life. Thermal Systems
          Building Maintenance prides itself in being a leader in the Health
          Safety and Environment field. Thermal Systems has in many instances
          been recognized for not only being a leading Sub Contractor but a
          leader for the entire project. We believe that safety is for the
          benefit of all and we look to share our expertise with our fellow
          trades as well as our clients. A true Safety Leader is a mentor on the
          job site, whose focus is to ensure everybody goes home safe at the end
          of the day. At Thermal Systems we believe our dedication to improving
          our Safety Performance is demonstrated by thinking out of the box; not
          only do we look to have the best systems and culture, but we also look
          to continually innovate in the design and engineering of our equipment
          in order to be a leader in Building Maintenance Safety.
        </p>
        <Grid container textAlign="center">
          <Grid item xs={12} sm={12} md={3}>
            <img alt="safety" src={logo} />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <img src={cor2} alt="safety"/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <img src={CanQual} className="canQual" alt="safety"/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <img src={Complyworks} className="canQual" alt="safety"/>
          </Grid>
        </Grid>
        <Grid container className="textfieldgrid" textAlign="center">
          <Grid item xs={12} sm={12} md={3}>
            <img src={ISN} className="canQual" alt="safety"/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <img src={POST} className="canQual" alt="safety"/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/IMG_0023_cropped.jpg"
        heading="Safety"
      />
      <ContainerCom
        title="Safety Information"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default Safety;
