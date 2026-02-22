import "react";
import { motion } from "framer-motion";
import home from "../../assets/landing-page-image.jpg";
import { useTranslation } from "react-i18next";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";
import Clients from "./Clients";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* Hero Section */}
      <section
        className="w-full h-[87vh] flex flex-col items-center justify-center overflow-hidden px-2 md:px-0 relative"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 200, scale: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-100 text-center"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          animate={{
            opacity: [0, 1, 1, 1],
            x: [200, -50, -50, 0],
          }}
          transition={{
            duration: 2,
            times: [0, 0.3, 0.9, 1],
            delay: 1
          }}
          className="sm:text-lg md:text-2xl font-bold text-gray-100 text-center mt-10"
        >
          {t("hero.subtitle")}
        </motion.h2>

        <div className="flex mt-10 gap-2 sm:gap-5 md:gap-7 lg:gap-10">
          <motion.a
            href="/contact"
            initial={{ opacity: 0, x: -200 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 2 },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-white bg-[#0D00FC] py-2.5 rounded-xl w-38 sm:text-xl font-semibold sm:w-50 text-center hover:bg-[#0b00dc] transition-colors"
          >
            {t("hero.button1")}
          </motion.a>

          <motion.a
            href="/service"
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, delay: 2 },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="text-white py-2.5 rounded-xl sm:text-xl w-38 font-semibold sm:w-50 text-center border-white border hover:bg-white/15 transition-colors"
          >
            {t("hero.button2")}
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }} // smaller offset for responsiveness
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute text-gray-200 text-xs max-w-60 sm:text-sm sm:max-w-80 md:text-base md:max-w-100 lg:text-lg lg:max-w-300 font-semibold bottom-10 lg:bottom-5 px-1 right-0 sm:pr-4"
        >
          {t("hero.heading")}
        </motion.div>
      </section>

      <About />
      <Services />
      <Clients />
      <Portfolio />
    </div>
  );
};

export default Home;
