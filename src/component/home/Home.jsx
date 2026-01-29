import "react";
import { Link } from "react-router-dom";
import IndustryData from "./IndustryData";
import { motion } from "framer-motion";
import home from "../../assets/landing-page-image.jpg";
import { useTranslation } from "react-i18next";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div> 
      {/* Hero Section */}
      <div
        className="relative w-full h-screen max-h-[580px] lg:max-h-[650px] md:max-h-[580px] flex flex-col md:flex-row items-center justify-between lg:px-12 md:px-12 py-16 overflow-hidden "
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 z-10 self-start mx-auto lg:px-8 sm:ml-10 md:ml-0"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-100">
            {t("hero.title")}
          </h1>
          <span className="text-gray-300 pt-8">{t("hero.subtitle")}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 z-10 self-end sm:ml-10 md:ml-0 flex justify-end items-center"
        >
          <Link to="/contact" className="btn">
            <button className="rounded-full text-1xl font-semibold text-gray-800 px-6 mx-4 py-4 bg-gray-200 self-end cursor-pointer">
              {t("hero.button")}
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Industry Section */}
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
