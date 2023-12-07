import React, { useState } from "react";
import LandingPage from "../components/layouts/LandingPage";
import { Button, Container, Grid, TextField } from "@mui/material";
import "../assets/css/comman.css";
import ContainerCom from "../components/layouts/Container";
import axios from "axios";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });

  const baseUrl = "https://dectecwebapi-staging.azurewebsites.net";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const newErrorMessages = {};

    if (!formData.firstName) {
      newErrorMessages.firstName = "Please enter your first name.";
    }

    if (!formData.lastName) {
      newErrorMessages.lastName = "Please enter your last name.";
    }

    if (!formData.email) {
      newErrorMessages.email = "Please enter your email.";
    }

    if (!formData.company) {
      newErrorMessages.company = "Please enter your company name.";
    }

    if (Object.keys(newErrorMessages).length > 0) {
      setErrorMessages(newErrorMessages);
    } else {
      console.log(formData);

      const obj = {
        UserId: 1,
        ReturnRecordId: true,
        ReturnRecordError: true,
        SaveList: [
          {
            Id: 0,
            FirstName: formData.firstName,
            LastName: formData.lastName,
            Email: formData.email,
            Company: formData.company,
            Message: formData.message,
          },
        ],
      };

      await axios
        .post(`${baseUrl}/api/Users/SavetsbmContactUs`, obj)
        .then(async (res) => {
          const id = res?.data?.data?.[0]?.objData?.id ?? 0;
          if (!id) return null;
          const emailObj = { tsbmContactUsId: id };
          await axios
            .post(`${baseUrl}/api/Users/SendEmailFortsbmContactUs`, emailObj)
            .then((res) => {
              alert("Email send successfully");
              console.log("Email send successfully", res);
            })
            .catch((err) => {
              console.log("error while sending email :: ", err);
            });
        })
        .catch((err) => {
          console.log("error while sending data :: ", err);
        });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
      setErrorMessages({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
      });
    }
  };
  const additionalContent = (
    <Container className="myHead">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <Container>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                fullWidth
              />
              {errorMessages.firstName && (
                <div style={{ color: "red" }}>{errorMessages.firstName}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                fullWidth
              />
              {errorMessages.lastName && (
                <div style={{ color: "red" }}>{errorMessages.lastName}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
              />
              {errorMessages.email && (
                <div style={{ color: "red" }}>{errorMessages.email}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                fullWidth
              />
              {errorMessages.company && (
                <div style={{ color: "red" }}>{errorMessages.company}</div>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                className="myBtn"
                fullWidth>
                Send
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </Container>
  );
  return (
    <>
      <LandingPage
        landingImg="https://www.tsbuildingmaintenance.ca/wp-content/uploads/2018/02/Contact-1d.jpg"
        heading="contact"
        title="The Thermal Systems Maintenance Story"
      />
      <ContainerCom
        title="Request a Quote or Send Us a Message"
        additionalContent={additionalContent}
      />
    </>
  );
};

export default Contact;
