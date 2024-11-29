import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function NewsandEvents() {
  const [dataDesc, setData] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getallNews`
      );
      console.log(res.data);
      // Filter out inactive news items
      const activeNews = res.data.filter((News) => News.IsActive);
      setData(activeNews);
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
                <h1 className="text-white">News & Events</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Media</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>News & Events</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--inner-header --> */}
      {/* <!--Event --> */}
      <section className="news-event-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row">
                {dataDesc.map((data, index) => {
                  return (
                    <div key={index} className="col-lg-12 mt-4">
                      <div className="blog-post d-flex align-items-center shadow border-radius">
                        <div className="blog-contant">
                          <a href="#">
                            <h3 className="mt-0 mb-3">{data.Title}</h3>
                          </a>
                          <ul className="list-unstyled mb-0 d-flex">
                            <li className="mr-3">
 
                              <a href={`/News`}  state={{id:data._id}}>
                                <i className="fas fa-calendar-alt pr-1"></i>{" "}
 
                                {data.date.split("T")[0]}
                              </a>
                            </li>
                          </ul>
                          <p>{data.Title}</p>

                          <Link
                            className="btn p-0"
                            to="/News" state={{id:data._id}}
                          >
                            View Details
                          </Link>
                        </div>{" "}
                      </div>{" "}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Event --> */}
    </>
  );
}
