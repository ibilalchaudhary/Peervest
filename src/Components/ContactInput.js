import React from "react";

export default function ContactInput({ placeholder, type, variant }) {
  if (variant === "select") {
    return (
      <div className="contact__container__form__input">
        <select
          type={type}
          placeholder={placeholder}
          id={placeholder}
          name={placeholder}
          className="contact__container__form__input__field"
        >
          <option value="">Male</option>
          <option value="">Female</option>
        </select>
        <label
          htmlFor={placeholder}
          className="contact__container__form__input__label heading"
        >
          {placeholder}
        </label>
      </div>
    );
  } else if (variant === "textarea") {
    return (
      <div
        className="contact__container__form__input"
        style={{ marginRight: "0em" }}
      >
        <textarea
          type={type}
          placeholder={placeholder}
          id={placeholder}
          name={placeholder}
          rows={5}
          className="contact__container__form__input__field"
        />
        <label
          htmlFor={placeholder}
          className="contact__container__form__input__label heading"
        >
          {placeholder}
        </label>
      </div>
    );
  } else {
    return (
      <div className="contact__container__form__input">
        <input
          type={type}
          placeholder={placeholder}
          id={placeholder}
          name={placeholder}
          className="contact__container__form__input__field"
        />
        <label
          htmlFor={placeholder}
          className="contact__container__form__input__label heading"
        >
          {placeholder}
        </label>
      </div>
    );
  }
}
