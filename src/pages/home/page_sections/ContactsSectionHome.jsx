import React from "react";
import ArrowBlueButton from "../../../components/buttons/arrow_blue/ArrowBlueButton";
import "./contactsSectionHome.css";

import PhoneImage from "../../../assets/icons/phone.png";
import MailImage from "../../../assets/icons/mail.png";
import LocationImage from "../../../assets/icons/location.png";

const ContactsSectionHome = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__info">
        <h2 className="contacts__title">Contacts</h2>
        <div className="contacts__content">
          <div className="contacts__details">
            <h3 className="contacts__subtitle">Contact Us</h3>
            <div className="contacts__item">
              <div className="contacts__icon">
                <img src={PhoneImage} alt="Phone icon" />
              </div>
              <div className="contacts__text">+1 (654) 896-4712</div>
            </div>
            <div className="contacts__item">
              <div className="contacts__icon">
                <img src={MailImage} alt="Email icon" />
              </div>
              <div className="contacts__text">hello@riverpulseclub.com</div>
            </div>
            <div className="contacts__item">
              <div className="contacts__icon">
                <img src={LocationImage} alt="Location icon" />
              </div>
              <div className="contacts__text">Vancouver, BC, Canada</div>
            </div>
          </div>
        </div>
        <div className="contacts__form">
          <h3 className="contacts__form-title">Any questions?</h3>
          <form action="" className="contacts__form">
            <input
              type="text"
              placeholder="name"
              className="contacts__form-field"
            />
            <input
              type="email"
              placeholder="email"
              className="contacts__form-field"
            />
            <input
              type="text"
              placeholder="message"
              className="contacts__form-field"
            />
            <ArrowBlueButton text={"Send"} />
          </form>
        </div>
      </div>
      <div className="contacts__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102531.72663084962!2d-123.20630398250597!3d49.257818190030186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z0JLQsNC90LrRg9Cy0LXRgCwg0JHRgNC40YLQsNC90YHQutCw0Y8g0JrQvtC70YPQvNCx0LjRjywg0JrQsNC90LDQtNCw!5e1!3m2!1sru!2sfi!4v1759149939485!5m2!1sru!2sfi"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactsSectionHome;
