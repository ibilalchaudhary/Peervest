import React from "react";
import Header from "../Components/Header";
import co__founder__background from "../Assets/co__founder__background.jpg";
import InputField from "../Components/InputField";
import InputRadio from "../Components/InputRadio";
import InputCheckBox from "../Components/InputCheckBox";

export default function InvestorScreen() {
  const InvestorTypeOptions = [
    {
      label: "Venture Capitalist",
    },
    {
      label: "Angel Investor",
    },
    {
      label: "New Entrant",
    },
  ];
  const StartUpStageOptions = [
    {
      label: "First Check",
    },
    {
      label: "Pre-seed",
    },
    {
      label: "Seed",
    },
    {
      label: "Growth",
    },
  ];
  const TicketsSizeOptions = [
    {
      label: "<$100,000",
    },
    {
      label: "$100,000-$500,000",
    },
    {
      label: "$500,000-$900,000",
    },
    {
      label: "$1 mn - $2 mn",
    },
    {
      label: ">$ 2 mn",
    },
  ];
  const IndustryInterestedOptions = [
    {
      label: "Fintech",
    },
    {
      label: "Edtech",
    },
    {
      label: "Logistic",
    },
    {
      label: "E-commerce",
    },
    {
      label: "Agritech",
    },
    {
      label: "IT Solution",
    },
    {
      label: "Entertainment",
    },
    {
      label: "Other:",
    },
  ];
  const StartUpModelOptions = [
    {
      label: "B2B",
    },
    {
      label: "B2C",
    },
    {
      label: "C2B",
    },
    {
      label: "C2C",
    },
    {
      label: "Other:",
    },
  ];
  const ExitPlanOptions = [
    {
      label: "< 5 years",
    },
    {
      label: "5 - 10 years",
    },
    {
      label: "> 10 years",
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
            style={{ height: "fit-content", marginTop: -500 }}
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
                <span>Investor Registration Form</span>
              </div>
              <div
                className="homepage__main__container__jumbotron__wrapper__content__sub__heading"
                style={{
                  maxWidth: "100%",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Join the Peervest Investor circle to start funding
                investor-ready startups of your preference
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="start__up__container">
            <form action="" className="start__up__container__form">
              <InputField
                placeholder="Your Answer"
                label="Investor Name"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="Email Address"
                required={true}
              />
              <InputCheckBox
                options={InvestorTypeOptions}
                placeholder="Investor Type"
                label="Investor Type"
                required={true}
              />
              <InputCheckBox
                options={StartUpStageOptions}
                placeholder="Startup Stage interested in to invest"
                label="Startup Stage interested in to invest"
                required={true}
              />
              <InputRadio
                options={TicketsSizeOptions}
                placeholder="Ticket Size to Invest"
                label="Ticket Size to Invest"
                required={true}
              />
              <InputCheckBox
                options={IndustryInterestedOptions}
                placeholder="Industry Interested In"
                label="Industry Interested In"
                required={true}
              />
              <InputCheckBox
                options={StartUpModelOptions}
                placeholder="Business Model Interest In"
                label="Business Model Interest In"
                required={true}
              />
              <InputCheckBox
                options={ExitPlanOptions}
                placeholder="Exit Plan"
                label="Exit Plan"
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
