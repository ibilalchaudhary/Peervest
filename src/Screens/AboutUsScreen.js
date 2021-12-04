import React from "react";
import main__background from "../Assets/main__background.jpg";
import founderPic from "../Assets/founderPic.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import container__our__team__wrapper__entry__img__1 from "../Assets/container__our__team__wrapper__entry__img__1.png";
import container__our__team__wrapper__entry__img__2 from "../Assets/container__our__team__wrapper__entry__img__2.png";
import container__our__team__wrapper__entry__img__3 from "../Assets/container__our__team__wrapper__entry__img__3.png";
import aboutUsSvg from "../Assets/aboutUsSvg.svg";
import ourVisionSvg from "../Assets/ourVisionSvg.svg";
import contact__background from "../Assets/contact__background.jpg";
import { Link } from "react-router-dom";

export default function AboutUsScreen() {
  return (
    <>
      <Header />
      <div className="homepage__main__container">
        <div
          className="homepage__main__container__jumbotron"
          style={{ maxHeight: 500, overflow: "hidden" }}
        >
          <img
            src={contact__background}
            alt="contact__background"
            className="homepage__main__container__jumbotron__img"
            style={{ height: "fit-content", marginTop: -1050 }}
          />
          <div className="homepage__main__container__jumbotron__wrapper">
            <div className="homepage__main__container__jumbotron__wrapper__content">
              <div
                className="homepage__main__container__jumbotron__wrapper__content__heading"
                style={{
                  maxWidth: "100%",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                <span>About Us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container__our__team">
            <div className="container__our__team__heading">Our Team</div>
            <div className="container__our__team__info">
              Create a concise and compelling investment pitch deck that
              contains information required by investors. Create a concise and
              compelling investment.
            </div>
            <div className="container__our__team__wrapper">
              <div className="container__our__team__card">
                <img
                  src={founderPic}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Fizza Nadeem Siddique
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.689"
                            height="12.748"
                            viewBox="0 0 15.689 12.748"
                          >
                            <path
                              id="twitter"
                              d="M14.077,5.429a6.421,6.421,0,0,0,1.612-1.67h0a6.717,6.717,0,0,1-1.853.508,3.2,3.2,0,0,0,1.415-1.777,6.436,6.436,0,0,1-2.04.779,3.216,3.216,0,0,0-5.564,2.2,3.312,3.312,0,0,0,.075.733,9.106,9.106,0,0,1-6.63-3.365,3.216,3.216,0,0,0,.988,4.3,3.179,3.179,0,0,1-1.453-.4v.035A3.232,3.232,0,0,0,3.2,9.934a3.2,3.2,0,0,1-.843.106,2.839,2.839,0,0,1-.609-.055,3.248,3.248,0,0,0,3.005,2.241A6.465,6.465,0,0,1,.769,13.6,6.083,6.083,0,0,1,0,13.554,9.058,9.058,0,0,0,4.934,15a9.092,9.092,0,0,0,9.143-9.568Z"
                              transform="translate(0 -2.25)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__our__team__card">
                <img
                  src={container__our__team__wrapper__entry__img__1}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Laraib
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.689"
                            height="12.748"
                            viewBox="0 0 15.689 12.748"
                          >
                            <path
                              id="twitter"
                              d="M14.077,5.429a6.421,6.421,0,0,0,1.612-1.67h0a6.717,6.717,0,0,1-1.853.508,3.2,3.2,0,0,0,1.415-1.777,6.436,6.436,0,0,1-2.04.779,3.216,3.216,0,0,0-5.564,2.2,3.312,3.312,0,0,0,.075.733,9.106,9.106,0,0,1-6.63-3.365,3.216,3.216,0,0,0,.988,4.3,3.179,3.179,0,0,1-1.453-.4v.035A3.232,3.232,0,0,0,3.2,9.934a3.2,3.2,0,0,1-.843.106,2.839,2.839,0,0,1-.609-.055,3.248,3.248,0,0,0,3.005,2.241A6.465,6.465,0,0,1,.769,13.6,6.083,6.083,0,0,1,0,13.554,9.058,9.058,0,0,0,4.934,15a9.092,9.092,0,0,0,9.143-9.568Z"
                              transform="translate(0 -2.25)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__our__team__card">
                <img
                  src={container__our__team__wrapper__entry__img__2}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Tajulle Ahmed
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.689"
                            height="12.748"
                            viewBox="0 0 15.689 12.748"
                          >
                            <path
                              id="twitter"
                              d="M14.077,5.429a6.421,6.421,0,0,0,1.612-1.67h0a6.717,6.717,0,0,1-1.853.508,3.2,3.2,0,0,0,1.415-1.777,6.436,6.436,0,0,1-2.04.779,3.216,3.216,0,0,0-5.564,2.2,3.312,3.312,0,0,0,.075.733,9.106,9.106,0,0,1-6.63-3.365,3.216,3.216,0,0,0,.988,4.3,3.179,3.179,0,0,1-1.453-.4v.035A3.232,3.232,0,0,0,3.2,9.934a3.2,3.2,0,0,1-.843.106,2.839,2.839,0,0,1-.609-.055,3.248,3.248,0,0,0,3.005,2.241A6.465,6.465,0,0,1,.769,13.6,6.083,6.083,0,0,1,0,13.554,9.058,9.058,0,0,0,4.934,15a9.092,9.092,0,0,0,9.143-9.568Z"
                              transform="translate(0 -2.25)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container__our__team__card">
                <img
                  src={container__our__team__wrapper__entry__img__3}
                  alt="container__our__team__wrapper__entry__img"
                  className="container__our__team__card__img"
                />
                <div className="container__our__team__card__content__overlay">
                  <div className="container__our__team__card__content">
                    <div className="container__our__team__card__content__heading">
                      Khizr Iqbal
                    </div>
                    <div className="container__our__team__card__content__info">
                      (Co-founder)
                    </div>
                    <div className="container__our__team__card__content__social__links__container">
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="7.285"
                            height="14.568"
                            viewBox="0 0 7.285 14.568"
                          >
                            <path
                              id="facebook"
                              d="M12.142,2.419h1.33V.1A17.174,17.174,0,0,0,11.534,0,3.076,3.076,0,0,0,8.3,3.423v2.04H6.187v2.59H8.3v6.516H10.9V8.053h2.03l.322-2.59H10.9V3.68c0-.748.2-1.261,1.245-1.261Z"
                              transform="translate(-6.187)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="instagram_1_"
                            data-name="instagram (1)"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.568"
                            height="14.568"
                            viewBox="0 0 14.568 14.568"
                          >
                            <path
                              id="Path_148"
                              data-name="Path 148"
                              d="M213.561,212.28a1.28,1.28,0,1,1-1.28-1.28A1.28,1.28,0,0,1,213.561,212.28Zm0,0"
                              transform="translate(-204.996 -204.996)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_149"
                              data-name="Path 149"
                              d="M126.032,120h-4.325A1.709,1.709,0,0,0,120,121.707v4.325a1.709,1.709,0,0,0,1.707,1.707h4.325a1.709,1.709,0,0,0,1.707-1.707v-4.325A1.709,1.709,0,0,0,126.032,120Zm-2.163,6A2.134,2.134,0,1,1,126,123.87,2.136,2.136,0,0,1,123.87,126Zm2.447-4.154a.427.427,0,1,1,.427-.427A.427.427,0,0,1,126.317,121.85Zm0,0"
                              transform="translate(-116.586 -116.586)"
                              fill="#0a264e"
                            />
                            <path
                              id="Path_150"
                              data-name="Path 150"
                              d="M10.727,0H3.841A3.846,3.846,0,0,0,0,3.841v6.886a3.846,3.846,0,0,0,3.841,3.841h6.886a3.846,3.846,0,0,0,3.841-3.841V3.841A3.846,3.846,0,0,0,10.727,0Zm1.28,9.447a2.564,2.564,0,0,1-2.561,2.561H5.122A2.564,2.564,0,0,1,2.561,9.447V5.122A2.564,2.564,0,0,1,5.122,2.561H9.447a2.564,2.564,0,0,1,2.561,2.561Zm0,0"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.689"
                            height="12.748"
                            viewBox="0 0 15.689 12.748"
                          >
                            <path
                              id="twitter"
                              d="M14.077,5.429a6.421,6.421,0,0,0,1.612-1.67h0a6.717,6.717,0,0,1-1.853.508,3.2,3.2,0,0,0,1.415-1.777,6.436,6.436,0,0,1-2.04.779,3.216,3.216,0,0,0-5.564,2.2,3.312,3.312,0,0,0,.075.733,9.106,9.106,0,0,1-6.63-3.365,3.216,3.216,0,0,0,.988,4.3,3.179,3.179,0,0,1-1.453-.4v.035A3.232,3.232,0,0,0,3.2,9.934a3.2,3.2,0,0,1-.843.106,2.839,2.839,0,0,1-.609-.055,3.248,3.248,0,0,0,3.005,2.241A6.465,6.465,0,0,1,.769,13.6,6.083,6.083,0,0,1,0,13.554,9.058,9.058,0,0,0,4.934,15a9.092,9.092,0,0,0,9.143-9.568Z"
                              transform="translate(0 -2.25)"
                              fill="#0a264e"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="container__our__team__card__content__social__links">
                        <a href="">
                          <svg
                            id="google"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.176"
                            height="15.176"
                            viewBox="0 0 15.176 15.176"
                          >
                            <g
                              id="Group_81"
                              data-name="Group 81"
                              transform="translate(0 4.23)"
                            >
                              <g id="Group_80" data-name="Group 80">
                                <path
                                  id="Path_144"
                                  data-name="Path 144"
                                  d="M3.367,144.209.782,142.717a7.538,7.538,0,0,0,.011,6.709l2.574-1.486a4.574,4.574,0,0,1,0-3.731Z"
                                  transform="translate(0 -142.717)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_83"
                              data-name="Group 83"
                              transform="translate(1.278 0)"
                            >
                              <g id="Group_82" data-name="Group 82">
                                <path
                                  id="Path_145"
                                  data-name="Path 145"
                                  d="M54.414,1.86A7.587,7.587,0,0,0,43.127,3.374l2.587,1.494a4.6,4.6,0,0,1,6.656-.84.491.491,0,0,0,.66-.032l1.409-1.409A.5.5,0,0,0,54.414,1.86Z"
                                  transform="translate(-43.127 0)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_85"
                              data-name="Group 85"
                              transform="translate(7.918 6.268)"
                            >
                              <g id="Group_84" data-name="Group 84">
                                <path
                                  id="Path_146"
                                  data-name="Path 146"
                                  d="M274.337,211.921a.5.5,0,0,0-.494-.441h-6.217a.5.5,0,0,0-.495.495v1.978a.5.5,0,0,0,.495.495h3.484a4.654,4.654,0,0,1-1.588,2.075l1.48,2.563a7.749,7.749,0,0,0,3.121-4.337A7.3,7.3,0,0,0,274.337,211.921Z"
                                  transform="translate(-267.131 -211.479)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                            <g
                              id="Group_87"
                              data-name="Group 87"
                              transform="translate(1.289 10.309)"
                            >
                              <g id="Group_86" data-name="Group 86">
                                <path
                                  id="Path_147"
                                  data-name="Path 147"
                                  d="M51.651,349.3a4.59,4.59,0,0,1-5.588-1.5l-2.576,1.487a7.58,7.58,0,0,0,6.3,3.38,7.432,7.432,0,0,0,3.346-.8Z"
                                  transform="translate(-43.487 -347.801)"
                                  fill="#0a264e"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__us__container">
          <div className="about__us__content">
            <div className="about__us__content__left">
              <img
                src={aboutUsSvg}
                alt="aboutUsSvg"
                className="about__us__content__left__img"
              />
            </div>
            <div className="about__us__content__right">
              <div className="about__us__content__left__heading">Our Story</div>
              <div className="about__us__content__left__info">
                Peervest is a fund sourcing platform to bridge the gap between
                potential investors and promising start-ups. Peervest also acts
                as a consultancy to start-ups which do not have enough resources
                otherwise to achieve investment readiness.
              </div>
              <div className="about__us__content__left__info">
                Once start-ups are investable; Peervest then help those
                start-ups connect with Angel Investors, Venture Capital firms
                and other means of funding opportunities. Peervest provides
                investors a platform to invest in a business with an intention
                of earning returns in the long-term. Investors get to decide
                which ideas are worth funding. If it succeeds, investors make
                money and if does not, they lose it all.
              </div>
              <div className="about__us__content__right__buttons">
                <div className="about__us__content__right__buttons__left">
                  <Link
                    to="/contact"
                    className="about__us__content__right__buttons__left__cta"
                  >
                    Contact us
                  </Link>
                </div>
                <div className="about__us__content__right__buttons__right"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="our__vision__container">
          <div className="our__vision__container__content">
            <div className="our__vision__container__content__left">
              <div className="our__vision__container__content__left__heading">
                Our Vision
              </div>
              <div className="our__vision__container__content__left__info">
                My vision is to imtroduce crowdfunding as a safe and viable
                fundeaising option for Pakistan's start-ups. Having closely
                worked with financially constrained startups and the investor
                fraternity, I found the equation off balanced with a large
                influx of needy startups and only a handful of angels or VC's
                that could put in their money. My background in accounting and
                finance from IBA and the mentorship i recieved there gave me a
                sound understanding of the investment and funding culture in
                Pakistan's start-up ecosystem. PeerVest Global is the outcome of
                the thought process that started at IBA, and is today a
                functioning platform, always evolving. We're here to hand hold
                all tech startups and investors in their journey to succeed.
              </div>
              <Link
                to="/contact"
                className="homepage__main__container__jumbotron__wrapper__content__cta"
              >
                Join Us Now
              </Link>
            </div>
            <div className="our__vision__container__content__right">
              <img
                src={ourVisionSvg}
                alt="ourVisionSvg"
                className="our__vision__container__content__right__img"
              />
            </div>
          </div>
        </div>
        <div className="milestone__wrapper">
          <div className="milestone__container">
            <div className="milestone__container__heading">Milestones</div>
            <div className="milestone__container__content">
              <div className="milestone__container__content__card milestone__container__content__card__border">
                <div className="milestone__container__content__card__value">
                  56
                </div>
                <div className="milestone__container__content__card__type">
                  Arranged
                </div>
                <div className="milestone__container__content__card__heading">
                  Meetings
                </div>
                <div className="milestone__container__content__card__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="248.75"
                    height="208.031"
                    viewBox="0 0 248.75 208.031"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(-0.041 0.001)"
                    >
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          id="Path_41"
                          data-name="Path 41"
                          d="M47.07,86.51c.34-17.22,8-29.91,23.17-37.94C55,34.38,59.48,15.89,68.94,7.37,80.22-2.79,96.85-2.4,107,8.25s11.35,28-2.48,40.33c14.47,7.6,22.12,19.61,23.17,36.31h56.82c19.68,0,36.64,6.56,49.34,21.9,15.52,18.75,19.06,40.13,10.1,62.62-8.61,21.61-25.22,34.27-48.37,37.89A69.383,69.383,0,0,1,185,208q-61.77.06-123.54,0c-29.07,0-54.76-20.81-60.2-48.71-5.73-29.34,9.14-57.87,36.22-69.38C40.49,88.59,43.7,87.68,47.07,86.51ZM207.79,194c24.06-9.75,36.81-38.34,28.71-63.35a52.81,52.81,0,0,0-51.17-36.09c-40.73.34-81.47.07-122.2.12a73.441,73.441,0,0,0-10.26.75c-28.89,4.17-49,34.1-42.12,62.46,6,24.61,25.59,40.24,51.64,40.62,20.75.31,41.51,0,62.27.1,2.11,0,2.89-.6,3-2.78.6-11.22,5.38-20.46,13.81-27.77a107.115,107.115,0,0,1,8.79-6.26c-13.85-12.9-11.57-30.22-2.06-40.07a27.14,27.14,0,0,1,37.57-1.36,26.8,26.8,0,0,1,9,18c.84,9.5-3,17.2-9.91,23.5C200.79,173.22,200.79,173.22,207.79,194Zm-9.57,3.69c-1.05-12.43-6.62-21.29-17.1-26.5-10.64-5.29-21.34-4.53-31.11,2.35-8.41,5.93-12.81,14.24-13,25.15,20.56-.63,40.77.77,61.21-1.02ZM56.92,84.84h60.94c-.24-11.54-5.3-20.15-14.64-25.83-10.63-6.47-21.82-6.37-32.31.36C61.81,65.2,56.91,73.77,56.92,84.84Zm48.17-57.55A17.65,17.65,0,0,0,87.73,9.53a17.92,17.92,0,0,0-18,17.6A17.9,17.9,0,0,0,87.57,44.88a17.6,17.6,0,0,0,17.52-17.59Zm62.45,130.87c10.11,0,18-7.67,17.84-17.49A17.78,17.78,0,0,0,167.54,123a17.54,17.54,0,0,0-17.4,17.35c-.07,10.13,7.39,17.78,17.4,17.81Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="milestone__container__content__card milestone__container__content__card__border">
                <div className="milestone__container__content__card__value">
                  56
                </div>
                <div className="milestone__container__content__card__type">
                  Arranged
                </div>
                <div className="milestone__container__content__card__heading">
                  Meetings
                </div>
                <div className="milestone__container__content__card__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="248.75"
                    height="208.031"
                    viewBox="0 0 248.75 208.031"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(-0.041 0.001)"
                    >
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          id="Path_41"
                          data-name="Path 41"
                          d="M47.07,86.51c.34-17.22,8-29.91,23.17-37.94C55,34.38,59.48,15.89,68.94,7.37,80.22-2.79,96.85-2.4,107,8.25s11.35,28-2.48,40.33c14.47,7.6,22.12,19.61,23.17,36.31h56.82c19.68,0,36.64,6.56,49.34,21.9,15.52,18.75,19.06,40.13,10.1,62.62-8.61,21.61-25.22,34.27-48.37,37.89A69.383,69.383,0,0,1,185,208q-61.77.06-123.54,0c-29.07,0-54.76-20.81-60.2-48.71-5.73-29.34,9.14-57.87,36.22-69.38C40.49,88.59,43.7,87.68,47.07,86.51ZM207.79,194c24.06-9.75,36.81-38.34,28.71-63.35a52.81,52.81,0,0,0-51.17-36.09c-40.73.34-81.47.07-122.2.12a73.441,73.441,0,0,0-10.26.75c-28.89,4.17-49,34.1-42.12,62.46,6,24.61,25.59,40.24,51.64,40.62,20.75.31,41.51,0,62.27.1,2.11,0,2.89-.6,3-2.78.6-11.22,5.38-20.46,13.81-27.77a107.115,107.115,0,0,1,8.79-6.26c-13.85-12.9-11.57-30.22-2.06-40.07a27.14,27.14,0,0,1,37.57-1.36,26.8,26.8,0,0,1,9,18c.84,9.5-3,17.2-9.91,23.5C200.79,173.22,200.79,173.22,207.79,194Zm-9.57,3.69c-1.05-12.43-6.62-21.29-17.1-26.5-10.64-5.29-21.34-4.53-31.11,2.35-8.41,5.93-12.81,14.24-13,25.15,20.56-.63,40.77.77,61.21-1.02ZM56.92,84.84h60.94c-.24-11.54-5.3-20.15-14.64-25.83-10.63-6.47-21.82-6.37-32.31.36C61.81,65.2,56.91,73.77,56.92,84.84Zm48.17-57.55A17.65,17.65,0,0,0,87.73,9.53a17.92,17.92,0,0,0-18,17.6A17.9,17.9,0,0,0,87.57,44.88a17.6,17.6,0,0,0,17.52-17.59Zm62.45,130.87c10.11,0,18-7.67,17.84-17.49A17.78,17.78,0,0,0,167.54,123a17.54,17.54,0,0,0-17.4,17.35c-.07,10.13,7.39,17.78,17.4,17.81Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="milestone__container__content__card milestone__container__content__card__border ">
                <div className="milestone__container__content__card__value">
                  49
                </div>
                <div className="milestone__container__content__card__type">
                  Successful
                </div>
                <div className="milestone__container__content__card__heading">
                  Matchmaking
                </div>
                <div className="milestone__container__content__card__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="307.516"
                    height="201.002"
                    viewBox="0 0 307.516 201.002"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(-0.017 0.002)"
                    >
                      <g id="Layer_1" data-name="Layer 1">
                        <path
                          id="Path_42"
                          data-name="Path 42"
                          d="M111.79,187.82c-8.68-1.06-18.63.69-22.67-3.41-7.23-7.33-16.33-14.77-20.63-23-5.43-10.37-5.28-24.31-6.71-36.77-.37-3.2,4.11-8.29,7.63-10.35,9.24-5.42,19.08-9.86,28.91-14.19,2.12-.94,5.18.24,7.8.44-1.49,2.42-2.42,5.88-4.59,7.09-8.24,4.58-16.88,8.44-25.38,12.56-4.84,2.34-8.62,5.54-5.75,11.39,2.79,5.67,7.52,5.19,12.51,2.77,15.23-7.4,30.41-14.92,45.85-21.86,2.82-1.27,6.77,0,10.2.09-2.14,2.42-3.81,5.75-6.48,7.1-16.86,8.5-33.95,16.54-50.94,24.78-4.89,2.37-10,5.21-7,11.74,3.19,7,8.72,5,14.06,2.36,19-9.26,38-18.59,57.21-27.5,2.55-1.18,6.18,0,9.3.06-1.89,2.48-3.26,6-5.77,7.29-15.36,7.84-31,15-46.47,22.78-5.67,2.85-15.4,4.43-11.17,13.74s11.64,3.24,17.52.48c13.86-6.48,27.47-13.5,41.46-19.69,4.43-2,9.74-2,14.64-2.87,1,8.73-7.22,7.93-11.6,10.47-9,5.2-18.91,8.82-27.82,14.14-2.67,1.59-3.29,6.63-4.85,10.08,3.86,1.17,8.8,4.49,11.41,3.17,33.37-16.83,66.71-33.8,99.36-52,10-5.59,22.77-13.63,25.39-23,2.42-8.7-6.57-20.92-11.36-31.21-8.66-18.59-17.73-37-27.07-55.26-3.07-6-2.36-9.34,3.9-12.19,10.07-4.58,20-9.57,29.76-14.72C257.85-.51,261.22.06,264.06,6q20.79,43.11,42.12,86c2.79,5.58,1.17,8.65-4,10.59-23.26,8.74-41.21,25.26-61,39.55-22,15.9-47,27.62-70.94,40.77-9.4,5.17-19.36,9.31-29.08,13.88C124.8,204.41,117.9,201.84,111.79,187.82ZM298,94.9,256.4,10.08,226.35,25c14.24,28.89,27.84,56.47,41.65,84.5Z"
                        />
                        <path
                          id="Path_43"
                          data-name="Path 43"
                          d="M200.86,45.47c-25.45-8.58-50.3-17.23-75.38-25.15-4.25-1.35-9.55,0-14.25.84C101.3,22.85,91.45,25,78.79,27.47c-2.94,8.32-7.17,20.15-11.27,32-5.95,17.22-12.08,34.39-17.59,51.76-2.34,7.39-5.79,9-12.93,6.16-10.28-4.06-20.87-7.35-31.39-10.77C.52,105-1,101.89.66,97Q16.45,50.78,32.27,4.6C34.15-.9,37.85-.6,42.43,1.05,55.59,5.78,68.62,11.18,82.16,14.49c7.34,1.8,15.6,0,23.44-.37,8.53-.37,17.72-3.2,25.46-1,24.36,7,48.12,16.1,72.24,24,6.45,2.11,7.85,5.73,6.4,11.77-3.36,14-13.9,20.79-27.76,17-10.92-3-21.63-6.77-32.86-10.33-7.44,15.47-17.34,28-34.82,30.38-8.13,1.1-16.75-.27-25-1.57-2.47-.39-4.39-4.28-6.56-6.57,2.85-.53,5.7-1.45,8.56-1.51,9-.19,18.28,1.5,26.81-.43,11.14-2.47,17.93-11.66,21.8-22.08C142.75,46,146.79,45,154,47.85c9.37,3.7,19,6.74,28.71,9.51C193,60.32,197.51,57.46,200.86,45.47ZM41.28,109.75c10.4-30.4,20.35-59.46,30.53-89.22l-32-11.15L9.31,98.64Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="milestone__container__content__card milestone__container__content__card__border">
                <div className="milestone__container__content__card__value">
                  59
                </div>
                <div className="milestone__container__content__card__type">
                  Co - Founder
                </div>
                <div className="milestone__container__content__card__heading">
                  Matched
                </div>
                <div className="milestone__container__content__card__svg">
                  <svg
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="255.85"
                    height="254.33"
                    viewBox="0 0 255.85 254.33"
                  >
                    <g id="Layer_1" data-name="Layer 1">
                      <path
                        id="Path_41"
                        data-name="Path 41"
                        d="M102.36,178.2v44.19c0,13.23,8.12,21.31,21.36,21.31h100.2c12.88,0,21.08-8.17,21.08-21V117.93c0-12.54-8.1-20.7-20.69-20.72H123.53c-13.12,0-21.13,8.06-21.16,21.18v28.47H92a4.07,4.07,0,0,1-.29-1.07c.05-10.28-.23-20.57.26-30.82.72-15,14.27-28.13,29.31-28.22q52.53-.33,105.05,0c15.51.11,29.26,14.12,29.35,29.79q.34,53.81,0,107.62c-.1,16.63-14,29.89-31.54,30q-50.39.34-100.77,0c-15.85-.09-28-10.22-31.12-25.39a34.321,34.321,0,0,1-.57-6.8c0-13.61,0-27.22-.08-40.83,0-2.35.65-3.23,3-3S99.55,178.2,102.36,178.2Z"
                      />
                      <path
                        id="Path_42"
                        data-name="Path 42"
                        d="M163.92,76.2H153.44V32.17c0-13.44-8.05-21.45-21.48-21.45H32c-13.09,0-21.21,8.09-21.21,21.12V136.62c0,12.23,8,20.51,20.28,20.53q51,.1,101.92,0c12.19,0,20.33-8.25,20.41-20.47.06-8.85,0-17.7,0-26.55V106.8c3.31,0,6.24-.08,9.16.07a2.14,2.14,0,0,1,1.45,1.51c-.18,11.68.59,23.51-1,35-2,14.1-15.46,24.3-29.72,24.33q-51.24.09-102.49,0A31.16,31.16,0,0,1,.06,136.89Q-.06,84.23.06,31.55C.11,13.7,13.75.26,32.3.15q50.1-.3,100.21,0C150.38.27,163.6,13.26,164,31c.36,14.55.09,29.12.08,43.68a12,12,0,0,1-.16,1.52Z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
