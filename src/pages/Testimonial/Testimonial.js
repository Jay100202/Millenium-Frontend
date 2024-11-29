import React, { useEffect, useState } from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import axios from "axios";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/AllTestimonial`
        );
        setTestimonials(res.data);
        console.log(res);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchData();
  }, []);

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
                <h1 className="text-white">Testimonials</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Testimonials</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!--Our Gallery Section Start --> */}
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            {testimonials.map((testimonial) => (
              <div className="col-lg-12" key={testimonial._id}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="events">
                      <div className="row">
                        <div className="col-12">
                          <div className="events shadow mb-4 p-4 bg-white border-radius">
                            <div className="row align-items-center">
                              <div className="col-lg-2">
                                <div className="events-img mb-4 mb-lg-0">
                                  <img
                                    className="img-fluid border-0"
                                    src={`${process.env.REACT_APP_BASE_API_URL}/${testimonial.File} `}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-lg-10 align-self-center">
                                <div className="events-content">
                                  <div className="events-tag">
                                  <a href="#" className="badge-danger mb-2">
                                      {testimonial.Designation}
                                    </a>
                                  <p className="text-dark mb-lg-0">
                                    {testimonial.Name}
                                  </p>
                                    
                                  </div>
                                  <a
                                    href="#"
                                    className="text-dark h5 testimonial-title"
                                  >
                                    {testimonial.Message}
                                  </a>
                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--Our Gallery Section End --> */}
    </>
  );
}
