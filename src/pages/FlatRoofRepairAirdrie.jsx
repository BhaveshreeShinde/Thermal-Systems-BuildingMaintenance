import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import "../assets/css/comman.css";
const FlatRoofRepairAirdrie = () => {
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/20190711_094421_No-Skyline.jpg"
        heading="FLAT ROOF REPAIR AIRDRIE"
      />
      <Container sx={{ padding: "30px", marginBottom: "30px" }}>
        <Paper elevation={2}>
          <Box className="main">
            <div>
              <div className="heading">
                <p>
                  Thermal Systems Is You Best Choice for Flat Roof Repair in
                  Airdrie
                </p>
              </div>
              <div class="decoration">
                <div class="decoration-inside"></div>
              </div>
              <Container>
                <div>
                  <p>
                    Thermal Systems has been around for over 30 years and we
                    understand Airdrie. We know that Airdie has been around
                    since 1899, or so, and we see eye-to-eye. We also know that
                    Airdrie was founded as a railway town, as a place between
                    Calgary and Oiler country.<a href="/about"> We’ve installed a lot of flat
                    roofs in this great city over the years</a> and know that there
                    is a high demand for flat roof repair services in Airdrie.
                    We’ve been up there, we’ve seen it!
                  </p>
                </div>
                <h2 className="h2-heading">
                  We Can Help You Avoid Costly Repairs for Your Flat Roof
                </h2>
                <p>
                  It is generally considered that the best-case scenario for the
                  longevity of a flat roof is around 15-20 years. That is
                  best-case. When you factor in the harsh weather we all have to
                  deal with in Alberta, that number is likely to be a lot lower.
                  So why not consider preventative maintenance for your flat
                  roof?
                </p>
                <p>
                  The professionals at Thermal Systems can quickly inspect your
                  flat roof, no matter what type of construction or age it is.
                  This is an unobtrusive event, and you won’t even know we were
                  there until we supply you with a detailed analysis of the
                  health of your roof.
                </p>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12} sm={12}>
                    <h2 className="h2-heading">
                      We Offer All Types of Flat Roof Repairs
                    </h2>
                  </Grid>
                  <Grid item xs={12} md={7} lg={7} sm={7}>
                    <p style={{ marginTop: "0px" }}>
                      Our team of roofing professionals are qualified and
                      experienced will all sorts of flat roof repairs. We can
                      inspect, repair and install various types of flat roofs
                      including:
                    </p>
                    <div>
                      <ul>
                        <li><a href="https://www.iko.com/comm/technical_documents/bur-built-roofing-systems-brochure-english/">Build Up Roofs (BUR)</a></li>
                      </ul>
                      <ul>
                        <li>Modified Bitumen Roofing</li>
                      </ul>
                      <ul>
                        <li>
                          Ethylene Propylene Diene Terpolymer (EPDM) Roofs
                        </li>
                      </ul>
                      <ul>
                        <li>Thermoplastic Membrane Roofs (PVC or TPO)</li>
                      </ul>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={5} sm={12}>
                    <img style={{width:"100%"}} alt="flatroofrepairairdrie" src="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2015/03/Testimonial-2-300x146.jpg" />
                  </Grid>
                </Grid>
                <h2 className="h2-heading">
                  Repair Your Flat Roof or Replace It? The Bottom Line Speaks
                  for Itself
                </h2>
                <p>
                  Whether we recommend repairs or not, routine maintenance and
                  taking care of minor repairs of a flat roof can significantly
                  extent its life expectancy. Typically, small repairs and
                  maintenance can extend the life of your flat room by several
                  years, with many property owners seeing up to 5 years of extra
                  longevity for their roofs.
                </p>
                <p>
                  Choosing to repair your flat roof as opposed to replacing it
                  can help to improve your bottom line substantially. That is
                  especially true when one considers that there are always big
                  breakthroughs just around the corner, even in the flat roof
                  repair industry. In other words, repairing the flat roof you
                  have now might add 5 years to its life, and during that time a
                  new flat roof solution may become available that lasts for 40
                  years instead of 15.
                </p>

                <h2 className="h2-heading">
                  Commercial, Retail and Residential Flat Roof Repairs
                </h2>
                <p>
                  No matter the type of flat roof you have, if it needs repairs,
                  our team can handle it. Our professionals have extensive
                  experience providing flat roof repairs throughout Airdrie. In
                  fact, we have experience repairing commercial, residential,
                  and, and retail roofs. Some of our flat roof repair projects
                  have included residential homes, apartments, warehouses,
                  garages, and more.
                </p>
                <h2>
                  Time Is of the Essence When It Come to Repairing Your Flat
                  Roof
                </h2>
                <p>
                  We are available for 24-hour emergency flat roof repair
                  services. Also, the sooner you let us fix your flat roof
                  leaks, the less your water damage will be.
                </p>
              </Container>
            </div>
          </Box>
          <Container className="message">
            <h2 className="h2-heading">
              <a href="/contact">
                Contact the flat roof professionals at Thermal Systems today
              </a>
            </h2>
            <h3>If you have noticed leaks in your flat roof.</h3>
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

export default FlatRoofRepairAirdrie;
