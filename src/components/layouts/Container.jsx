import React from "react";
import { Container, Paper } from "@mui/material";
import "../../assets/css/containercom.css";

const ContainerCom = (props) => {
  return (
    <>
      <Container className="main">
        <Paper elevation={2}>
          <div>
            <div className="heading">
              <p>{props.title}</p>
            </div>
            <div class="decoration">
              <div class="decoration-inside"></div>
            </div>
            {props.additionalContent}
            <Container>
              <div className="textfieldgrid">
                <p className="footerCon">
                  Thermal Systems has been providing residents of{" "}
                  <a href="/TrustThermalSystems">Calgary </a>
                  and{" "}
                  <a href="/FlatRoofRepairAirdrie">
                    Airdrie with flat roof
                  </a>,{" "}
                  <a href="/CommercialCladdingRepairCalgary">
                    commercial clading{" "}
                  </a>
                  and{" "}
                  <a href="/BuildingEnvelopeRepairCalgary">
                    building envelope repair{" "}
                  </a>
                  for more than 30 <br /> years. We are proud of our
                  longstanding history of quality workmanship and offer 24/7
                  emergency repair services.
                </p>
              </div>
            </Container>
          </div>
        </Paper>
      </Container>
    </>
  );
};

export default ContainerCom;
