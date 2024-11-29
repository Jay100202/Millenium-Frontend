import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import banner1 from "../assets/Upload/Banner/b76e04ab-ee42-4925-89b4-c80ffca9ad58.jpg";
import banner2 from "../assets/Upload/Banner/3cc20623-d213-4bff-9050-252dbcdd0ca1.jpg";
import claylogo from "../assets/images/logo/Clay World School-Logo.png";
import Background from "../assets/images/bg/foravni.jpg";
import Study from "./Study";
import Testimonial from "./Testimonial";
import { Carousel, Modal, Button } from "react-bootstrap";
import axios from "axios";

export default function Home() {
  const [banners, setBanners] = useState([]);
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "661fe82b63019bba5947d160"
      );
      setData(data[0].Description);
      setTitle(data[0].Title);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllBannerMaster`
      );
      const active = res.data.filter((items) => items.IsActive === true);
      setBanners(active);

      console.log(active);
    };
    fetchData();
  }, []);

  const [counted, setCounted] = useState(false);

  useEffect(() => {
    setCounted(true);
  }, []);

  const handleClose = () => setShowModal(false);
  const handleInquiry = () => {
    window.open("https://bykznyni5jl.typeform.com/to/R26UZRiH", "_blank");
  };

  return (
    <>
      <section className="banner bg-holder" style={{ overflow: "hidden" }}>
        <Carousel className="main-banner">
          {banners.map((banner, index) => (
            <Carousel.Item key={index}>
              <img
                src={`${process.env.REACT_APP_BASE_API_URL}/${banner.BannerImage}`}
                style={{ height: "800px" }}
                className="d-block w-100"
                alt={banner.title}
              />

              <Carousel.Caption>
                <div className="caption">
                  <h1 style={{ color: "#fff" }}>{banner.BannerTitle}</h1>
                  <p style={{ fontSize: "25px" }}>{banner.BannerSubTitle}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section
        className="bg-img  "
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div
          className="h-100 about-area"
          style={{ backgroundColor: "#ffffffb3", paddingBottom: "0px" }}
        >
          <div className="container">
            <div
              className="row align-items-center"
              style={{
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                className="col-lg-6 order-lg-1 order-2"
                style={{
                  position: "relative",
                  zIndex: 3,
                  marginBottom: "60px",
                  marginTop: "40px",
                }}
              >
                <div className="section-title mb-4">
                  <h2 className="title">
                    Welcome&nbsp;to&nbsp;
                    <span className="span-title">Clay World&nbsp;School</span>
                  </h2>
                  <p className="lead mb-0 text-justify">
                    {React.createElement("div", {
                      dangerouslySetInnerHTML: { __html: dataDesc },
                    })}
                  </p>
                </div>
                <a
                  href="/AboutUs"
                  className="btn btn-primary btn-round"
                  style={{ marginTop: "-2rem" }}
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0 pr-lg-5">
                <div className="position-relative pb-md-0 h-100">
                  <img
                    style={{ marginBottom: "0px" }}
                    className="img-fluid about-img border-radius"
                    src={claylogo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="space-ptb counter-section "
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
      >
        <div className="container">
          <div
            className="row"
            style={{
              paddingTop: "70px",
              paddingBottom: "70px",
            }}
          >
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="counter">
                <div className="counter-icon">
                  <i className="flaticon-team-1 text-white"></i>
                </div>
                <div
                  className="counter-content align-self-center"
                  style={{ color: "white", fontSize: "40px" }}
                >
                  {counted && <CountUp end={20000} duration={10} suffix="+" />}
                  <label className="text-white">Students</label>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="counter">
                <div className="counter-icon">
                  <i className="flaticon-university text-white"></i>
                </div>
                <div className="counter-content">
                  {counted && <CountUp end={20} duration={10} suffix="+" />}
                  <label className="text-white">Branches</label>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
              <div className="counter">
                <div className="counter-icon">
                  <i className="flaticon-experience text-white"></i>
                </div>
                <div className="counter-content">
                  {counted && <CountUp end={50} duration={10} suffix="+" />}
                  <label className="text-white">years of legacy</label>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="counter">
                <div className="counter-icon">
                  <i className="flaticon-trophy-1 text-white"></i>
                </div>
                <div className="counter-content">
                  {counted && <CountUp end={30} duration={10} suffix="+" />}
                  <label className="text-white">Awards</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Study />
      </div>
      <div className="container">
        <Testimonial />
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admissions Open</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Admissions are now open for Clay World School. Click the button
            below to inquire.
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="primary" onClick={handleInquiry}>
            Inquire
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
