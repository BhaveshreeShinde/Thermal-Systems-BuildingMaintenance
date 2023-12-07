import React from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Container } from "@mui/material";
import "../assets/css/comman.css";
import ContainerCom from "../components/layouts/Container";

const About = () => {
  const additionalContent = (
    <>
      <Container>
        <p>
          At Thermal Systems we are seeking to revolutionize the Building
          Maintenance Industry through Inspired people pushing the use of the
          latest technology for the purpose of reducing the life cycle costs of
          your Building Envelope & Roofing System.
        </p>

        <p>
          Thermal Systems(<a href="https://www.thermalsystems.ca/">www.thermalsystems.ca</a>
          ) has long had a tremendous reputation for Building some of the most
          Inspired Visions within the Building Envelope Industry. Thermal
          Systems has begun a new journey, a journey to develop Inspired
          Maintenance Programs for the Building Envelope Industry. Thermal
          Systems is not looking to be normal.
        </p>
        <p>
          With over 30 years of Building Envelope Construction experience,
          Thermal Systems is a true leader in the Industry. Our acquisition of
          Skyline Building Envelope Solutions (CGY) Inc. (
          <a href="https://dec-tec.com/">www.dec-tec.com</a>
          ) has further cemented our reputation as a Building Envelope Leader
          committed to looking after your needs from New Construction right
          through the entire lifecycle of your Building. Our willingness to want
          to stay involved through the entire Building Lifecycle is a true
          testament to the confidence we have in our New Construction quality
          and expertise.
        </p>
        <p>
          Thermal Systems operates within a set of Core Values that will not be
          compromised:
        </p>
        <ul>
          <li>Safety</li>
        </ul>
        <ul>
          <li>Integrity</li>
        </ul>
        <ul>
          <li>Quality</li>
        </ul>
        <ul>
          <li>Advancement</li>
        </ul>
        <ul>
          <li>Performance</li>
        </ul>
        <div>
          <p>
            We look forward to treating your project and your people with the
            respect and integrity that everyone and every project deserves..
          </p>
        </div>
        <div>
          <p>
            Call us and we will start building a relationship that outlasts your
            Building Lifecycle!
          </p>
        </div>
      </Container>
    </>
  );
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/IMG_0023_cropped.jpg"
        heading="ABOUT"
      />
      <ContainerCom
        title="The Thermal Systems Maintenance Story"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default About;
