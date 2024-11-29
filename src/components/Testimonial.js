import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  };

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
      {/* <!--Testimonial--> */}
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-6">
              <div className="section-title">
                <h2>Testimonial</h2>
              </div>
            </div>
            <div className="col-md-5 text-md-right mb-4 col-6 mb-md-0">
              <a
                className="btn btn-primary btn-round"
                href="/testimonial"
              >
                View All
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="item">
                    <div className="testimonial-item">
                      <div className="testimonial-quote text-center mb-4">
                        <i className="fas fa-quote-left fa-2x text-white"></i>
                      </div>
                      <div className="text-center">
                        <h4 className="mb-4" style={{textAlign:"justify"}}>{testimonial.Message}</h4>
                      </div>
                      <div className="testimonial-author" style={{display:'inline-block',margin:"auto",width:"100%",padding:"10px",textAlign:"center"}}>
                        <div className="testimonial-avatar avatar avatar">
                          <img
                            className="img-fluid"
                            src={`${process.env.REACT_APP_BASE_API_URL}/${testimonial.File} `}
                            alt=""
                          />
                        </div>
                        <div className="testimonial-name" style={{textAlign:'center'}}>
                          <h5 className="name">{testimonial.Name}</h5>
                          <span>- {testimonial.Designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
