import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup

export default function Careers() {
  const [openings, setOpenings] = useState([]);
  const [designationId, setDesignationId] = useState("");

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    Name: Yup.string().required('Name is required'),
    Email: Yup.string().email('Invalid email').required('Email is required'),
    Phone: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').min(10, 'Invalid phone number').max(10, 'Invalid phone number').required('Phone is required'),
    Experience: Yup.string().required('Experience is required'),
    Qualification: Yup.string().required('Qualification is required'),
    Message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    Designation: designationId, // Setting designationId as the default value for Designation
    Name: '',
    Email: '',
    Phone: '',
    Experience: '',
    Qualification: '',
    Message: '',
    IsActive:true,
  };

  const handleRegister = async (values) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/api/auth/create/categoryCarrier`, values);
      if (response) {
        alert('Your application has been submitted successfully!');
        closeModal();
      } else {
        alert('Application submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Application submission error:', error);
      alert('Application submission failed. Please try again.');
    }
  };

  const openModal = (_id) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    console.log("fnnfsn",_id);
    setDesignationId(_id);
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/getAll/currentopening`);
        setOpenings(res.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="inner-banner bg-overlay-black-70 bg-holder" style={{ backgroundImage: `url(${Background1})` }}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Careers</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Careers</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="row" style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
                <div className="col-xl-12 col-lg-12">
                  <div className="mt-5 mb-4">
                    <p className="text-justify">
                      We are expanding very rapidly and offer scope for rapid growth. We value good academic record and a result-oriented approach. Above all, we are passionate and sincere about improving the education scenario in India and the world.
                    </p>
                    <p className="text-justify">
                      If you are interested in a satisfying career shaping lives of our future leaders, then do apply to us.
                    </p>
                    <h3 className="text-primary">Job Openings</h3>
                  </div>
                </div>

                {openings.map((opening, index) => (
                  <div className="col-lg-12" key={index}>
                    <div className="careers-box">
                      <div className="current-opening">
                        <h4>{opening.Designation}</h4>
                      </div>
                      <p>
                        <span className="location">Location :</span>{" "}
                        {opening.Location}
                      </p>
                      {<span style={{ width: '300px' }}>{React.createElement('div', { dangerouslySetInnerHTML: { __html: opening.Description } })}</span>}

                      {/* <p>{opening.Description.replace(/[^a-zA-Z0-9\s]/g, '')}</p> */}
                      <div className="btn-submit text-right">
                        <a className="btn btn-primary" onClick={() => openModal(opening._id)}>Apply</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="txtlabel">JD-BDM</h4>
              <button type="button" className="close" onClick={closeModal}>&times;</button>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema} // Add validation schema
              onSubmit={(values, { setSubmitting }) => {
                values.Designation= designationId
                values.IsActive=true
                console.log(designationId);
                console.log(values);
                handleRegister(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="form-group col-md-4">
                        <label>Name<span className="text-danger">*</span></label>
                        <Field name="Name" type="text" className="form-control bg-white border" placeholder="Your Name" />
                        <ErrorMessage name="Name" component="div" className="text-danger" />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Email<span className="text-danger">*</span></label>
                        <Field name="Email" type="email" className="form-control bg-white border" placeholder="Your Email" />
                        <ErrorMessage name="Email" component="div" className="text-danger" />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Phone<span className="text-danger">*</span></label>
                        <Field name="Phone" type="text" className="form-control bg-white border" placeholder="Your Phone" />
                        <ErrorMessage name="Phone" component="div" className="text-danger" />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Experience<span className="text-danger">*</span></label>
                        <Field name="Experience" type="text" className="form-control bg-white border" placeholder="Your Experience" />
                        <ErrorMessage name="Experience" component="div" className="text-danger" />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Qualification<span className="text-danger">*</span></label>
                        <Field name="Qualification" type="text" className="form-control bg-white border" placeholder="Your Qualification" />
                        <ErrorMessage name="Qualification" component="div" className="text-danger" />
                      </div>
                      <div className="form-group col-md-12">
                        <label>Message<span className="text-danger">*</span></label>
                        <Field name="Message" as="textarea" className="form-control bg-white border" />
                        <ErrorMessage name="Message" component="div" className="text-danger" />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
