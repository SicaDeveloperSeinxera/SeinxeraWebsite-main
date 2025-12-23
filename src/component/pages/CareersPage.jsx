import "react";
import PageTransition from "../PageTransition";
import { IoIosArrowForward } from "react-icons/io";
import career from "../../assets/career-background.jpg";
import slide1 from "../../assets/internship-image.jpg";
import slide2 from "../../assets/pexels-anastasia-shuraeva-7647381.jpg";
import img2 from "../../assets/img2.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CareerSlide = ({ image, title, text }) => (
  <div className="flex flex-col lg:flex-row items-center w-full gap-6">
    <img
      src={image}
      alt={title}
      className="w-full lg:w-1/2 object-cover rounded-md"
    />
    <div className="w-full lg:w-1/2 p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
        {title}
      </h2>
      <p className="mt-4 text-gray-700 text-base leading-relaxed">{text}</p>
    </div>
  </div>
);

const Careers = () => {
  const { t } = useTranslation();

  return (
      <div className="w-full overflow-hidden">
        {/* Hero Image */}
        <div>
          <img
            className="w-full object-cover max-h-[500px]"
            src={career}
            alt="career"
          />
        </div>

        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between my-16 mx-4 lg:mx-20 gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t("careers.intro.title")}
            </h1>
            <button className="bg-blue-900 rounded-md px-6 py-2 text-white hover:bg-blue-800 mt-4">
              {t("careers.intro.cta")}
            </button>
          </div>
        </div>

        {/* Slides stacked vertically */}
        <div className="relative mx-4 lg:mx-20 mb-24 space-y-12">
          <div className="flex flex-col lg:flex-row items-center w-full gap-6">
            <img
              src={slide1}
              alt={t("careers.slides.first.title")}
              className="w-full lg:w-1/2 object-cover rounded-md h-96"
            />
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
                {t("careers.slides.first.title")}
              </h2>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {t("careers.slides.first.text")}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full gap-6 relative h-[500px]">
            <div className="w-full lg:w-2/3 p-4 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
                {t("careers.slides.second.title")}
              </h2>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {t("careers.slides.second.text")}
              </p>
            </div>
            <img
              src={slide2}
              alt={t("careers.slides.second.title")}
              className=" right-0 lg:w-1/2 rounded-md h-[500px] w-[500px] object-cover"
            />
          </div>
        </div>

        {/* Full Image */}
        <div
          className={`w-full bg-cover bg-no-repeat bg-center h-[500px] relative`}
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="w-full px-4">
            <div className="absolute bottom-[150px] lg:absolute lg:bottom-[150px] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center border border-gray-200">
              <h3 className="text-orange-600 text-sm font-semibold uppercase">
                {t("careers.join.ribbon")}
              </h3>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                {t("careers.join.title")}
              </h1>
              <p className="text-gray-600 mt-4">{t("careers.join.text")}</p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=03seinxera@gmail.com">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    {t("careers.join.submitCta")}{" "}
                    <IoIosArrowForward className="inline ml-1 text-lg" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Careers;
