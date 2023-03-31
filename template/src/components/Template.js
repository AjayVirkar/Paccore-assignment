import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import OucherLogo from '../images/logoImage.png';
import icon1 from "../images/icon1.jpg";
import icon2 from "../images/icon2.jpg";
import icon3 from "../images/icon3.jpg";
import Banner from "../images/banner.jpg";
import rightArrow from "../images/right-arrow.png";
// import { setInputValue } from './reducer';

const Template = () => {

  const inputValue = useSelector(state => state.inputValue)
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value })
    // setInputValue(e.target.value);
  }

  return (
    <>
      <div className="wmg-container main-navbar">
        <div className="navigation">
          <div className="nav-image">
            <a href="#">
              <img src={OucherLogo} alt="" />
            </a>
          </div>
          <div className="nav-links">
            <ul className="main-links">
              <li><a href="#">services</a></li>
              <li><a href="#">about us </a></li>
              <li><a href="#">cases</a></li>
            </ul>
            <ul className="nav-btns">
              <li>
                <a href="#">
                  <span>sign up</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wmg-container">
        <div className="two-col-layout">
          <div className="layout-left">
            <div className="layout-text">
              <div className="layout-heading">
                <div>unlimited</div>
                <div>pretenders</div>
                <div className='imah-icon-container'>
                  <div className="img-icons">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                  </div>
                  <div>
                    <p>Ideas</p>
                  </div>
                </div>
              </div>
              <div className="below-text">
                <p>our solutions</p>
                <p> we provide the full <br />funnel approach</p>
              </div>
            </div>
          </div>
          <div className="layout-right">
            <div className="image-container">
              <img src={Banner} alt="" />
            </div>
            <div className="input-demo-call">
              <input value={inputValue} onChange={handleChange} className="demo-input" type="text" id="name" placeholder="Book demo call" />
              <img className="demo-input-button" src={rightArrow} alt="" />
            </div>
            <div className="dynamic-dots">
              <span className="active-dot"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="wmg-container">
        <div className="card-layout">
          <div className="left-side-text">
            <div className="let-see">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <span>Let's see <br />How We Did It</span>
            </div>
            <div className="filter-btns">
              <div className="">
                <a href="#">web analytics</a>
              </div>
              <div className="">
                <a href="#">Email Marketing</a>
              </div>
              <div className="">
                <a href="#">SEO 2.0</a>
              </div>
            </div>
          </div>
          <div className="right-side-cards">
            <div className="card1">
              <div className='card-section1'></div>
              <div className='card-data'>
                <div className='card-text1'>Unique <br />businesses solution</div>
                <div className='card-text2'>Logo</div>
              </div>
            </div>
            <div className="card2">
              <div className='card-section2'></div>
              <div className='card-data'>
                <div className='card-text1'>
                  {/* <img className='arroe-img' src={Arrow} alt="" /> */}
                </div>
                <div className='card-text2'>Our <br />case studies</div>
              </div>
              <div className="dynamic-dots dynamic-dots2">
                <span className="active-dot"></span>
                <span></span>
              </div>
            </div>
            <div className="card3">
              <div className='card-section3'></div>
              <div className='card-data'>
                <div className='card-text1'>Successful <br />Projects</div>
                <div className='card3-text'>700 <span>+</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Template