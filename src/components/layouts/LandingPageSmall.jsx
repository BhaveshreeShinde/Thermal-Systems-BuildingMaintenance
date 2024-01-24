import React from "react";
import "./../../assets/css/LandingPage2.css";
import { Grid } from "@mui/material";

const LandingPageSmall = (props) => {
  return (
    <Grid container className="landing-container-small">
      <Grid item xs={12}>
        <div className="image-container-small">
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

export default LandingPageSmall;
