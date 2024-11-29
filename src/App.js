import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/about/Overview";
import VisionValue from "./pages/about/Vision & Value";
import ResearchDevelopment from "./pages/about/Research & Development";
import FAQ from "./pages/about/FAQ";
import AdmissionOverview from "./pages/admission/Admission Overview";
import AdmissionProcedure from "./pages/admission/Admission Procedure";
import FAQadmission from "./pages/admission/FAQadmission";
import SchoollifeOverview from "./pages/schoolLife/SchoollifeOverview";
import Sports from "./pages/schoolLife/Sports";
import MusicAndDance from "./pages/schoolLife/MusicAndDance";
import CreativeArts from "./pages/schoolLife/CreativeArts";
import Theatre from "./pages/schoolLife/Theatre";
import ClubsandHousecouncil from "./pages/schoolLife/ClubsandHousecouncil";
import SocialOutreach from "./pages/schoolLife/SocialOutreach";
import Facilities from "./pages/schoolLife/Facilities";
import ParentsAsPartners from "./pages/ParentsCorner/ParentsAsPartners";
import ParentsSpeak from "./pages/ParentsCorner/Parent'sSpeak";
import ReferAFriend from "./pages/ParentsCorner/ReferAFriend";
import ParentSchoolAssociation from "./pages/ParentsCorner/ParentSchoolAssociation";
import ContactUs from "./pages/contact Us/ContactUs";
import NewsandEvents from "./pages/MediaRoom/NewsandEvents";
import Awards from "./pages/MediaRoom/Awards";
import PhotoGallery from "./pages/Activites/PhotoGallery";
import VideoGallery from "./pages/Activites/VideoGallery";
// import MandatoryDisclosure from "./pages/Mandatory Disclosure/MandatoryDisclosure";
import CbscBoard from "./pages/Academics/Syllabus";
import "bootstrap/dist/css/bootstrap.min.css";
import LearningSystem from "./pages/Academics/LearningSystem";
import Careers from "./pages/Careers/Careers";
import Facilator from "./pages/Academics/Programs";
import DynamicNews from "./components/DynamicNews";
import DynamicBlogs from "./components/DynamicBlogs";

import { useDispatch } from "react-redux";
import { storeContent, storeNews, storeBlogs } from "./state/action";
import { useEffect, useState } from "react";
import axios from "axios";
import DynamicContent from "./components/DynamicComponent";
import InnerGallary from "./pages/Activites/innerGallary";
import Testimonial from "./pages/Testimonial/Testimonial";
import Blogs from "./pages/Blogs/Blogs";
import Arts from "./pages/Activites/Arts";
import Music from "./pages/Activites/Music";
import Dance from "./pages/Activites/Dance";
import Swimming from "./pages/Activites/Swimming";
import Taekwondo from "./pages/Activites/Taekwondo";
import LearningConcepts from "./pages/Academics/LearningConcepts";

function App() {
  const dispatch = useDispatch();

  const fetchContents = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getAllCMSMaster`)
      .then((res) => {
        console.log(res.data);
        dispatch(storeContent(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("operation done");
      });
  };
  const fetchNews = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getallNews`)
      .then((res) => {
        console.log(res.data);
        dispatch(storeNews(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("operation done");
      });
  };

  const fetchBlogs = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/api/auth/get/getallblogs`)
      .then((res) => {
        console.log(res.data);
        dispatch(storeBlogs(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("operation done");
      });
  };

  useEffect(() => {
    // console.log(process.env.NODE_ENV);
    fetchContents();
    fetchNews();
    fetchBlogs();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<Overview />} />
          <Route path="/visionValue" element={<VisionValue />} />
          <Route
            path="/researchdevelopment"
            element={<ResearchDevelopment />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admission" element={<AdmissionOverview />} />
          <Route path="/applicationForm" element={<AdmissionProcedure />} />
          <Route path="/feeStructure" element={<FAQadmission />} />
          <Route path="/schoollifeoverview" element={<SchoollifeOverview />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/musicanddance" element={<MusicAndDance />} />
          <Route path="/creativearts" element={<CreativeArts />} />
          <Route path="/theatre" element={<Theatre />} />
          <Route
            path="/clubsandhousecouncil"
            element={<ClubsandHousecouncil />}
          />
          <Route path="/socialoutreach" element={<SocialOutreach />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/parentsaspartners" element={<ParentsAsPartners />} />
          <Route path="/parentsspeak" element={<ParentsSpeak />} />
          <Route path="/referafriend" element={<ReferAFriend />} />
          <Route
            path="/parentschoolassociation"
            element={<ParentSchoolAssociation />}
          />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/newsandevents" element={<NewsandEvents />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/photogallery" element={<PhotoGallery />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/music" element={<Music />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/swimmings" element={<Swimming />} />
          <Route path="/taekwondo" element={<Taekwondo />} />
          {/* <Route
            path="/mandatorydisclosure"
            element={<MandatoryDisclosure />}
          /> */}
          <Route path="/Syllabus2024-2025" element={<CbscBoard />} />
          <Route path="/learningSystem" element={<LearningSystem />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/programs" element={<Facilator />} />
          <Route path="/learningconcepts " element={<LearningConcepts />} />
          <Route path="/cms" element={<DynamicContent />} />
          <Route path="/dynamicNews/:newsId" element={<DynamicNews />} />
          {/* <Route path="/dynamicBlogs/:blogId" element ={<DynamicBlogs />}/> */}
          <Route path="/Academics" element={<DynamicContent />} />
          <Route
            path="/Academics/Syllabus 2024-2025"
            element={<DynamicContent />}
          />
          <Route
            path="/Admission/Admission Procedure"
            element={<DynamicContent />}
          />
          <Route
            path="/Admission/Admission Overview"
            element={<DynamicContent />}
          />
          <Route path="/News" element={<DynamicNews />} />
          <Route path="/Blogs" element={<DynamicBlogs />} />
          <Route path="/innerGallary" element={<InnerGallary />} />,
          <Route path="/testimonial" element={<Testimonial />} />,
          <Route path="/Ourblogs" element={<Blogs />} />,
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
