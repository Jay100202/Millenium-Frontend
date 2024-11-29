import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Background1 from "../../assets/images/breadcum/01.jpg";
import axios from "axios";

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/list/VideoGalleryMaster`
        );
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* inner-header */}
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Video Gallery</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Video Gallery</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* inner-header */}
      {/* Our Gallery Section Start */}
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            {videos.map((video, index) => (
              <div className="col-lg-6 col-sm-6" key={index}>
                <div className="team-02">
                  <div className="team-img">
                    <iframe
                      width="100%"
                      height="300"
                      src={video.VideoURL}
                      title={video.Title}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div className="vg team-info text-center mt-3 mb-3">
                  <h5>{video.Title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Gallery Section End */}
    </>
  );
}
