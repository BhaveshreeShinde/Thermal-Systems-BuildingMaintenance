import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../../assets/css/Footer.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { ContactNumber, EmailAddress } from "../../constant/ConstantData";

const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.widgets}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Box className={styles.box}>
                  <CardContent className={styles.cardcontent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={styles.title}>
                      LEARN MORE
                    </Typography>
                    <div className={styles.subtitle}>
                      <a href="/">HOME</a>
                    </div>
                    <div className={styles.subtitle}>
                      <a href="/about">ABOUT</a>
                    </div>
                    <div className={styles.subtitle}>
                      <a href="safety">SAFETY</a>
                    </div>
                  </CardContent>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className={styles.box}>
                  <CardContent className={styles.cardcontent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={styles.title}>
                      OUR TEAM
                    </Typography>
                    <Typography className={styles.subtitleOUR}>
                      We take pride in the solid customer relationships we have
                      built; our longevity in the industry is testament to our
                      commitment to our customers.
                    </Typography>
                    <a href="/about" className={styles.learnbtn}>
                      Learn More
                    </a>
                  </CardContent>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box className={styles.box}>
                  <CardContent className={styles.cardcontent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={styles.title}>
                      CONTACT
                    </Typography>
                    <Typography className={styles.subtitleOUR}>
                      Thermal Systems <br />
                      261185 Wagon Wheel Way <br />
                      Rocky View, AB <br />
                      T4A 0E2 <br />
                      <LocalPhoneIcon className={styles.icon} /> {ContactNumber}
                      (24 hr line) <br />
                      <EmailIcon className={styles.icon} />
                      <a href={`mailto:${EmailAddress}`}>
                        {EmailAddress}
                      </a>
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={styles.sitefooter}>
          <p>© 2023 THERMAL SYSTEMS</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
