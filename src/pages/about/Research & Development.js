import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import media from "../../assets/Upload/MediaUploadFile/7ac97d433992419c89c3e60f4b2e3676.jpg";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
export default function ResearchDevelopment() {
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "66200f077e97c813c540b49e"
      );
      setData(data[0].Description);
      setTitle(data[0].Title);
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <!--inner-header --> */}
      <section
        class="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12">
              <div class="text-center">
                <h1 class="text-white">{title}</h1>
              </div>
              <div class="d-flex justify-content-center ">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">About Us</a>
                  </li>
                  <li class="breadcrumb-item active">
                    <span>{title}</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!inner-header --> */}
      {/* <!-about --> */}
      <section class="research-development-section">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-10">
              <div class="shadow border-radius box-border-bottom p-4">
                <div class="row">
                  <div class="col-xl-12 col-lg-12">
                    {React.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: `${dataDesc}<style>img { width: 100%;}</style>`,
                      },
                    })}
                    {/* <div class="reseach-development-img">
                      <img class="w-100 img-fluid" src={media} />
                    </div>
                    <div class="mt-5 mb-4">
                      <p class="text-justify">
                        The Research &amp; Development team of Millennium
                        Education Management with over 300 professionals and
                        specialists in the field of education has been working
                        to create content for the entire K-12 segment for
                        Millennium Group of Schools. Each member of the team has
                        a unique identity and specialization that adds to the
                        diversity, sensitivity, and development of the
                        Millennium Learning System. It also ensures smooth
                        implementation of the curriculum developed and designed
                        by its team. Rigorous training programs for Principals,
                        Master Trainers, Facilitators, and Counsellors are held
                        to reiterate the philosophy and methodology of every
                        intellectual property created. There is a robust blend
                        of optimism, vision, questioning, far-sightedness, hard
                        work, and quality consciousness amongst the members of
                        the team. This provides a healthy platform for
                        interaction, innovation, growth, and change. A dedicated
                        and visionary team of special educators, researchers,
                        engineers, analysts, designers, illustrators, and
                        technicians work together towards building a futuristic
                        tomorrow for every child
                      </p>
                    </div>{" "} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-about --> */}
    </>
  );
}
