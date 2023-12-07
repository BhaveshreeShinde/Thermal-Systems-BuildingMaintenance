import React from "react";
import "../assets/css/home.css";
import { Button, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="landing-container">
        <div className="image-container">
          <img
            src="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2019/07/Calgary-Water-Centre-Calvin-Fehr-Photo-Oct-17-2011_416c37c5a6cf96e607bdc6debc485d05.jpg"
            alt="landingimage"
          />
          <div className="overlay"></div>
          <div className="centered-text-home">
            <h1>
              Specializing in Maintenance of your <br />
              Roof and Building Envelope
            </h1>
            <p>
              Building Envelope Maintenance and Repair | 24 Hour Emergency
              Service – Leaks and Wall Systems | Commercial Roofing Maintenance
              and Repair
              <br /> Roof Top Repair or Tenant Improvements | Commercial
              Re-Roofing | Commercial Wall Systems
            </p>
            <Button variant="outlined" href="/about">ABOUT US</Button>
          </div>
        </div>
      </div>

      <div className="landing-section">
        <h1>
          SPECIALIZING IN MAINTENANCE OF YOUR <br />
          ROOF AND BUILDING ENVELOPE
        </h1>
        <div className="decoration">
          <div className="decoration-inside"></div>
        </div>
        <p>
          Our continued growth is testament to our pledge to provide you with
          products of the highest quality and unmatched customer service; we
          have built our reputation on this belief.
        </p>
        <p>
          We take the time to listen to your needs and will advise you of the
          best possible options for your project and budget. We treat each
          customer with the utmost professionalism and respect.
        </p>
        <p>
          We are confident that our abilities and that of our talented staff
          will make us stand out from the pack. We offer a wide variety of
          services tailored to your needs.
        </p>
        <p>
          To be successful in business, it takes a winning combination of
          services, competitive pricing and dedication to customer service.
        </p>

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
    </>
  );
};

export default Home;
