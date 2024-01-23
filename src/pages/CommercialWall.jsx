import React from "react";
import LandingPageSmall from "../components/layouts/LandingPageSmall";
import { Box, Container} from "@mui/material";
import "../assets/css/comman.css";
import ContainerCom from "../components/layouts/Container";
import { Helmet } from "react-helmet";
import CommercialWallSystemsLanding from "../assets/images/Commercial-Wall-Systems.webp"

const CommercialWall = () => {
  const additionalContent = (
    <>
      <Box className="main">
        <Container>
          <p  className="justify-content">
            Thermal Systems has long had a tremendous reputation for building
            some of the most inspired visions within the Building Envelope
            industry.
          </p>

          <p  className="justify-content">
            With over 30 years of Building Envelope Construction experience,
            Thermal Systems is a true leader in the industry and is capable of
            large and small wall system projects. Our capabilities include:
          </p>
          <ul>
            <li>
              Architectural Panel & Metal Cladding replacement for Renewal and
              Restoration projects
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.kalwall.com/">Kalwall </a>Installation on
              Renewal and Restoration projects
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.moeding.de/?lang=en">Moeding </a>Tile
              Installation for Renewal and Restoration Projects
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://www.moeding.de/?lang=en">Ombrae </a>
              Feature Walls to make your Renewal/Restoration Project Stand out
              from the pack
            </li>
          </ul>
          <ul>
            <li>Substrate Removal and Replacement – Renewal Projects</li>
          </ul>
          <ul>
            <li>
              Aluminum Composite Material Panel Fabrication and Installation
            </li>
          </ul>
          <ul>
            <li>Phenolic Panel Supply and Install</li>
          </ul>
          <ul>
            <li>
              {" "}
              <a href="https://www.endurocomposites.com/">Enduro </a>
              System Installation.
            </li>
          </ul>

          <p  className="justify-content">
            Thermal Systems will install and warranty all wall system products
            that meet our Core Value of Quality.
          </p>
        </Container>
      </Box>
    </>
  );
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Commercial Wall Systems | Thermal Systems</title>
        <meta
          name="description"
          content="Thermal Systems is a true leader in the industry and is equipped to handle all manner of commercial wall system projects, great & small."
        />
      </Helmet>
      <LandingPageSmall
        landingImg={CommercialWallSystemsLanding}
        heading="COMMERCIAL WALL SYSTEMS"
      />
      <ContainerCom
        title="Commercial Wall Systems"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default CommercialWall;
