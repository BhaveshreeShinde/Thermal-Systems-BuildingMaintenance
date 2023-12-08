import React from "react";
import "./../../assets/css/LandingPage.css";
import { Grid } from "@mui/material";

const LandingPage = (props) => {
  return (
    <Grid container className="landing-container">
      <Grid item xs={12}>
        <div className="image-container">
          <img src={props.landingImg} alt="landingimage" />
          <div className="overlay"></div>
          <div className="centered-text">
            <h2>{props.heading}</h2>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
