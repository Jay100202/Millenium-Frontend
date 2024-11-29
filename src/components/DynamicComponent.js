import React from "react";
import { Link } from "react-router-dom";
// import media from "../../assets/Upload/MediaUploadFile/6d51f11613d547588b816942ee6855bc.jpg";
import Background1 from "../../src/assets/images/breadcum/01.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function DynamicContent() {
  const { state } = useLocation();

  // const { contentId } = useParams();
  const arrayOfContents = useSelector((state) => state.content);
  const pageContent = arrayOfContents.find((item) => item._id === state.id);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 700); // Set a timeout to ensure the loading spinner is displayed for at least 700ms
  }, [state.id]);

  function getParentFromChild(child, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].child === child) {
        return data[i].parent;
      }
    }
    return null;
  }

  const menuArray = [
    { parent: "About us", child: "About Clay School" },
    { parent: "About us", child: "VissionMission" },
    { parent: "About us", child: "Research & Development" },
    { parent: "Admission", child: "Admission Overview" },
    { parent: "Admission", child: "Admission Procedure" },
    { parent: "Scholastics ", child: "CBSE - Board Of Affiliation" },
    { parent: "Scholastics ", child: "Facilitators Development" },
    { parent: "School Life", child: "School Life Overview" },
    { parent: "School Life", child: "Sport" },
    { parent: "School Life", child: "Music And Dance" },
    { parent: "School Life", child: "Creative Arts" },
    { parent: "School Life", child: "Theatre" },
    { parent: "School Life", child: "Clubs and House council" },
    { parent: "School Life", child: "Social Outreach" },
    { parent: "Parents' Corner", child: "Parents As Partners" },
    { parent: "Parents' Corner", child: "Refer A Friend" },
    { parent: "Parents' Corner", child: "Parent School Association" },
  ];

  const parent = getParentFromChild(
    pageContent ? pageContent.Title : null,
    menuArray
  );
  //   useEffect(()=>{

  //     const fetchData = async ()=>{
  //       const res = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`)
  //       const data = res.data.filter(entry=>entry._id==="6622576ecdf4c98ed82c869f")
  //       setData(data[0].Description)
  //       setTitle(data[0].Title)
  //     }
  //     fetchData();

  //   },[])
  if (isLoading || !pageContent) {
    return (
      <React.Fragment>
        <div className="container">
          <div className="loading-spinner-overlay">
            <div
              className="spinner-border text-success"
              style={{
                width: "6rem",
                height: "6rem",
                color: "red",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              role="status"
            ></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
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
                <h1 className="text-white">{pageContent.Title}</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">{parent ? parent : pageContent.Title}</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>{pageContent.Title}</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!--about --> */}
      <section className="research-development-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="h-color col-xl-12 col-lg-12">
                    {React.createElement("div", {
                      dangerouslySetInnerHTML: {
                        __html: pageContent.Description.replace(
                          /<img /g,
                          '<img style="width:100%;" '
                        ),
                      },
                    })}
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
