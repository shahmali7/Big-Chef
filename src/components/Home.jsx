import React from "react";
import PageSlide from "./HomeComp/Slider";
import "./style/Home.css";
import { Outlet, Link } from "react-router-dom";
import {
  MdOutlineDeliveryDining,
  MdFreeCancellation,
  MdSecurityUpdateGood,
} from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri";



const Home = () => {

  return (
    <div className="Home">
      <PageSlide />
      <div className="search">
        <input
          className="inputSearch"
          placeholder="Search Item ..."
          type="text"
          maxLength={10}
        />
        <span>
          <BiSearchAlt className="searchIcon" />
        </span>
      </div>
      <div className="Menu-list">
        <Link className="Menu-Links" to="/">
          {" "}
          All Menu
        </Link>
        <Link className="Menu-Links" to="FastFood">
          Fast Food
        </Link>
        <Link className="Menu-Links" to="RiceMenu">
          Rice Menu
        </Link>
        <Link className="Menu-Links" to="Coffee">
          Coffee
        </Link>
        <Link className="Menu-Links" to="Pizza">
          {" "}
          Pizza
        </Link>
        <Link className="Menu-Links" to="Desserts">
          {" "}
          Desserts
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="home-footer">
        <div className="foot-left">
          <img
            src="https://raw.githubusercontent.com/muhib160/React-Food-Restaurant-Webite/Getting-start/src/assets/images/pasta.png"
            alt=""
          />
        </div>
        <div className="foot-right">
          <div className="foot-desc">
            <h3 style={{ color: "white" }}>Who we are ?</h3>
            <h2>Take a look at the benefitswe offer you</h2>
            <p className="foot-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              cupiditate eius facere labore similique, omnis <br /> minima nulla
              nam debitis quas adipisci, beatae vitae asperiores, totam harum
            </p>
          </div>
          <div className="delivery">
            <span>
              <span className="icon-one">
                <MdOutlineDeliveryDining />
              </span>
              <h4>Free Home Delivery</h4>
              <p>Lorem, ipsum dolor sit amet</p>
            </span>
            <span>
              <span className="icon-two">
                <MdFreeCancellation />
              </span>
              <h4>Cancel Item</h4>
              <p>Lorem, ipsum dolor sit amet</p>
            </span>
            <span>
              <span className="icon-three">
                <MdSecurityUpdateGood />
              </span>
              <h4>Secure Payment</h4>
              <p>Lorem, ipsum dolor sit amet</p>
            </span>
            <span>
              <span className="icon-four">
                <Ri24HoursLine />
              </span>
              <h4>24/7 Hours Working</h4>
              <p>Lorem, ipsum dolor sit amet</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
