import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../Assets/footerLogo.svg";

export default function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container__content">
          <div className="footer__container__content__quick__links">
            <img
              src={footerLogo}
              alt=""
              className="footer__container__content__logo"
            />
          </div>
          <div className="footer__container__content__quick__links">
            <div className="footer__container__content__quick__links__heading">
              Quicklinks
            </div>
            <div className="footer__container__content__link">
              <Link to="/" href="">
                Home
              </Link>
            </div>
            <div className="footer__container__content__link">
              <Link to="/about-us">About</Link>
            </div>
            <div className="footer__container__content__link">
              <Link to="/services">Service</Link>
            </div>
            <div className="footer__container__content__link">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer__container__content__quick__links">
            <div className="footer__container__content__quick__links__heading">
              Contact us
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.425"
                height="22.656"
                viewBox="0 0 25.425 22.656"
                fill="currentColor"
              >
                <path
                  id="Icon_awesome-phone-alt"
                  data-name="Icon awesome-phone-alt"
                  d="M24.7,16.01l-5.562-2.124a1.289,1.289,0,0,0-1.39.305l-2.463,2.682a17.536,17.536,0,0,1-8.8-7.841L9.495,6.837A.987.987,0,0,0,9.838,5.6L7.454.642A1.242,1.242,0,0,0,6.088.027L.924,1.089A1.1,1.1,0,0,0,0,2.124c0,11.35,10.324,20.532,23.042,20.532a1.172,1.172,0,0,0,1.162-.823l1.192-4.6A1.05,1.05,0,0,0,24.7,16.01Z"
                  transform="translate(0 0)"
                />
              </svg>

              <a href="">111-111-111-111</a>
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.42"
                height="17.834"
                viewBox="0 0 26.42 17.834"
                fill="currentColor"
              >
                <path
                  id="Icon_zocial-email"
                  data-name="Icon zocial-email"
                  d="M.072,20.323V5.648q0-.025.076-.484l8.637,7.389L.174,20.832a2.159,2.159,0,0,1-.1-.51ZM1.219,4.144a1.1,1.1,0,0,1,.433-.076H24.913a1.443,1.443,0,0,1,.459.076l-8.662,7.414-1.147.917-2.268,1.86-2.268-1.86-1.147-.917Zm.025,17.682,8.688-8.331,3.363,2.726,3.363-2.726,8.688,8.331a1.223,1.223,0,0,1-.433.076H1.652a1.154,1.154,0,0,1-.408-.076ZM17.8,12.552l8.611-7.389a1.521,1.521,0,0,1,.076.484V20.323a1.953,1.953,0,0,1-.076.51Z"
                  transform="translate(-0.072 -4.068)"
                />
              </svg>

              <a href="">abc123@gmail.com</a>
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.162"
                height="28.803"
                viewBox="0 0 20.162 28.803"
                fill="currentColor"
              >
                <path
                  id="Icon_material-location-on"
                  data-name="Icon material-location-on"
                  d="M17.581,3A10.074,10.074,0,0,0,7.5,13.081C7.5,20.642,17.581,31.8,17.581,31.8S27.662,20.642,27.662,13.081A10.074,10.074,0,0,0,17.581,3Zm0,13.681a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,17.581,16.681Z"
                  transform="translate(-7.5 -3)"
                />
              </svg>

              <a href="">Street no.2 ravi Mohalla Lahore Pakistan</a>
            </div>
          </div>
          <div className="footer__container__content__quick__links">
            <div className="footer__container__content__quick__links__heading">
              Social Media
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.186"
                height="21.42"
                viewBox="0 0 11.186 21.42"
                fill="currentColor"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M87.259,21.421V11.662h3.332l.476-3.808H87.259V5.474c0-1.071.357-1.9,1.9-1.9h2.023V.119C90.71.119,89.52,0,88.211,0c-2.856,0-4.879,1.785-4.879,5V7.854H80v3.808h3.332v9.758Z"
                  transform="translate(-80)"
                  fill-rule="evenodd"
                />
              </svg>
              <a href="">Facebook</a>
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.421"
                height="17.375"
                viewBox="0 0 21.421 17.375"
                fill="currentColor"
              >
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M44.783,19.374a12.384,12.384,0,0,0,12.5-12.5v-.6a9.673,9.673,0,0,0,2.142-2.261,9.879,9.879,0,0,1-2.5.714,4.63,4.63,0,0,0,1.9-2.38,10.915,10.915,0,0,1-2.737,1.071A4.25,4.25,0,0,0,52.875,2a4.471,4.471,0,0,0-4.4,4.4,2.32,2.32,0,0,0,.119.952,12.3,12.3,0,0,1-9.044-4.641,4.557,4.557,0,0,0-.6,2.261,4.728,4.728,0,0,0,1.9,3.689,4.012,4.012,0,0,1-2.023-.6h0a4.349,4.349,0,0,0,3.57,4.284,3.669,3.669,0,0,1-1.19.119,2.025,2.025,0,0,1-.833-.119,4.508,4.508,0,0,0,4.165,3.094,8.985,8.985,0,0,1-5.474,1.9A3.3,3.3,0,0,1,38,17.232a11.232,11.232,0,0,0,6.783,2.142"
                  transform="translate(-38 -2)"
                  fill-rule="evenodd"
                />
              </svg>
              <a href="">Twitter</a>
            </div>
            <div className="footer__container__content__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.421"
                height="21.42"
                viewBox="0 0 21.421 21.42"
                fill="currentColor"
              >
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M10.71,1.9a32.84,32.84,0,0,1,4.284.119,5.52,5.52,0,0,1,2.023.357A4.179,4.179,0,0,1,19.04,4.4,5.52,5.52,0,0,1,19.4,6.426c0,1.071.119,1.428.119,4.284a32.84,32.84,0,0,1-.119,4.284,5.52,5.52,0,0,1-.357,2.023,4.179,4.179,0,0,1-2.023,2.023,5.52,5.52,0,0,1-2.023.357c-1.071,0-1.428.119-4.284.119A32.84,32.84,0,0,1,6.426,19.4,5.52,5.52,0,0,1,4.4,19.04,4.179,4.179,0,0,1,2.38,17.017a5.52,5.52,0,0,1-.357-2.023c0-1.071-.119-1.428-.119-4.284a32.84,32.84,0,0,1,.119-4.284A5.52,5.52,0,0,1,2.38,4.4a4.274,4.274,0,0,1,.833-1.19A2.012,2.012,0,0,1,4.4,2.38a5.52,5.52,0,0,1,2.023-.357A32.84,32.84,0,0,1,10.71,1.9m0-1.9a35.162,35.162,0,0,0-4.4.119A7.347,7.347,0,0,0,3.689.6a4.659,4.659,0,0,0-1.9,1.19A4.659,4.659,0,0,0,.6,3.689,5.422,5.422,0,0,0,.119,6.307,35.162,35.162,0,0,0,0,10.71a35.162,35.162,0,0,0,.119,4.4A7.347,7.347,0,0,0,.6,17.731a4.659,4.659,0,0,0,1.19,1.9,4.659,4.659,0,0,0,1.9,1.19,7.347,7.347,0,0,0,2.618.476,35.162,35.162,0,0,0,4.4.119,35.162,35.162,0,0,0,4.4-.119,7.347,7.347,0,0,0,2.618-.476,4.993,4.993,0,0,0,3.094-3.094,7.347,7.347,0,0,0,.476-2.618c0-1.19.119-1.547.119-4.4a35.162,35.162,0,0,0-.119-4.4,7.347,7.347,0,0,0-.476-2.618,4.659,4.659,0,0,0-1.19-1.9A4.659,4.659,0,0,0,17.731.6,7.347,7.347,0,0,0,15.113.119,35.162,35.162,0,0,0,10.71,0m0,5.236A5.386,5.386,0,0,0,5.236,10.71,5.474,5.474,0,1,0,10.71,5.236m0,9.044a3.506,3.506,0,0,1-3.57-3.57,3.506,3.506,0,0,1,3.57-3.57,3.506,3.506,0,0,1,3.57,3.57,3.506,3.506,0,0,1-3.57,3.57M16.422,3.689A1.309,1.309,0,1,0,17.731,5a1.321,1.321,0,0,0-1.309-1.309"
                  fill-rule="evenodd"
                />
              </svg>
              <a href="">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copywrite__section">
        <span> Developed By</span>{" "}
        <a href="https://www.dsmeglobal.com/" target="_blank">
          DSME Global Links
        </a>
      </div>
    </>
  );
}
