import React from "react";
import { Link } from "react-router-dom";
// import media from "../../assets/Upload/MediaUploadFile/6d51f11613d547588b816942ee6855bc.jpg";
import Background1 from "../../src/assets/images/breadcum/01.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function DynamicNews() {
  // const { newsId } = useParams();
  const{ state}=useLocation()
  const [isLoading, setIsLoading] = useState(true);
  const arrayOfContents = useSelector((state) => state.newsContent);
  const pageContent = arrayOfContents.find((item) => item._id === state.id);

  // const arrayOfContents = useSelector((state) => state.newsContent);

  // useEffect(() => {
  //   console.log(newsId)
  //   setpageContent(arrayOfContents.find((item) => item._id === newsId));
  //   console.log(pageContent)
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     window.scrollTo(0, 0);
  //   }, 700);

  // }, [newsId, pageContent,arrayOfContents]);

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
    console.log(pageContent);
    return null;
  }

  const menuArray = [
    {
      parent: "News & Events",
      child:
        "The Difference Between Ordinary And Extraordinary Is That Little Extra",
    },
    {
      parent: "News & Events",
      child: "Award For Outstanding Contribution In Education",
    },
    {
      parent: "News & Events",
      child: "Most Innovative K12 School' At National Education Awards, 2018",
    },
    { parent: "News & Events", child: "Award For Quality In Education" },
    {
      parent: "News & Events",
      child:
        "Outstanding Contribution To Education' And 'most Innovative K12 School' At Abp National Education Awards 2018",
    },
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
              className="spinner-border  text-success"
              style={{ width: "6rem", height: "6rem" }}
              role="status"
            ></div>
          </div>
        </div>
        <Container>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          ></div>
        </Container>
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
      <section className="news-event-detail-section position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 mb-4 mb-md-0">
              <div className="shadow border-radius box-border-bottom p-4">
                <div className="row">
                  <div className="col-xl-12 col-lg-12">
                    {/* <!-- Blog 01 START --> */}
                    <div className="blog">
                      {/* <!-- Blog image --> */}
                      {pageContent.NewsImage ? (
                        <div className="blog-image">
                          <img
                            className="img-fluid w-100 border-radius"
                            src={`${process.env.REACT_APP_BASE_API_URL}/${pageContent.NewsImage}`}
                          />
                        </div>
                      ) : (
                        <div></div>
                      )}

                      {/* <!-- Blog content --> */}
                      <div className="blog-content border-0 mt-4">
                        <h3 className="blog-title mb-3">{pageContent.Title}</h3>
                        <div className="blog-meta mb-0">
                          <ul className="list-unstyled mb-0 d-flex">
                            <li>
                              <i className="fas fa-calendar-alt"></i>{" "}
                              {pageContent.date.split("T")[0]}
                            </li>
                          </ul>
                        </div>
                        {React.createElement("div", {
                          dangerouslySetInnerHTML: {
                            __html: pageContent.Description,
                          },
                        })}
                      </div>
                    </div>
                  </div>
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
