import React from "react";
import Header from "../Components/Header";
import start__up__background from "../Assets/start__up__background.jpg";
import InputField from "../Components/InputField";
import InputTextArea from "../Components/InputTextArea";
import InputRadio from "../Components/InputRadio";
import InputFile from "../Components/InputFile";

export default function StartUpScreen() {
  const StartUpIndustryOptions = [
    {
      label: "E-commerce",
    },
    {
      label: "HealthTech",
    },
    {
      label: "EdTech",
    },
    {
      label: "FinTech",
    },
    {
      label: "AgriTech",
    },
    {
      label: "Food and Nutrition",
    },
    {
      label: "Hospitality",
    },
    {
      label: "Transport",
    },
    {
      label: "Logistics",
    },
    {
      label: "SaaS",
    },
    {
      label: "IT Solution",
    },
  ];
  const StartUpStageOptions = [
    {
      label: "Ideation",
    },
    {
      label: "Pre-seed",
    },
    {
      label: "Seed",
    },
    {
      label: "MVP",
    },
    {
      label: "Growth",
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
  ];
  const StartUpPlanOptions = [
    {
      label: "Immediately",
    },
    {
      label: "Within the next 6 months.",
    },
    {
      label: "Within the next 1 year.",
    },
    {
      label: "Other:",
    },
  ];
  const StartUpRaiseOptions = [
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
            src={start__up__background}
            alt="start__up__background"
            className="homepage__main__container__jumbotron__img"
            style={{ height: "fit-content", marginTop: -800 }}
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
                <span>Start-up Registration Form</span>
              </div>
              <div
                className="homepage__main__container__jumbotron__wrapper__content__sub__heading"
                style={{
                  maxWidth: "100%",
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Connect startups with potential investors and secure initial
                meetings to pitch the venture and raise capital.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="start__up__container">
            <form action="" className="start__up__container__form">
              <InputField
                placeholder="Your Answer"
                label="Start-up Name"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="Website/Page URL"
                required={true}
              />
              <InputRadio
                options={StartUpIndustryOptions}
                placeholder="Start-up Industry"
                label="Start-up Industry"
                required={true}
              />
              <InputRadio
                options={StartUpStageOptions}
                placeholder="What stage is your start-up at?"
                label="What stage is your start-up at?"
                required={true}
              />
              <InputRadio
                options={StartUpModelOptions}
                placeholder="What model does your start-up operate in?"
                label="What model does your start-up operate in?"
                required={true}
              />

              <InputTextArea
                placeholder="Your Answer"
                label="What problem is your start-up solving?"
                required={true}
              />
              <InputTextArea
                placeholder="Your Answer"
                label="Describe your start-up in 2-3 lines."
                required={true}
              />
              <InputTextArea
                placeholder="Your Answer"
                label="How is your start-up incorporating technology?"
                required={true}
              />
              <InputTextArea
                placeholder="Your Answer"
                label="Who are your local competitors?"
                required={true}
              />
              <InputTextArea
                placeholder="Your Answer"
                label="Who are your global competitors?"
                required={true}
              />
              <InputTextArea
                placeholder="Your Answer"
                label="What makes your start-up unique from other available solutions? (The UVP)"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="Does your start-up have traction? If yes, how much?"
                required={true}
              />
              <InputField
                placeholder="Your Answer"
                label="Total members of founding team:"
                required={true}
              />
              <InputTextArea
                placeholder="Your Answer"
                label="Add details of the founding team member(s), including Founder(s) and, if applicable, co-founder(s). Give their academic backgrounds and any relevant experience."
                required={true}
              />
              <InputTextArea
                placeholder="Your Answer"
                label="Please give contact details to get in touch (email/phone number)"
                required={true}
              />
              <InputRadio
                options={StartUpPlanOptions}
                placeholder="When does your start-up plan on raising funding?"
                label="When does your start-up plan on raising funding?"
                required={true}
              />
              <InputRadio
                options={StartUpRaiseOptions}
                placeholder="Has your start-up raised funding before?"
                label="Has your start-up raised funding before?"
                required={true}
              />
              <InputFile
                placeholder="12234234234234"
                label="label"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, culpa!"
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
