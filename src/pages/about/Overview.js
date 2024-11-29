import React from "react";
import Background from "../../assets/images/about/about-bg-01.jpg";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Overview() {
  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("required"),
    Phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("required"),
    Email: Yup.string().email("Invalid email").required("required"),
    City: Yup.string().required("required"),
    School: Yup.string()
      .required("required")
      .notOneOf(["0"], "Please select a school"),
    Grade: Yup.string()
      .required("required")
      .notOneOf(["0"], "Please select a grade"),
    Message: Yup.string().required("required"),
  });

  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "662216648a71010e45369573"
      );
      setData(data[0].Description);
      setTitle(data[0].Title);
    };
    fetchData();
  }, []);

  const [data, setDataa] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getallNews`
      );
      console.log(res.data);
      setDataa(res.data);

      // setTitle(data[0].Title)
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {/* <!--inner-header --> */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">{title}</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">About Us</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>{title}</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}

      {/* <!--about --> */}
      <section
        className="about-section"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div
                className="section-title"
                style={{
                  maxWidth: "80%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <h2 className="title">
                  About<span style={{ color: "red" }}> Clay</span> School
                </h2>
                {React.createElement("div", {
                  dangerouslySetInnerHTML: {
                    __html: `${dataDesc}<style>p{font-size:19px;font-weight:400}`,
                  },
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-about --> */}
      {/* <!-- Get In Touch Section Start--> */}
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-4">
              <p className="mb-0">Drop Us Your Details For A Quick Response.</p>
              <h2 className="mb-3 title">GET IN TOUCH WITH US</h2>
              <Formik
                initialValues={{
                  Name: "",
                  Phone: "",
                  Email: "",
                  City: "",
                  School: "",
                  Grade: "",
                  Message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setTimeout(() => {
                    alert("Your application has been submitted successfully!");
                    resetForm();
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <Field
                          type="text"
                          name="Name"
                          className="form-control bg-white border"
                          placeholder="Your Name"
                        />
                        <ErrorMessage
                          name="Name"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          type="text"
                          name="Phone"
                          className="form-control bg-white border"
                          placeholder="Your Phone"
                        />
                        <ErrorMessage
                          name="Phone"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          type="email"
                          name="Email"
                          className="form-control bg-white border"
                          placeholder="Your Email"
                        />
                        <ErrorMessage
                          name="Email"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          type="text"
                          name="City"
                          className="form-control bg-white border"
                          placeholder="Your City"
                        />
                        <ErrorMessage
                          name="City"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          as="select"
                          name="School"
                          className="form-control bg-white border"
                        >
                          <option value="">Select School</option>
                          <option value="Ludhiana">Ludhiana</option>
                          {/* Add other options */}
                        </Field>
                        <ErrorMessage
                          name="School"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <Field
                          as="select"
                          name="Grade"
                          className="form-control bg-white border"
                        >
                          <option value="">Select Grade</option>
                          <option value="Pre Nursery">Pre Nursery</option>
                          {/* Add other options */}
                        </Field>
                        <ErrorMessage
                          name="Grade"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <Field
                          as="textarea"
                          name="Message"
                          className="form-control bg-white border"
                          placeholder="Your Message"
                        />
                        <ErrorMessage
                          name="Message"
                          component="div"
                          className="text-danger"
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
            <div className="col-lg-5 d-flex align-items-center">
              {/* <!-- Recent Post --> */}
              {/* <!-- Recent Post --> */}
              <div className="widget">
                <div className="widget-title">
                  <h5>NEWS & EVENTS</h5>
                </div>

                {data.map((item, index) => (
                  <div className="media mb-3 pb-3 border-bottom" key={index}>
                    <div className="media-body">
                      <Link
                        className="d-block date text-dark"
                        to={`/News`}
                        state={{ id: data._id }}
                      >
                        {formatDate(item.date)}
                      </Link>
                      <Link
                        className="text-dark"
                        to="/News"
                        state={{ id: item._id }}
                      >
                        <b>{item.Title}</b>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {/* <!-- Recent Post --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Get In Touch Section End--> */}
    </>
  );
}
