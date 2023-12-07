import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import "../assets/css/comman.css";
const TrustThermalSystems = () => {
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/20190711_094421_No-Skyline.jpg"
        heading="FLAT ROOF REPAIR CALGARY"
      />
      <Container sx={{ padding: "30px", marginBottom: "30px" }}>
        <Paper elevation={2}>
          <Box className="main">
            <div>
              <div className="heading">
                <p>
                  Trust Thermal Systems for Your Flat Roof Repairs in Calgary
                </p>
              </div>
              <div class="decoration">
                <div class="decoration-inside"></div>
              </div>
              <Container>
                <div>
                  <p className="justify-content">
                    For over 30 years Thermal Systems have been known as a
                    leader in the building envelope industry, including
                    maintenance, repair, and cladding services. Lately though,
                    we’ve been building a name for ourselves as a name you can
                    trust.
                  </p>
                </div>
                <h2 className="h2-heading">
                  We Repair Residential and Commercial Flat Roofs
                </h2>
                <p className="justify-content">
                  If you have a flat roof in need of repairs, contact the
                  professionals at Thermal Systems. Whether your building is an
                  apartment, home, school, factory or warehouse, we can quickly
                  diagnose the extent of the damage to your roof and repair it
                  ASAP. After an inspection we will explain any work needs to be
                  done, your repair options, and of course provide an estimate
                  that fits your budget.
                </p>
                <p className="justify-content">
                  Thermal Systems also offers{" "}
                  <a href="/services/24-hour-emergency-service">
                    24-hour emergency flat roof repair services throughout
                    Calgary
                  </a>
                  , so be sure to call us immediately after you notice a leak to
                  minimize any damage to your property.
                </p>
                <Grid container spacing={2} alignItems="end">
                  <Grid item xs={12} md={4} sm={12}>
                    <img style={{width:"100%"}} alt="trustthermalsystems" src="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/commercial-roofing-300x170.jpg" />
                  </Grid>
                  <Grid item xs={12} md={8} lg={8} sm={12}>
                    <h2 className="h2-heading">
                      Repairs for All Types of Flat Roofs
                    </h2>
                    <p style={{ marginTop: "0px" }}  className="justify-content">
                      As flat roof repair professionals, the team at Thermal
                      Systems can repair virtually any type of flat roof,
                      regardless of what it is built from. The type of flat
                      roofs we repair include:
                    </p>
                    <ul>
                      <li>
                        Build Up Roofs (BUR)Probably what most people think of
                        when they think of flat roofs, these are “tar and gravel
                        roofs”. BURs typically have a base of 3-4 layers of felt
                        covered by tar or asphalt, with small pea gravel or
                        other aggregate providing a cover to protect against UV
                        damage
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} sm={12}>
                    <ul>
                      <li>
                        Modified Bitumen RoofingThese are similar to BURs but do
                        not have an outermost layer of gravel.They only have two
                        layers and can be identified by having seams every 3
                        feet.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="https://epdmroofs.org/what-is-epdm/">Ethylene Propylene Diene Terpolymer (EPDM) Rubber Roof </a>
                        EPDM roofs are made from larger pieces of rubber and
                        therefore have less seams, which means leaks, and the
                        need for repairs, are less likely. EPDM roofs are less
                        attractive than other types of flat roofs but have a
                        considerably lower cost versus BURs.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Spray Polyurethane Foam Roof (SPF)This is rather
                        self-explanatory. A layer of high-density polyurethane
                        is sprayed on the roof then covered with another coat of
                        waterproofing. While SPF roofs are energy efficient,
                        seamless and waterproof, repairs can be difficult.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Thermoplastic Membranes (PVC or TPO)Thermoplastic Olefin
                        (TPO) or Polyvinyl Chloride (PVC)are also typical
                        options for flat roofs in and around Calgary. Again,
                        these are cost-effective roofing options that are easier
                        to repair than BURs, but your best option for quick,
                        reliable, and long-lasting repairs is to trust the
                        professionals at Thermal Systems.
                      </li>
                    </ul>
                  </Grid>
                </Grid>

                <h2 className="h2-heading">
                  Thermal Systems Knows Flat Roofs, Call Us When You Have a
                  Leak!
                </h2>
                <p className="justify-content">
                  So, call Thermal Systems if you detect a leak in your flat
                  roof. We know our stuff and are the experts who can minimize
                  any water damage and give you peace of mind. Our goal is to
                  help you sleep at night.
                </p>

                <h2>
                  Water-tight Roof Repairs in Calgary That Helps You Sleep at
                  Night
                </h2>
                <p className="justify-content">
                  We highly doubt you will fall asleep at night when you think
                  of us, but if a dripping roof keeps you up at night, we hope
                  you think of Thermal Systems. We also hope you think of us
                  first if you notice a leak in your roof. After all, we offer
                  quick and professional flat roof repairs and our goal is to
                  help you sleep at night, no matter what type of flat roof you
                  own.
                </p>
              </Container>
            </div>
          </Box>
          <Container className="message">
            <h2 className="h2-heading">
              <a href="/contact">
                Contact us today if you notice a leak in your flat roof.
              </a>
            </h2>
            <h3>We are available 24/7 for emergencies.</h3>
          </Container>
          <Grid item xs={12} className="textfieldgrid">
            <Button
              variant="contained"
              href="/contact"
              sx={{ backgroundColor: "#D13139", marginBottom: "60px" }}>               
              CONTACT US
            </Button>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default TrustThermalSystems;
