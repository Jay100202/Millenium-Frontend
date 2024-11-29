import React, { useState } from "react";
import claylogo from "../assets/images/logo/Clay World School-Logo.png";
import "../assets/css/animate/animate.min.css";
import "../assets/css/bootstrap/bootstrap.min.css";
import "../assets/css/flaticon/flaticon.css";
import "../assets/css/font-awesome/all.min.css";
import "../assets/css/magnific-popup/magnific-popup.css";
import "../assets/css/owl-carousel/owl.carousel.min.css";
import "../assets/css/select2/select2.css";
import "../assets/css/swiper/swiper.min.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [aboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);
  const [admissionDropdownOpen, setAdmissionDropdownOpen] = useState(false);
  const [scholasticsDropdownOpen, setScholasticsDropdownOpen] = useState(false);
  const [SchollifeDropdownOpen, setSchollifeDropdownopen] = useState(false);
  const [ParentcornerDropdownOpen, setParentcornerDropdownOpen] =
    useState(false);
  const [MediaRoomDropdownopen, setMediaRoomDropdownopen] = useState(false);
  const [GalleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState({
    aboutUs: false,
    admission: false,
    scholastics: false,
    schoolLife: false,
    parentCorner: false,
    mediaRoom: false,
    gallery: false,
  });

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const toggleAboutUsDropdown = () => {
    setAboutUsDropdownOpen(!aboutUsDropdownOpen);
  };

  const toggleAdmissionDropdown = () => {
    setAdmissionDropdownOpen(!admissionDropdownOpen);
  };

  const toggleScholasticsDropdown = () => {
    setScholasticsDropdownOpen(!scholasticsDropdownOpen);
  };

  const toggleSchollifeDropdown = () => {
    setSchollifeDropdownopen(!SchollifeDropdownOpen);
  };
  const toggleParentcornerDropdown = () => {
    setParentcornerDropdownOpen(!ParentcornerDropdownOpen);
  };
  const toggleMediaRoomDropdown = () => {
    setMediaRoomDropdownopen(!MediaRoomDropdownopen);
  };
  const toggleGalleryDropdown = () => {
    setGalleryDropdownOpen(!GalleryDropdownOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdownsOpen({
      ...dropdownsOpen,
      [dropdown]: !dropdownsOpen[dropdown],
    });
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setDropdownsOpen({
      aboutUs: false,
      admission: false,
      scholastics: false,
      schoolLife: false,
      parentCorner: false,
      mediaRoom: false,
      gallery: false,
    });
  };

  return (
    <>
      {/* Header */}
      <header className="header header-sticky">
        {/* <marquee
          className="mainheader"

          //       style="font-size: 16px;
          //   font-weight: 400;
          //   color: red;
          //   padding-top:5px;
          //   font-family: sans-serif;"
        >
          Books of Millennium can be bought online also.Parents can buy NCERT
          books for Grade IX & X.
        </marquee> */}
        <div className="topbar py-2 d-none d-lg-flex">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="d-none d-lg-flex align-items-center text-center">
                  <div className="mr-3 d-inline-block">
                    <a
                      className="text-white"
                      href="mailto:info.ludhiana@millenniumschools.co.in"
                    >
                      <i className="far fa-envelope mr-2"></i>
                      <span>Email:</span>cws@theclay.in
                    </a>
                  </div>
                  <div className="mr-auto d-inline-block">
                    <a className="text-white" href="tel:917986214697">
                      <i className="fas fa-phone-alt mr-2"></i>
                      <span>Call</span> +91-9139989898
                    </a>
                  </div>
                  <div className="social-icon">
                    <ul className="social-icon">
                      <li>
                        <a
                          href="https://www.facebook.com/CLAYWorldSchool"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/clayworldschool/"
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@Clayworldschool"
                          target="_blank"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/clay-world-school/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main py-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="d-lg-flex align-items-center">
                  <a className="navbar-brand logo" href="/">
                    <img src={claylogo} alt="Logo" style={{ height: "90px" }} />
                  </a>

                  {/* Navbar */}
                  <nav className="navbar navbar-expand-lg">
                    {/* Navbar Toggler */}
                    <button
                      className={`navbar-toggler ${
                        isNavbarOpen ? "active" : ""
                      }`}
                      type="button"
                      onClick={toggleNavbar}
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Menu */}

                    <div
                      className={`collapse navbar-collapse justify-content-center ${
                        isNavbarOpen ? "show" : ""
                      }`}
                    >
                      <ul className="navbar-nav">
                        {/* Home */}
                        <li className="nav-item">
                          <Link
                            to="/"
                            className="nav-link"
                            onClick={closeNavbar}
                          >
                            Home
                          </Link>
                        </li>

                        {/* About Us Dropdown */}
                        <li
                          className={`nav-item dropdown ${
                            dropdownsOpen.aboutUs ? "show" : ""
                          }`}
                        >
                          <Link
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            to="/AboutUs"
                            onClick={closeNavbar}
                            // onClick={() => toggleDropdown("aboutUs")}
                            aria-haspopup="true"
                            aria-expanded={
                              dropdownsOpen.aboutUs ? "true" : "false"
                            }
                          >
                            About Us{" "}
                            {/* <i className="fas fa-chevron-down fa-xs"></i> */}
                          </Link>
                        </li>
                        <li
                          className={`nav-item dropdown ${
                            admissionDropdownOpen ? "show" : ""
                          }`}
                        >
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            onClick={toggleAdmissionDropdown}
                            aria-haspopup="true"
                            aria-expanded={
                              admissionDropdownOpen ? "true" : "false"
                            }
                          >
                            Admission
                            <i className="fas fa-chevron-down fa-xs"></i>
                          </a>
                          {/* <!-- Dropdown Menu --> */}
                          <ul
                            className={`dropdown-menu ${
                              admissionDropdownOpen ? "show" : ""
                            }`}
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/admission"
                                state={{ id: "662012d97e97c813c540b4aa" }}
                                onClick={closeNavbar}
                              >
                                Admission
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/applicationForm"
                                state={{ id: "662015547e97c813c540b4bd" }}
                                onClick={closeNavbar}
                              >
                                Application Form
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/feeStructure"
                                onClick={closeNavbar}
                              >
                                Fee Structure
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={`nav-item dropdown ${
                            scholasticsDropdownOpen ? "show" : ""
                          }`}
                        >
                          <a
                            className="nav-link  dropdown-toggle"
                            role="button"
                            onClick={toggleScholasticsDropdown}
                            aria-haspopup="true"
                            aria-expanded={
                              scholasticsDropdownOpen ? "true" : "false"
                            }
                          >
                            Academics{" "}
                            <i className="fas fa-chevron-down fa-xs"></i>
                          </a>
                          {/* <!-- Dropdown Menu --> */}
                          <ul
                            className={`dropdown-menu ${
                              scholasticsDropdownOpen ? "show" : ""
                            }`}
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/learningSystem"
                                onClick={closeNavbar}
                              >
                                The Clay Learning System
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/Syllabus2024-2025"
                                state={{ id: "662020b67e97c813c540b4ca" }}
                                onClick={closeNavbar}
                              >
                                Syllabus 2024-2025
                              </Link>
                            </li>

                            <li>
                              <a
                                className="dropdown-item"
                                href="/programs"
                                onClick={closeNavbar}
                              >
                                Programs
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="/learningconcepts"
                                onClick={closeNavbar}
                              >
                                Learning Concepts
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li
                          className={`nav-item dropdown ${
                            MediaRoomDropdownopen ? "show" : ""
                          }`}
                        >
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            onClick={toggleMediaRoomDropdown}
                            aria-haspopup="true"
                            aria-expanded={
                              MediaRoomDropdownopen ? "true" : "false"
                            }
                          >
                            Media Room{" "}
                            <i className="fas fa-chevron-down fa-xs"></i>
                          </a>
                          {/* <!-- Dropdown Menu --> */}
                          <ul
                            className={`dropdown-menu ${
                              MediaRoomDropdownopen ? "show" : ""
                            }`}
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/newsandevents"
                                onClick={closeNavbar}
                              >
                                News & Events
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/awards"
                                onClick={closeNavbar}
                              >
                                Awards
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/Ourblogs"
                            onClick={closeNavbar}
                          >
                            Blogs
                          </Link>
                        </li>

                        <li
                          className={`nav-item dropdown ${
                            GalleryDropdownOpen ? "show" : ""
                          }`}
                        >
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            onClick={toggleGalleryDropdown}
                            aria-haspopup="true"
                            aria-expanded={
                              GalleryDropdownOpen ? "true" : "false"
                            }
                          >
                            Activities{" "}
                            <i className="fas fa-chevron-down fa-xs"></i>
                          </a>
                          {/* <!-- Dropdown Menu --> */}
                          <ul
                            className={`dropdown-menu ${
                              GalleryDropdownOpen ? "show" : ""
                            }`}
                          >
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/arts"
                                onClick={closeNavbar}
                              >
                                Arts
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/music"
                                onClick={closeNavbar}
                              >
                                Music
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/dance"
                                onClick={closeNavbar}
                              >
                                Dance
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/swimmings"
                                onClick={closeNavbar}
                              >
                                Swimming
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to="/taekwondo"
                                onClick={closeNavbar}
                              >
                                Taekwondo
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/contactus"
                            onClick={closeNavbar}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="https://bykznyni5jl.typeform.com/to/R26UZRiH"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeNavbar}
                          >
                            Admission Inquiry
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
