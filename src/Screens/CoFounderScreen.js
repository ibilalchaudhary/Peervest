import React from "react";
import Header from "../Components/Header";
import co__founder__background from "../Assets/co__founder__background.jpg";
import InputField from "../Components/InputField";
import InputRadio from "../Components/InputRadio";

export default function CoFounderScreen() {
  const TechnicalOptions = [
    {
      label: "Yes",
    },
    {
      label: "No",
    },
  ];
  return (
    <>
      <Header />
      <div className="homepage__main__container">
        <div
          className="homepage__main__container__jumbotron"
          style={{ maxHeight: 500, overflow: "hidden" }}
        >
          <img
            src={co__founder__background}
            alt="co__founder__background"
            className="homepage__main__container__jumbotron__img"
            style={{ height: "fit-content", marginTop: -250 }}
          />
          <div className="homepage__main__container__jumbotron__wrapper">
            <div className="homepage__main__container__jumbotron__wrapper__content">
              <div className="homepage__main__container__jumbotron__wrapper__content__sub__heading">
                Pakistan’s First Ever
              </div>
              <div className="homepage__main__container__jumbotron__wrapper__content__heading">
                Fundraising Services for
                <br />
                <span>Emerging Startups</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="start__up__container">
            <div className="start__up__container__heading">
              Co-Founder Registration Form
            </div>
            <div className="start__up__container__info">
              Connect startups with potential investors and secure initial
              meetings to pitch the venture and raise capital.
            </div>
            <form action="" className="start__up__container__form">
              <InputField
                placeholder="Your Answer"
                label="Name"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="Email"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="LinkedIn URL"
                required={true}
              />
              <InputRadio
                options={TechnicalOptions}
                description="You are a programmer, scientist or engineer who can build the product without outside assistance"
                placeholder="Are you technical?"
                label="Are you technical?"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="Most impressive accomplishment"
                required={true}
              />
              <div className="start__up__container__form__row">
                <button
                  type="submit"
                  className="start__up__container__form__button"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="start__up__container__form__button__reset"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
