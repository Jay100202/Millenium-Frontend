import React from "react";
import Background1 from "../../assets/images/breadcum/01.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MandatoryDisclosure() {
  const [generalInformation, setGeneralInformation] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [resultsAndAcademics, setResultsAndAcademics] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [schoolInfraData, setSchoolInfraData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllGeneralinformation`
      );
      setGeneralInformation(res.data);

      console.log(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/AllDocAndinfo`
      );
      setDocuments(res.data);

      console.log(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/AllAcademic`
      );
      setResultsAndAcademics(res.data);

      console.log(res);
    };
    fetchData();
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/StaffMaster`
      );
      setStaffData(res.data);

      console.log(res);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_API_URL}/api/auth/list/Schoolinfra`
      );
      setSchoolInfraData(res.data);

      console.log(res);
    };
    fetchData();
  }, []);


  return (
    <>
      <section
        class="inner-banner bg-overlay-black-70 bg-holder"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12">
              <div class="text-center">
                <h1 class="text-white">Mandatory Disclosure</h1>
              </div>
              <div class="d-flex justify-content-center ">
                <ol class="breadcrumb mb-0 p-0">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">
                    <span>Mandatory Disclosure</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--about --> */}
      <section class="about-section space-ptb" style={{ background: "#fff" }}>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12">
              <div class="section-title mb-4">
                <h2 class="title">
                  Mandatory <span class="text-primary"> Disclosure</span>{" "}
                </h2>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="dynamic-disclosure">
                      <h4 style={{ fontWeight: 600 }} class="mb-4">
                        {" "}
                        General Information{" "}
                      </h4>
                      <div class="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr className="text-uppercase">
                              <th>Sl. No.</th>
                              <th>Information</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {generalInformation.map((info, index) => (
                              <tr key={index} className="text-uppercase">
                                <td>{index + 1}</td>
                                <td className="text-left">
                                  {info.Information}
                                </td>
                                <td>{info.Details}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="dynamic-disclosure">
                      <h4 style={{ fontWeight: 600 }} class="mb-4">
                        {" "}
                        Documents and Information{" "}
                      </h4>
                      <div class="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr className="text-uppercase">
                              <th>Sl.No.</th>
                              <th>Documents/Information</th>
                              <th>Upload Documents</th>
                            </tr>
                          </thead>
                          <tbody>
                            {documents.map((doc, index) => (
                              <tr key={index} className="text-uppercase">
                                <td>{index + 1}</td>
                                <td className="text-left">{doc.Title}</td>
                                <td>
                                  <a
                                    href={`${process.env.REACT_APP_BASE_API_URL}/${doc.File}`}
                                    target="_blank"
                                    className="btn btn-primary text-white"
                                  >
                                    <i className="fa fa-download"></i>{" "}
                                    View/Download
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="dynamic-disclosure">
                      <h4 style={{ fontWeight: 600 }} class="mb-4">
                        {" "}
                        Results and Academics{" "}
                      </h4>

                      <div class="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr className="text-uppercase">
                              <th>Sl. No.</th>
                              <th>Documents/Information</th>
                              <th>Upload Documents</th>
                            </tr>
                          </thead>
                          <tbody>
                            {resultsAndAcademics.map((item, index) => (
                              <tr key={index} className="text-uppercase">
                                <td>{index + 1}</td>
                                <td className="text-left">{item.Title}</td>
                                <td>
                                  <a
                                    href={`${process.env.REACT_APP_BASE_API_URL}/${item.File}`}
                                    target="_blank"
                                    className="btn btn-primary text-white"
                                  >
                                    <i className="fa fa-download"></i>{" "}
                                    View/Download
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="dynamic-disclosure">
                      <h4 style={{ fontweight: 600 }} class="mb-4">
                        {" "}
                        Staff (Teaching){" "}
                      </h4>
                      <div class="table-responsive">
                      <table className="table table-striped">
                          <thead>
                            <tr className="text-uppercase">
                              <th>Sl. No.</th>
                              <th>Information</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {staffData.map((item, index) => (
                              <tr key={index} className="text-uppercase">
                                <td>{index + 1}</td>
                                <td className="text-left">{item.Information}</td>
                                <td>
                                  <div className="text-left">{item.Details}</div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <div class="dynamic-disclosure">
                      <h4 style={{ fontWeight: 600 }} class="mb-4">
                        {" "}
                        School Infrastructure{" "}
                      </h4>
                      <div class="table-responsive">
                      <table className="table table-striped">
                          <thead>
                            <tr className="text-uppercase">
                              <th>Sl. No.</th>
                              <th>Information</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schoolInfraData && schoolInfraData.map((item, index) => (
                              <tr key={index} className="text-uppercase">
                                <td>{index + 1}</td>
                                <td className="text-left">{item.Information}</td>
                                <td><div className="text-left">{item.Details}</div></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
