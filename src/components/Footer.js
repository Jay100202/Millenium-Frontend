import React from "react";
import Background from "../assets/images/bg/banner.jpeg";
import claylogo from "../assets/images/logo/Clay World School-Logo (1).png";
import { useEffect, useState } from "react";
import axios from "axios";
import wp from "../assets/Upload/whatsapp.png";

export default function Footer() {
  const [dataDesc, setData] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    // Show button when scroll position is greater than 100 pixels
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter((entry) => entry.Title === "Footer AboutUs");
      setData(data[0].Description);
    };
    fetchData();
  }, []);

  return (
    <footer
      className="space-pt footer-section bg-overlay-black-90 bg-holder footer"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container" style={{marginRight:"17px"}}>
        <div className="row pb-lg-5">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0 pr-lg-5">
            <a href="/">
              <img
                className="img-fluid mb-3 footer-logo"
                src={claylogo}
                alt=""
              />
            </a>
            <p class="text-white" style={{ textAlign: "justify" }}>
              {React.createElement("div", {
                dangerouslySetInnerHTML: { __html: dataDesc },
              })}
            </p>{" "}
            <h5 className="text-white footer-title mb-2 mb-sm-4">Follow Us</h5>
            <div className="social-icon social-icon-style-02">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/CLAYWorldSchool"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/clayworldschool/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@Clayworldschool"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/clay-world-school/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-white footer-title mb-2 mb-sm-4">
              Useful Link
            </h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-white" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/admission">
                    Admission
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/awards">
                    Awards
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/newsandevents">
                    News & Events
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/contactus">
                    Enquiry
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 mb-4 mb-lg-0">
            <h5 className="text-white footer-title mb-2 mb-sm-4">
              <a className="text-white" href="/AboutUs">
                About Us
              </a>
            </h5>
            <h5 className="text-white footer-title mb-2 mb-sm-4">
              <a className="text-white" href="/AboutUs">
                Media Room
              </a>
            </h5>

            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-white" href="/newsandevents">
                    News & Event
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/awards">
                    Award
                  </a>
                </li>
              </ul>
            </div>

            <h5 className="text-white footer-title mt-3 mb-2 mb-sm-3">
              Admission
            </h5>

            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-white" href="/admission">
                    Admission
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/applicationForm">
                    Application Form
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/feeStructure">
                    Fee Structure
                  </a>
                </li>
              </ul>
            </div>
            <br />
          </div>
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-white footer-title mb-2 mb-sm-4">Academics</h5>
            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-white" href="/learningSystem">
                    The Clay Learning System
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/Syllabus2024-2025">
                    Syllabus 2024-2025
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/programs">
                    Programs
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/learningconcepts">
                    Learning Concepts
                  </a>
                </li>
              </ul>
            </div>

            <h5 className="text-white footer-title mt-3 mb-2 mb-sm-3">
              Activities
            </h5>

            <div className="footer-link">
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-white" href="/arts">
                    ART
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/music">
                    Music
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/dance">
                    Dance
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/swimmings">
                    Swimming
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/taekwondo">
                    Taekwondo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="sticky-whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=9139989898&amp;text=%20Hello%20The Clay World School%20%20Team,%20I%20am%20interested%20in%20-"
          target="_blank"
        >
          <img style={{ height: "50px" }} src={wp} class="img-responsive" />
        </a>
      </div>

      <div className="footer-bottom bg-dark py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <p className="mb-0 text-white">
                © Copyright 2022 <a href="#">The Clay World Schools</a> All
                Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Back To Top--> */}
      <div id="back-to-top" className="back-to-top" onClick={scrollToTop}>
        Up
      </div>

      {/* <!-Back To Top--> */}
    </footer>
  );
}
