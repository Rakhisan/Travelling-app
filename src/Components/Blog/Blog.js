import React, {useEffect} from 'react'
import "./Blog.css";

import { BiRightArrowAlt } from "react-icons/bi";

import img1 from "../../Assets/morocco.jpg";
import img2 from "../../Assets/east-africa.jpg";
import img3 from "../../Assets/tunisia.jpg";
import img4 from "../../Assets/photo-8.jpg";

import Aos from "aos";
import 'aos/dist/aos.css'

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div data-aos='fade-up' data-aos-duration='3000' className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p >An insight to the incredible experience in the world.</p>
        </div>
        <div className="mainContainer grid">

          {/* 1 */}
          <div className="singlePost grid">
            <div data-aos='fade-up' data-aos-duration='3000' className="imgDiv">
              <img src={img1} alt="Image name" /> 
            </div>
            <div data-aos='fade-up' data-aos-duration='2500' className="postDetails">
              <h3>Beautiful Morocco, let us travel!</h3>
              <p>The Kingdom of Morocco is a Muslim country in western North Africa with coastline on the Atlantic Ocean and Mediterranean Sea.</p>
            </div>
            <a href="" data-aos='fade-right' data-aos-duration='3000' className="flex">
              Read More
              <BiRightArrowAlt className='icons' /> 
            </a>
          </div>

          {/* 2 */}
          <div className="singlePost grid">
            <div data-aos='fade-up' data-aos-duration='3000' className="imgDiv">
              <img src={img2} alt="Image name" />
            </div>
            <div data-aos='fade-up' data-aos-duration='2500' className="postDetails">
              <h3>Besr Country in East Africa</h3>
              <p>When kenya claimed its independence from the U.K in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.</p>
            </div>
            <a href="" data-aos='fade-right' data-aos-duration='3000' className="flex">
              Read More
              <BiRightArrowAlt className='icons' />
            </a>
          </div>

          {/* 3 */}
          <div className="singlePost grid">
            <div data-aos='fade-up' data-aos-duration='3000' className="imgDiv">
              <img src={img3} alt="Image name" />
            </div>
            <div data-aos='fade-up' data-aos-duration='2500' className="postDetails">
              <h3>Let us have an adventure outside Tunisia.</h3>
              <p>Tunisia is a small Arab country un North Africa that represents both the aspirations of freedom and struggles against terrorsim that roil the region.</p>
            </div>
            <a href="" className="flex">
              Read More
              <BiRightArrowAlt className='icons' />
            </a>
          </div>

          {/* 4 */}
          <div  className="singlePost grid">
            <div data-aos='fade-up' data-aos-duration='3000' className="imgDiv">
              <img src={img4} alt="Image name" />
            </div>
            <div data-aos='fade-up' data-aos-duration='2500' className="postDetails">
              <h3>Romantic moments under Eiffel Tower</h3>
              <p>With vast swaths of desert in its east and west and the rich Nile River Vally at its heart, is site to one of the world's earlist and greatest civilizations.</p>
            </div>
            <a href="/" className="flex">
              Read More
              <BiRightArrowAlt className='icons' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
