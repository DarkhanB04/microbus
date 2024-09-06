import React, { useState } from "react";
import { motion } from "framer-motion";
import "./DriverVacancyForm.css";
import driver from "../../assets/driver.svg";
import PhoneInput from "react-phone-input-2";
import { containerVariants, textVariants } from "../../framerVariants";
import { useTranslation } from "react-i18next";
import vcel from "../../assets/vacancy-el.svg";

const DriverVacancyForm = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      ownBus: formData.get("ownBus"),
      drivingCategory: formData.get("drivingCategory"),
      experience: formData.get("experience"),
    };

    fetch("http://localhost:3000/send-driver-vacancy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmissionStatus("success");
        } else {
          setSubmissionStatus("error");
        }
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmissionStatus("error");
        setIsSubmitted(true);
      });
  };

  return (
    <div className="vacancy">
      <motion.div
        className="vacancy-form-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {isSubmitted ? (
          submissionStatus === "success" ? (
            <div className="success-message">
              <h2>{t("popup.successTitle")}</h2>
              <p>{t("popup.successMessage")}</p>
            </div>
          ) : (
            <div className="error-message">
              <h2>{t("popup.errorTitle")}</h2>
              <p>{t("popup.errorMessage")}</p>
            </div>
          )
        ) : (
          <>
            <motion.div
              className="vacancy-title"
              custom={1}
              variants={textVariants}
            >
              <img src={driver} alt="" />
              <h1 className="vacancy-form-title">{t("driverVacancy.title")}</h1>
            </motion.div>
            <motion.p
              className="vacancy-form-subtitle"
              custom={2}
              variants={textVariants}
            >
              {t("driverVacancy.subtitle")}
            </motion.p>
            <motion.form
              className="vacancy-form"
              custom={3}
              variants={textVariants}
              onSubmit={handleSubmit}
            >
              <motion.div
                className="vacancy-form-group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="name">{t("driverVacancy.name")}:</label>
                <input type="text" id="name" name="name" />
              </motion.div>

              <motion.div
                className="vacancy-form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="number">{t("driverVacancy.phone")} *</label>
                <PhoneInput
                  country={"kz"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  onlyCountries={["kz"]}
                  placeholder={"+7" ? " (___) ___ __ __" : "+7 (___) ___ __ __"}
                  className="phone-input"
                />
              </motion.div>

              <motion.div
                className="vacancy-form-group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="ownBus">{t("driverVacancy.ownBus")}</label>
                <select id="ownBus" name="ownBus">
                  <option value="yes">{t("driverVacancy.yes")}</option>
                  <option value="no">{t("driverVacancy.no")}</option>
                </select>
              </motion.div>

              <motion.div className="vacancy-form-group">
                <label htmlFor="drivingCategory">
                  {t("driverVacancy.drivingCategory")}
                </label>
                <select id="drivingCategory" name="drivingCategory">
                  <option value="D1">D1</option>
                  <option value="D1E">D1E</option>
                  <option value="D">D</option>
                  <option value="DE">DE</option>
                  <option value="Tm">Tm</option>
                  <option value="Tb">Tb</option>
                </select>
              </motion.div>

              <motion.div
                className="vacancy-form-group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="experience">
                  {t("driverVacancy.experience")}
                </label>
                <input type="number" id="experience" name="experience" />
              </motion.div>

              <motion.button
                type="submit"
                className="driver-submit-button"
                custom={4}
                variants={textVariants}
              >
                {t("driverVacancy.submit")}
              </motion.button>
            </motion.form>
          </>
        )}
      </motion.div>
      <motion.img
        src={vcel}
        alt="Background Element Vacancy"
        className="vc-el"
        initial="hidden"
        custom={1}
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      />
      <motion.img
        src={vcel}
        alt="Background Element Vacancy"
        className="vc-el2"
        initial="hidden"
        custom={2}
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      />
    </div>
  );
};

export default DriverVacancyForm;
