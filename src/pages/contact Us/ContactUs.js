import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik/dist";
import * as Yup from "yup";

export default function ContactUs() {
  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Required!"),
    Phone: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Required!"),
    Email: Yup.string().email("Invalid email").required("Required!"),
    City: Yup.string().required("Required!"),
    School: Yup.string().required("Required!"),
    Grade: Yup.string().required("Required!"),
    Message: Yup.string().required("Required!"),
  });

  const initialValues = {
    Name: "",
    Phone: "",
    Email: "",
    City: "",
    School: "",
    Grade: "",
    Message: "",
  };

  const handleRegister = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/create/Inquiry`,
        values
      );
      if (response) {
        alert("Your application has been submitted successfully!");
        resetForm();
      } else {
        alert("Application submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      alert("Application submission failed. Please try again.");
    }
  };

  return (
    <>
      {/* <!-- inner-header --> */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">ContactUs</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <span>Contact Us</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-inner-header --> */}
      <section className="space-ptb contact-us-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h3 className="mb-4">GET IN TOUCH WITH US</h3>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  handleRegister(values, actions);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <Field
                          className="form-control bg-white border"
                          name="Name"
                          placeholder="Your Name"
                          type="text"
                        />
                        <ErrorMessage
                          name="Name"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          className="form-control bg-white border"
                          name="Phone"
                          placeholder="Your Phone"
                          type="tel"
                        />
                        <ErrorMessage
                          name="Phone"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          className="form-control bg-white border"
                          name="Email"
                          placeholder="Your Email"
                          type="email"
                        />
                        <ErrorMessage
                          name="Email"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          className="form-control bg-white border"
                          name="City"
                          placeholder="Your City"
                          type="text"
                        />
                        <ErrorMessage
                          name="City"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          as="select"
                          className="form-control bg-white border"
                          name="School"
                        >
                          <option value="">Select School</option>
                          <option value="Ludhiana">Ludhiana</option>
                          {/* Add other options */}
                        </Field>
                        <ErrorMessage
                          name="School"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          as="select"
                          className="form-control bg-white border"
                          name="Grade"
                        >
                          <option value="">Select Grade</option>
                          <option value="Beginners">Beginners</option>
                          <option value="Level1">Level1</option>
                          <option value="Level2">Level2</option>
                          <option value="Grade1">Grade1</option>
                          <option value="Grade2">Grade2</option>
                          <option value="Grade3">Grade3</option>

                          {/* Add other options */}
                        </Field>
                        <ErrorMessage
                          name="Grade"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <Field
                          as="textarea"
                          className="form-control bg-white border"
                          name="Message"
                          placeholder="Your Message"
                          rows="3"
                        />
                        <ErrorMessage
                          name="Message"
                          component="div"
                          className="error"
                          style={{ color: "red" }}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex mb-3 bg-dark-blue p-4 border-radius mb-4">
                    <div className="text-primary mr-3">
                      <i className="fas fa-3x contact-icon fa-map-signs text-white"></i>
                    </div>
                    <div className="recent-post-info">
                      <span className="text-white">
                        Omaxe Royal Residency, Pakhowal Road, Ludhiana
                        +91-9139989898 cws@theclay.in
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex mb-3 bg-dark-gray p-4 border-radius mb-4">
                    <div className="text-primary2 mr-3">
                      <i className="far fa-3x contact-icon fa-envelope"></i>
                    </div>
                    <div className="recent-post-info">
                      <span>CWS@theclay.in</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-flex bg-green p-4 border-radius">
                    <div className="text-white mr-3">
                      <i className="fas fa-3x contact-icon fa-phone-alt"></i>
                    </div>
                    <div className="recent-post-info">
                      <span className="text-white">+91 9139989898</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--contact --> */}
      {/* <!--Map --> */}
      <section className="map">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-sm-12">
              <div className="map h-500">
                {/* <!-- iframe START --> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.3293303529886!2d75.79500277537788!3d30.84945337452814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a81acfed67c67%3A0x7d1194244ee5c41a!2sClay%20World%20School!5e0!3m2!1sen!2sin!4v1715576919082!5m2!1sen!2sin"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
                {/* <!-- iframe END --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-Map --> */}
    </>
  );
}
