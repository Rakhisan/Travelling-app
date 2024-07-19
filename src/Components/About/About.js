import React, { useEffect } from "react";
import "./About.css";

import { PiMountainsFill } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiMountainClimbing } from "react-icons/gi";

// import img1 from "../../Assets/customers.jpg";
// import img2 from "../../Assets/mountains.jpg";
// import img3 from "../../Assets/hykings.jpg";

import video from "../../Assets/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 data-aos="fade-up" data-aos-duration="3000" className="title">
          Why Hikings?
        </h2>

        <div className="mainContent container grid">
          {/* 1 */}
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="singleItem"
          >
            <PiMountainsFill className="icons" />
            {/* <img src={img2} alt="Image Name" /> */}
            <h3>100+ Mountains</h3>
            <p>
              Research shows that a chance away from the normal rhythms of daily
              life reduces stress and imporves health and well-being.
            </p>
          </div>

          {/* 2 */}
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className="singleItem"
          >
            <GiMountainClimbing className="icons" />
            {/* <img src={img3} alt="Image Name" /> */}
            <h3>1000+ Hykings</h3>
            <p>
              Research shows that a chance away from the normal rhythms of daily
              life reduces stress and imporves health and well-being.
            </p>
          </div>

          {/* 3 */}
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="singleItem"
          >
            <RiCustomerService2Fill className="icons" />
            {/* <img src={img1} alt="Image Name" /> */}
            <h3>2000+ Customers</h3>
            <p>
              Research shows that a chance away from the normal rhythms of daily
              life reduces stress and imporves health and well-being.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="cardText"
            >
              <h2>Wonderful House experience nin there!</h2>
              <p>
                The Adventure subranking is based on an eqally weighted average
                of scores from five country.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
