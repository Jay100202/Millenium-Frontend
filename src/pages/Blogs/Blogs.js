import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getallblogs`
        );
        setBlogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      <section
        className="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center">
                <h1 className="text-white">Blogs</h1>
              </div>
              <div className="d-flex justify-content-center ">
                <ol className="breadcrumb mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Blogs</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <span>Blogs</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row p-6">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={blog._id}>
                <div className="card p-3" style={{ height: "auto" }}>
                  <img
                    className="card-img-top"
                    style={{ height: "30vh" }}
                    src={`${process.env.REACT_APP_BASE_API_URL}/${blog.BlogImage}`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                  {console.log(blog._id)}
                    <ul className="list-unstyled mb-0 d-flex">
                      <li className="mr-3">
                      
                        <a
                          to={`/Blogs`}
                         
                          state={{ id: blog._id }}
                          style={{ color: "red" }}
                        >
                          <i className="fas fa-calendar-alt pr-1"></i>{" "}
                          {formatDate(blog.date)}{" "}
                        </a>
                      </li>
                    </ul>
                    <h3 className="mt-0 mb-3" style={{ fontSize: "19px" }}>
                      {blog.Title}
                    </h3>
                    <Link
                      to="/Blogs"
                      state={{ id: blog._id }}
                      className="btn btn-primary"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
