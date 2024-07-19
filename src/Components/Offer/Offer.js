import React, { useEffect } from "react";
import "./Offer.css";
import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

import img1 from "../../Assets/photo-11.jpg";
import img2 from "../../Assets/photo-12.jpg";
import img3 from "../../Assets/photo-13.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="3000" className="secTitle">
            Special Offers
          </h2>
          <p data-aos="fade-up" data-aos-duration="3000">
            From historical cities to natural spectacles, come see the best of
            the world!
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="maincontent grid"
        >
          {/* 1 */}
          <div className="secContainer grid">
            <div className="singleOffer">
              <div className="destImage">
                <img
                  src={img1}
                  alt="Beautiful landscape with a discount of 30% off"
                />
                <span className="discount">30% off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>$1000</h4>
                  <span className="status">For Rent</span>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className="icon" />
                    <small>1 Bath</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-Fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationOn className="icon" />
                  <small>450 Vine #130, India</small>
                </div>
                <button className="btn flex">
                  View Details
                  <BsArrowRightShort className="icon1" />
                </button>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="secContainer grid">
            <div className="singleOffer">
              <div className="destImage">
                <img
                  src={img2}
                  alt="Modern apartment with a discount of 30% off"
                />
                <span className="discount">30% off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>$3999</h4>
                  <span className="status">For Rent</span>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className="icon" />
                    <small>1 Bath</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-Fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationOn className="icon" />
                  <small>450 Vine #130, Mexico</small>
                </div>
                <button className="btn flex">
                  View Details
                  <BsArrowRightShort className="icon1" />
                </button>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="secContainer grid">
            <div className="singleOffer">
              <div className="destImage">
                <img src={img3} alt="Cozy cabin with a discount of 30% off" />
                <span className="discount">30% off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>$2999</h4>
                  <span className="status">For Rent</span>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <MdKingBed className="icon" />
                    <small>2 Beds</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdBathtub className="icon" />
                    <small>1 Bath</small>
                  </div>
                  <div className="singleAmenity flex">
                    <FaWifi className="icon" />
                    <small>Wi-Fi</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdAirportShuttle className="icon" />
                    <small>Shuttle</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationOn className="icon" />
                  <small>450 Vine #360, Peru</small>
                </div>
                <button className="btn flex">
                  View Details
                  <BsArrowRightShort className="icon1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
