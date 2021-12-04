import React from "react";
import Header from "../Components/Header";
import contact__background from "../Assets/contact__background.jpg";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import ContactInput from "../Components/ContactInput";

export default function ContactScreen() {
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
            style={{ height: "fit-content", marginTop: -950 }}
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
                <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact__container">
          <div className="contact__container__content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5173288665815!2d71.50270921519028!3d34.00492952766938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917aa3edd1ed3%3A0x974d74f7f91268e9!2sJ7%20Group%20Peshawar!5e0!3m2!1sen!2s!4v1635106554642!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <form action="" className="contact__container__form">
              <div className="contact__container__form__heading heading">
                <span>Get in</span> Touch
              </div>
              <div className="contact__container__form__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the.
              </div>
              <div className="contact__container__form__row">
                <ContactInput placeholder="first name" type="text" />
                <ContactInput placeholder="last name" type="text" />
              </div>
              <div className="contact__container__form__row">
                <ContactInput placeholder="email" type="email" />
                <ContactInput placeholder="DOB" type="text" />
              </div>
              <div className="contact__container__form__row">
                <ContactInput placeholder="phone" type="tel" />
                <ContactInput placeholder="gender" variant="select" />
              </div>
              <div className="contact__container__form__row">
                <ContactInput placeholder="Message" variant="textarea" />
              </div>
              <button className="contact__container__form__button">Send</button>
              <div className="contact__container__form__heading heading">
                <span>Contact</span> Us
              </div>
              <div className="contact__container__form__content">
                <div className="contact__container__form__content__col">
                  <div className="contact__container__form__content__col__heading heading">
                    Phone
                  </div>
                  <div className="contact__container__form__content__col__value">
                    335 353 343
                  </div>
                  <div className="contact__container__form__content__col__value">
                    335 353 343
                  </div>
                </div>
                <div className="contact__container__form__content__col">
                  <div className="contact__container__form__content__col__heading heading">
                    Email
                  </div>
                  <div className="contact__container__form__content__col__value">
                    hello@J7.com
                  </div>
                  <div className="contact__container__form__content__col__value">
                    hello@J7Group.com
                  </div>
                </div>
                <div className="contact__container__form__content__col">
                  <div className="contact__container__form__content__col__heading heading">
                    Socials
                  </div>
                  <div className="contact__container__form__content__col__links">
                    <a
                      href="#"
                      className="contact__container__form__content__col__link"
                    >
                      <Facebook size={18} color="currentColor" />
                    </a>
                    <a
                      href="#"
                      className="contact__container__form__content__col__link"
                    >
                      <Instagram size={18} color="currentColor" />
                    </a>
                    <a
                      href="#"
                      className="contact__container__form__content__col__link"
                    >
                      <Twitter size={18} color="currentColor" />
                    </a>
                    <a
                      href="#"
                      className="contact__container__form__content__col__link"
                    >
                      <Linkedin size={18} color="currentColor" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
