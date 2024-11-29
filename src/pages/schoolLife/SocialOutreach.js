import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import media from "../../assets/Upload/MediaUploadFile/589c17eaa3c6461ab4b54e024ec5fad4.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SocialOutreach() {
  const [dataDesc, setData] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`
      );
      const data = res.data.filter(
        (entry) => entry._id === "662550a9dce9d44fabb8f0cc"
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
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Social Outreach</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">School Life</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Social Outreach</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!-about --> */}
      <section className="social-outreach-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    <div className="reseach-development-img">
                      {React.createElement("div", {
                        dangerouslySetInnerHTML: {
                          __html: `${dataDesc}<style>img {width: 100%; }</style>`,
                        },
                      })}
                    </div>
                    {/* <div className="mt-5 mb-4">
                      <p className="text-justify">
                        We follow the principle that a responsible Samaritan
                        should give back to the community through services that
                        help fortify our society. Learning begins at an early
                        age, thus it is important to inculcate certain values in
                        the students and ensure they take pride in being part of
                        society.
                      </p>

                      <p className="text-justify">
                        To evoke passion in students and make them aware of
                        their social responsibilities Millennium family immerses
                        the students in an environment and culture that nurtures
                        a feeling of brotherhood, gratitude, respect, and love
                        for their family, friends, and society. Students are
                        exposed to activities and outreach programs that aim to
                        develop students into empathetic, compassionate, and
                        good human beings.
                      </p>

                      <p className="text-justify">
                        As a part of our social awareness programs, the students
                        are taken to nearby villages and suburbs where they
                        volunteer and aid the residents in keeping their
                        surroundings clean, organize plantations, environmental
                        conservation drives, Literacy and happiness drives in
                        old age homes, and projects to eradicate social evils
                        and issues that they feel strongly about. The school
                        believes in empowering every individual so that they can
                        serve their country.
                      </p>
                    </div> */}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--about --> */}
    </>
  );
}
