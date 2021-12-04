import React, { useState } from "react";
import Header from "../Components/Header";
import co__founder__background from "../Assets/co__founder__background.jpg";
import faq1 from "../Assets/faq1.svg";
import faq2 from "../Assets/faq1.svg";

function FaqEntry() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container__selection__info__right__faq__question">
      <button
        className="container__selection__info__right__faq__question__title "
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        <div className="container__selection__info__right__faq__question__title__heading">
          My vision is to imtroduce crowdfunding as a safe and viable
          fundeaising option
        </div>
        <div className="container__selection__info__right__faq__question__icon">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="3"
              viewBox="0 0 25 3"
            >
              <line
                id="Line_29"
                data-name="Line 29"
                x2="22"
                transform="translate(1.5 1.5)"
                fill="none"
                stroke="#040505"
                stroke-linecap="round"
                stroke-width="3"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 25 21"
            >
              <g
                id="Group_562"
                data-name="Group 562"
                transform="translate(-1460.5 -1362)"
              >
                <line
                  id="Line_25"
                  data-name="Line 25"
                  x2="22"
                  transform="translate(1462 1372.5)"
                  fill="none"
                  stroke="#040505"
                  stroke-linecap="round"
                  stroke-width="3"
                />
                <line
                  id="Line_34"
                  data-name="Line 34"
                  y2="18"
                  transform="translate(1473 1363.5)"
                  fill="none"
                  stroke="#040505"
                  stroke-linecap="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          )}
        </div>
      </button>
      {isOpen ? (
        <div className="container__selection__info__right__faq__question__info">
          My vision is to imtroduce crowdfunding as a safe and viable
          fundeaising option for Pakistan's start-ups. Having closely worked
          with financially constrained startups and the investor fraternity, I
          found the equation off balanced with a large influx of neebackgrounthe
          investment
        </div>
      ) : null}
    </div>
  );
}

export default function FaqScreen() {
  return (
    <div>
      <Header />
      <div className="homepage__main__container">
        <div className="container" style={{ paddingTop: 80 }}>
          <div className="services__container">
            <div className="services__container__heading">FAQ</div>
            <div className="services__container__info">
              Create a concise and compelling investment pitch deck that
              contains information required by investors.
            </div>

            <div className="container__selection">
              <div className="container__selection__buttons">
                <div className="container__selection__button">
                  <input
                    type="radio"
                    defaultChecked
                    name="container__selection__button__input"
                    className="container__selection__button__input"
                  />
                  <div className="container__selection__button__content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="104.562"
                      height="104.561"
                      viewBox="0 0 104.562 104.561"
                    >
                      <g
                        id="Group_50"
                        data-name="Group 50"
                        transform="translate(-725.219 -1162.703)"
                      >
                        <g
                          id="Group_49"
                          data-name="Group 49"
                          transform="translate(726.719 1164.203)"
                        >
                          <path
                            id="Path_46"
                            data-name="Path 46"
                            d="M849.041,292.94A27.448,27.448,0,0,0,830.729,274.1a26.7,26.7,0,0,0-5.228-.86h-5.35c-1.125.259-2.294.117-3.421.389a25.914,25.914,0,0,0-14.525,9.061,5.827,5.827,0,0,1-5.245,2.367c-15.683-.086-31.366-.046-47.049-.045-1.782,0-1.782.006-1.782,1.8q0,33.529-.019,67.057a3.164,3.164,0,0,0,.991,2.451q8.782,8.726,17.51,17.509a3.056,3.056,0,0,0,2.359.975q24.415-.036,48.831-.017c2.267,0,2.268,0,2.268-2.315q0-21.94,0-43.879c0-1.363.007-1.381,1.361-1.339a26.281,26.281,0,0,0,8.707-1.056,27.349,27.349,0,0,0,18.507-17.827,24,24,0,0,0,1.027-5.606v-5.349A37.265,37.265,0,0,0,849.041,292.94Zm-82.784,71.508-7.782-7.8h1.894c1.746,0,3.49.006,5.235,0,.391,0,.674-.023.667.541C766.239,359.552,766.258,361.914,766.258,364.448Zm46.78,4.3q-20.011-.021-40.023.007c-.741,0-.83-.249-.826-.894.025-5.415,0-10.831.031-16.247,0-.71-.125-.935-.9-.929-5.415.04-10.832.007-16.247.039-.717,0-.926-.137-.925-.9q.037-28.828.01-57.658c0-.6,0-.924.8-.922q20.953.043,41.906.022c.163,0,.326.018.58.033a45.6,45.6,0,0,0-1.128,4.606,23.81,23.81,0,0,0-.237,6.311c.085.826-.134.954-.892.953-11.294-.023-22.587-.006-33.881-.037-.826,0-1.058.189-1.013,1.016.077,1.383.059,2.775,0,4.16-.026.659.18.808.816.8,4.689-.027,9.378-.014,14.068-.014,7.133,0,14.266.012,21.4-.018a1.1,1.1,0,0,1,1.246.867,26.907,26.907,0,0,0,2.624,5.1h-32.5c-2.311,0-4.623.017-6.934-.012-.544-.007-.735.12-.72.7.041,1.551.031,3.1,0,4.656-.008.466.112.638.6.614.79-.04,1.584-.011,2.377-.011q20.854,0,41.708-.011a2.46,2.46,0,0,1,1.621.53,24.516,24.516,0,0,0,6.526,3.633.877.877,0,0,1,.693.976q-.032,20.952,0,41.905C813.829,368.684,813.6,368.75,813.037,368.75Zm10.41-47.813a20.755,20.755,0,0,1-21.474-19.968,21.2,21.2,0,0,1,20.281-21.74,20.776,20.776,0,0,1,21.429,19.92A21.235,21.235,0,0,1,823.447,320.937Z"
                            transform="translate(-748.111 -273.236)"
                            fill="currentColor"
                            stroke="transparent"
                            stroke-width="3"
                          />
                        </g>
                        <path
                          id="Path_108"
                          data-name="Path 108"
                          d="M786.631,338.138c7.627,0,15.254.012,22.881-.018.736,0,.949.162.915.911-.066,1.482-.038,2.971-.008,4.456.009.478-.132.627-.609.606-.823-.036-1.65-.01-2.475-.01q-21.744,0-43.485.021c-.82,0-1.064-.18-1.016-1.013a37.311,37.311,0,0,0,0-4.059c-.037-.747.176-.915.914-.912C771.376,338.15,779,338.138,786.631,338.138Z"
                          transform="translate(-23.935 879.761)"
                          fill="currentColor"
                          stroke="transparent"
                          stroke-width="3"
                        />
                        <path
                          id="Path_109"
                          data-name="Path 109"
                          d="M799.373,352.508c4.623,0,9.245.019,13.867-.019.74-.007.948.169.912.913-.067,1.384-.068,2.775,0,4.159.037.75-.18.913-.915.91-7.2-.031-14.4-.019-21.593-.019-2.179,0-4.358-.019-6.536.013-.561.008-.723-.148-.709-.709.039-1.484.049-2.972,0-4.456-.023-.654.171-.812.812-.807C789.93,352.521,794.652,352.508,799.373,352.508Z"
                          transform="translate(-27.659 877.279)"
                          fill="currentColor"
                          stroke="transparent"
                          stroke-width="3"
                        />
                        <path
                          id="Path_110"
                          data-name="Path 110"
                          d="M799.271,366.879c4.655,0,9.311.018,13.965-.019.735-.006.953.16.916.91-.068,1.383-.067,2.775,0,4.158.036.745-.171.917-.912.914-6.7-.033-13.4-.019-20.106-.019-2.641,0-5.283-.022-7.924.015-.642.009-.837-.153-.813-.807.051-1.45.05-2.905,0-4.356-.022-.649.163-.815.81-.811C789.895,366.892,794.583,366.879,799.271,366.879Z"
                          transform="translate(-27.659 874.797)"
                          fill="currentColor"
                          stroke="transparent"
                          stroke-width="3"
                        />
                        <path
                          id="Path_107"
                          data-name="Path 107"
                          d="M849.376,300.3a5.712,5.712,0,0,1-.37.453q-8.081,8.087-16.159,16.178c-.37.372-.551.258-.855-.048q-5.062-5.087-10.151-10.147c-.355-.352-.388-.572-.009-.935,1.119-1.073,2.22-2.167,3.288-3.29.394-.414.621-.383,1.006.01,1.824,1.862,3.719,3.656,5.5,5.557.685.731,1.018.61,1.656-.039,3.723-3.788,7.508-7.516,11.238-11.3.548-.555.841-.574,1.367,0,.977,1.071,2.04,2.065,3.065,3.093C849.091,299.976,849.219,300.127,849.376,300.3Z"
                          transform="translate(-34.078 886.981)"
                          fill="currentColor"
                          stroke="transparent"
                          stroke-width="3"
                        />
                      </g>
                    </svg>
                    <span>Faqs for Startups</span>
                  </div>
                </div>
                <div className="container__selection__button">
                  <input
                    type="radio"
                    name="container__selection__button__input"
                    className="container__selection__button__input"
                  />
                  <div className="container__selection__button__content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="101.599"
                      height="101.561"
                      viewBox="0 0 101.599 101.561"
                    >
                      <g
                        id="Group_51"
                        data-name="Group 51"
                        transform="translate(-692.965 -497.24)"
                      >
                        <path
                          id="Path_111"
                          data-name="Path 111"
                          d="M708.713,514.748c-4.754-1.489-7.548-5.451-6.921-9.934a8.8,8.8,0,0,1,17.441.09c.549,4.507-2.271,8.456-6.931,9.843q2.448,0,4.9,0a10.315,10.315,0,0,1,10.66,8.828c.476,2.727.1,5.527.153,8.293.013.651-.526.37-.814.373-2.551.022-5.1.013-7.654.013-8.493,0-16.986-.01-25.48.017-.8,0-1.14-.127-1.084-1.036.165-2.686-.259-5.4.237-8.068a10.411,10.411,0,0,1,10.142-8.418C705.142,514.74,706.927,514.748,708.713,514.748Z"
                          transform="translate(0 0)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_112"
                          data-name="Path 112"
                          d="M807.278,609.728c1.821,0,3.643-.012,5.465,0A10.466,10.466,0,0,1,823,619.973c.017,2.15-.013,4.3.015,6.451.007.558-.047.829-.735.828q-16.786-.035-33.572-.02c-.333,0-.756.148-.729-.481.125-2.871-.293-5.765.228-8.615a10.4,10.4,0,0,1,10.041-8.405c1.821-.013,3.643,0,5.495-.065a9.238,9.238,0,0,1-5.678-4.035,8.614,8.614,0,0,1-1.082-6.809,8.785,8.785,0,0,1,17.247,1.184C814.655,604.564,811.956,608.294,807.278,609.728Z"
                          transform="translate(-28.451 -28.45)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_113"
                          data-name="Path 113"
                          d="M751.595,606.989c-11.873,0-23.4-.01-34.921.02-.9,0-1.205-.134-1.2-1.147q.061-22.482,0-44.963c0-1.045.319-1.229,1.259-1.2,2.269.066,2.27.021,2.27,2.24,0,13.457.014,26.913-.027,40.369,0,1.042.315,1.206,1.257,1.2,9.992-.034,19.985-.021,29.978-.021h1.332c-1.259-1.25-2.336-2.354-3.457-3.412-.448-.423-.625-.715-.041-1.174.706-.554,1.217-1.739,1.975-1.711.652.023,1.278,1.07,1.9,1.684,1.914,1.9,3.807,3.826,5.737,5.713.47.459.611.723.048,1.268-2.409,2.334-4.771,4.719-7.126,7.107-.4.408-.657.56-1.1.042-.588-.692-1.74-1.3-1.755-1.971-.014-.646,1.093-1.328,1.73-1.972S750.738,607.814,751.595,606.989Z"
                          transform="translate(-6.742 -18.709)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_114"
                          data-name="Path 114"
                          d="M748.008,567.75a5.668,5.668,0,0,1,3.62-5.16,5.481,5.481,0,0,1,6.164,1.483c.611.625,1.245,1.233,1.8,1.9.472.571.808.684,1.32.032a23.639,23.639,0,0,1,1.721-1.83c2.345-2.412,5.594-2.657,7.9-.6a5.931,5.931,0,0,1,.581,8.339c-1.645,1.9-3.454,3.649-5.2,5.463-1.715,1.787-3.447,3.558-5.143,5.363-.383.408-.586.467-1.008.022-3.366-3.534-6.772-7.031-10.141-10.563A5.873,5.873,0,0,1,748.008,567.75Z"
                          transform="translate(-16.489 -19.456)"
                          fill="currentColor"
                        />
                        <path
                          id="Path_115"
                          data-name="Path 115"
                          d="M761.184,528.026c1.346,1.31,2.443,2.421,3.592,3.475.469.43.459.695-.01,1.1-.686.586-1.277,1.651-1.988,1.722-.566.057-1.262-1.055-1.88-1.669-1.94-1.928-3.851-3.885-5.816-5.786-.5-.483-.463-.724.013-1.189q3.6-3.519,7.116-7.115c.473-.483.742-.511,1.18.006.562.665,1.622,1.218,1.7,1.9.078.716-1.05,1.265-1.649,1.886-.65.674-1.357,1.294-2.283,2.167h1.472c11.194,0,22.389.013,33.584-.024.931,0,1.108.245,1.105,1.132q-.048,17.283,0,34.566c0,.914-.216,1.143-1.123,1.117-2.4-.068-2.4-.021-2.4-2.439,0-9.917-.014-19.835.023-29.752,0-.905-.2-1.125-1.117-1.121-10.064.037-20.128.023-30.192.023Z"
                          transform="translate(-18.501 -6.276)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                    <span>Faqs for Investor</span>
                  </div>
                </div>
              </div>
              <div className="container__selection__info">
                <img
                  src={faq1}
                  alt="selection img"
                  className="container__selection__info__left"
                />
                <div className="container__selection__info__right">
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                  <FaqEntry />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
