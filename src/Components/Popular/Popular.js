import React, {useEffect}  from 'react'
import "./Popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import Aos from "aos";
import 'aos/dist/aos.css'

// Import the image..............

import img1 from '../../Assets/photo-4.jpg'
import img2 from '../../Assets/photo-1.jpg'
import img3 from '../../Assets/photo-9.jpg'
import img4 from '../../Assets/photo-8.jpg'

const Popular = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])



  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos='fade-right' data-aos-duration='3000' className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              From historical cities to natural specteculars, come see the best of the world!
            </p>
          </div>

          <div data-aos='fade-left' data-aos-duration='3000' className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon' />
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='3000' className="mainContent grid">
          {/* 1 */}
          <div className="singleDestination">
            <div className="destImage">
              <img src={img1} alt="Image title" />

              <div className="overlayInfo">
                <h3>Kasol</h3> 
                <p>Lorem ipsum dolor sit amet.</p>
                <BsArrowRightShort className='icon' />

              </div>
            </div>
            <div className="destFooter">
              <div className="number">
                01
              </div>
              <div className="destText flex">
                <h6>India </h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className='icon' />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="singleDestination">
            <div className="destImage">
              <img src={img2} alt="Image title" />

              <div className="overlayInfo">
                <h3>Campeche Campeche</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <BsArrowRightShort className='icon' />

              </div>
            </div>
            <div className="destFooter">
              <div className="number">
                02
              </div>
              <div className="destText flex">
                <h6>Mexico </h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className='icon' />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="singleDestination">
            <div className="destImage">
              <img src={img3} alt="Image title" />

              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <BsArrowRightShort className='icon' />

              </div>
            </div>
            <div className="destFooter">
              <div className="number">
                03
              </div>
              <div className="destText flex">
                <h6>Combodia </h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className='icon' />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="singleDestination">
            <div className="destImage">
              <img src={img4} alt="Image title" />

              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <BsArrowRightShort className='icon' />

              </div>
            </div>
            <div className="destFooter">
              <div className="number">
                04
              </div>
              <div className="destText flex">
                <h6>Peru </h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className='icon' />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Popular 
