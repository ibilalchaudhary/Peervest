import React from "react";

export default function InputFile({
  label,
  placeholder,
  required,
  description,
  options,
}) {
  return (
    <div className="start__up__container__form__input__box">
      <div className="start__up__container__form__input__box__label">
        {label}{" "}
        <div className="start__up__container__form__input__box__label__required">
          {required ? "*" : null}
        </div>
      </div>
      {description ? (
        <div className="start__up__container__form__input__box__label__explain">
          {description}
        </div>
      ) : null}
      <div className="start__up__container__form__input__box__content">
        <button className="start__up__container__form__input__box__file__btn">
          <input
            type="file"
            name="start__up__container__form__input__box__file"
            id=""
            className="start__up__container__form__input__box__file"
          />
          Upload Image
        </button>
      </div>
    </div>
  );
}
