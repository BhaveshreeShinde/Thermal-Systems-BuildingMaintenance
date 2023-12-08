import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import "../assets/css/comman.css";
import { Helmet } from "react-helmet";
import BuildingRepairCalgaryLanding from "../assets/images/The-Thermal-Systems-Maintenance-Story.webp"
import BuildingRepairCalgary from "../assets/images/Building-Envelope-Repair-Calgary.webp"
import TenantImprovementsMechanicalUpgrades from "../assets/images/Tenant-Improvements-Mechanical-Upgrades.webp"

const BuildingEnvelopeRepairCalgary = () => {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Building Envelope Repair Calgary | Thermal Systems</title>
        <meta
          name="description"
          content="Calgary’s Thermal Systems offers repairs to your roof, walls, and basement. 30 years of experience and can fix roofs, walls and facades."
        />
      </Helmet>
      <LandingPage
        landingImg={BuildingRepairCalgaryLanding}
        heading="BUILDING ENVELOPE REPAIR IN CALGARY"
      />
      <Container sx={{ padding: "30px", marginBottom: "30px" }}>
        <Paper elevation={2}>
          <Box className="main">
            <div>
              <div className="heading">
                <p>
                  Calgary’s Thermal Systems Is Your Building Envelope Doctor
                </p>
              </div>
              <div className="decoration">
                <div className="decoration-inside"></div>
              </div>
              <Container>
                <Grid container spacing={2} sx={{marginTop:"20px"}}>
                  <Grid item xs={12} md={7} lg={7} sm={7}>
                    <p style={{ marginTop: "0px" }} className="justify-content">
                      Your building envelope is not something your property tax
                      notice comes in. Your building envelope is everything that
                      makes up the structure your company “lives” in, including
                      your roof, walls (doors and windows) and underground
                      waterproofing elements (your basement, etc.). And when it
                      comes to building envelope repairs, Calgary's Thermal
                      Systems is no “flash in the pan”.
                    </p>
                    <p className="justify-content">
                      At Thermal Systems we are proud to have <a href="/about">over 30 years of
                      experience in the building envelope repair industry in
                      Calgary</a>. Our team of building envelope repair specialists
                      can repair virtually any damage your building envelope may
                      have.
                    </p>
                  </Grid>

                  <Grid item xs={12} md={5} sm={12}>
                    <img style={{width:"100%"}} alt="buildingenveloperepaircalgary" src={BuildingRepairCalgary} />
                  </Grid>
                </Grid>
                <h2 className="h2-heading">
                  Building Envelope Repairs 101 in Calgary: Water and Water
                  Vapor Control
                </h2>
                <p className="justify-content">
                  Water gives live but it can also create gigantic amounts of
                  damage. A building, whether it be a house or commercial
                  building is designed to keep water outside of it. Water is
                  kept out of buildings with a modern, effective roof, properly
                  installed and sealed windows, and small details that most
                  people don’t think about, such as caulking.
                </p>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12} sm={12}>
                    <h2 className="h2-heading">
                      Building Envelope Repairs 201: Air Control
                    </h2>
                  </Grid>
                  <Grid item xs={12} md={7} lg={7} sm={7}>
                    <p style={{ marginTop: "0px" }} className="justify-content">
                      The average person inhales and exhales approximately
                      11,000 liters of air per day. That means that your
                      building needs to “breathe” while also keeping out rain,
                      snow, and humidity. Ideally, your building also keeps out
                      allergens and humidity.
                    </p>
                    <p className="justify-content">As the song goes; It’s a hard knock life.</p>
                    <p className="justify-content">
                      What we do at Thermal Systems in Calgary is to make
                      buildings healthier, more efficient, and better for your
                      bottom line. After all, healthy employees are happy
                      employees.
                    </p>
                    <p className="justify-content">
                      Building envelope repairs you think are minor could be
                      having a major effect on your heating or cooling bill, and
                      making your employees sick, literally. We can seal up your
                      building and ensure that nothing but fresh, clean air is
                      being supplied to your employees.
                    </p>
                  </Grid>

                  <Grid item xs={12} md={5} sm={12}>
                    <img style={{width:"100%"}} alt="buildingenveloperepaircalgary" src={TenantImprovementsMechanicalUpgrades} />
                  </Grid>
                </Grid>
                <h2 className="h2-heading">
                  Building Envelope Repairs 301: Thermal Envelope
                </h2>
                <p className="justify-content">
                  Energy costs are crazy no matter how efficient your building
                  is, but there is a way to minimize the craziness.The bottom
                  line is that the more energy efficient your building is, the
                  less money you send back to Ottawa. And as Martha says “It’s a
                  good thing.”
                </p>
                <p className="justify-content">
                  What we do at Thermal Systems in Calgary is to inspect and
                  diagnose our building. We spot places where you are throwing
                  money out the window and offer repairs that could save you
                  money in the long term.
                </p>
                <h2 className="h2-heading">
                  Your Building Envelope Is Your Home
                </h2>
                <p className="justify-content">
                  So, while we can’t do anything about your property taxes, we
                  can ensure that your property is protected with the best
                  building envelope possible. We offer solutions that protect
                  our property and everything inside it, reduce your heating and
                  cooling costs.
                </p>
              </Container>
            </div>
          </Box>
          <Container className="message">
            <h2 className="h2-heading">
              <a href="/contact">
                So really, give us a call at Thermal Systems in Calgary. We want
                to make your building more energy efficient.
              </a>
            </h2>
            <h3>
              Oh, and if that means that we also help to save the planet, so be
              it.
            </h3>
          </Container>
          <Grid item xs={12} className="textfieldgrid">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#D13139", marginBottom: "60px" }}
              href="/contact"
              >
              CONTACT US
            </Button>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default BuildingEnvelopeRepairCalgary;
