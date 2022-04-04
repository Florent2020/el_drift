import React, { useState } from "react";
import logo from "../../images/logo1.jpg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import ValidationError from "../forms/ValiditationError";

// const DEFAULT_VALUES = {
//   skills: "",
// };

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name!")
    .min(2, `Your name must be at least 2 characters!`),
  address: yup.string().required("Please enter your address!"),
  post_code: yup
    .number()
    // .string()
    .required("Please enter your post code number!")
    .typeError("Please enter your post code number"),
  city: yup.string().required("Please enter your city!"),
  phone_number: yup.string().required("Please enter your phone number!"),
  email: yup
    .string()
    .required("Please enter an email address!")
    .email("Please enter a valid email address!"),
});

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);

    setSubmitted(true);

    // reset(DEFAULT_VALUES);
  }

  return (
    <div className="registration">
      <div>
        <div className="info__details">
          <img src={logo} alt="logo" />
          <h1>Register as private user</h1>
          <h3>Your details</h3>
        </div>
        <hr></hr>
      </div>

      <Container>
        {submitted && (
          <Alert variant="success">Your register was successful!</Alert>
        )}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Control placeholder="Your Name" {...register("name")} />
            {errors.name && (
              <ValidationError>{errors.name.message}</ValidationError>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control placeholder="Address" {...register("address")} />
            {errors.address && (
              <ValidationError>{errors.address.message}</ValidationError>
            )}
          </Form.Group>

          <div className="col__2">
            <Col sm={6} md={6}>
              <Form.Group>
                <Form.Control
                  placeholder="Post Code"
                  {...register("post_code")}
                />
                {errors.post_code && (
                  <ValidationError>{errors.post_code.message}</ValidationError>
                )}
              </Form.Group>
            </Col>

            <Col sm={6} md={6}>
              <Form.Group>
                <Form.Control placeholder="City" {...register("city")} />
                {errors.city && (
                  <ValidationError>{errors.city.message}</ValidationError>
                )}
              </Form.Group>
            </Col>
          </div>

          <Form.Group>
            <Form.Control
              placeholder="Phone Number"
              {...register("phone_number")}
            />
            {errors.phone_number && (
              <ValidationError>{errors.phone_number.message}</ValidationError>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Control placeholder="Email Address" {...register("email")} />
            {errors.email && (
              <ValidationError>{errors.email.message}</ValidationError>
            )}
          </Form.Group>

          <div>
            <Button variant="info" type="submit" className="register__btn">
              Register
            </Button>
          </div>

          <div>
            <Button variant="dark" type="reset" className="cancel__btn">
              Cancel
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default ContactForm;
