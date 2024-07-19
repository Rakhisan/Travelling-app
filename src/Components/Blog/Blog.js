import React, { useEffect } from "react";
import "./Blog.css";
import { BiRightArrowAlt } from "react-icons/bi";
import img1 from "../../Assets/morocco.jpg";
import img2 from "../../Assets/east-africa.jpg";
import img3 from "../../Assets/tunisia.jpg";
import img4 from "../../Assets/photo-8.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="3000" className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>An insight into the incredible experiences around the world.</p>
        </div>
        <div className="mainContainer grid">
          {/* 1 */}
          <div className="singlePost grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="imgDiv">
              <img src={img1} alt="Scenic view of Morocco's landscape" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="postDetails"
            >
              <h3>Beautiful Morocco, let us travel!</h3>
              <p>
                The Kingdom of Morocco is a Muslim country in western North
                Africa with a coastline on the Atlantic Ocean and Mediterranean
                Sea.
              </p>
            </div>
            <a
              href="/morocco" // Replace with a valid URL or path
              data-aos="fade-right"
              data-aos-duration="3000"
              className="flex"
            >
              Read More
              <BiRightArrowAlt className="icons" />
            </a>
          </div>

          {/* 2 */}
          <div className="singlePost grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="imgDiv">
              <img
                src={img2}
                alt="Vast landscape of East Africa with wildlife"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="postDetails"
            >
              <h3>Best Country in East Africa</h3>
              <p>
                When Kenya claimed its independence from the U.K. in 1963,
                leaders of the newly formed republic promoted a sense of
                national unity using the motto.
              </p>
            </div>
            <a
              href="/east-africa" // Replace with a valid URL or path
              data-aos="fade-right"
              data-aos-duration="3000"
              className="flex"
            >
              Read More
              <BiRightArrowAlt className="icons" />
            </a>
          </div>

          {/* 3 */}
          <div className="singlePost grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="imgDiv">
              <img
                src={img3}
                alt="Desert landscape in Tunisia with traditional architecture"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="postDetails"
            >
              <h3>Let us have an adventure outside Tunisia.</h3>
              <p>
                Tunisia is a small Arab country in North Africa that represents
                both the aspirations of freedom and struggles against terrorism
                that roil the region.
              </p>
            </div>
            <a
              href="/tunisia" // Replace with a valid URL or path
              className="flex"
            >
              Read More
              <BiRightArrowAlt className="icons" />
            </a>
          </div>

          {/* 4 */}
          <div className="singlePost grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="imgDiv">
              <img
                src={img4}
                alt="Romantic view of the Eiffel Tower at sunset"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="postDetails"
            >
              <h3>Romantic moments under the Eiffel Tower</h3>
              <p>
                With vast swaths of desert in its east and west and the rich
                Nile River Valley at its heart, it is home to one of the world's
                earliest and greatest civilizations.
              </p>
            </div>
            <a
              href="/eiffel-tower" // Replace with a valid URL or path
              className="flex"
            >
              Read More
              <BiRightArrowAlt className="icons" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
