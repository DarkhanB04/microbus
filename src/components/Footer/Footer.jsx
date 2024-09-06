import React from "react";
import "./Footer.css";
import logo_white from "../../assets/logo_white.svg";
import arrow from "../../assets/arrow.svg";
import whatsapp from "../../assets/whatsapp.png";
import telegram from "../../assets/telegram.png";
import instagram from "../../assets/instagram.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img
            src={logo_white}
            alt={t("footer.logoAlt")}
            className="footer-logo"
          />
        </div>

        {/* Address and Contact Information */}
        <div className="address-section">
          <div className="address">
            <a
              href="https://go.2gis.com/1k6cl7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{t("footer.addressLine1")}</p>
              <p>{t("footer.addressLine2")}</p>
            </a>
          </div>
          <div className="address-contacts">
            <a href="tel:+77066660201">{t("footer.phone")}</a>
            <a href="mailto:microbus.kz@gmail.com">microbus.kz@gmail.com</a>
          </div>
        </div>

        {/* Social Media & Legal Documents */}
        <div className="middle-one">
          <div className="social-section">
            <a
              href="https://wa.me/message/JF2BEDNQGTPAA1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="whatsapp-btn">
                <img src={whatsapp} alt="WhatsApp" className="whatsapp-img" />
                {t("footer.whatsapp")}
              </button>
            </a>
            <a
              href="https://t.me/microbusastana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="telegram">
                <img src={telegram} alt="Telegram" className="telegram-img" />
                <p>{t("footer.telegram")}</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/microbus_astana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="instagram">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="instagram-img"
                />
                <p>{t("footer.instagram")}</p>
              </div>
            </a>
          </div>
          <div className="docs">
            <a href="/privacy-policy">{t("footer.privacyPolicy")}</a>
          </div>
        </div>

        {/* Scroll to Top & Bottom Section */}
        <div className="last-one">
          <div className="scroll-up" onClick={scrollToTop}>
            <img
              src={arrow}
              alt={t("footer.scrollAlt")}
              className="scroll-button"
            />
          </div>
          <div className="bottom-section">
            <p>{t("footer.copyright")}</p>
            <p>{t("footer.rightsReserved")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
