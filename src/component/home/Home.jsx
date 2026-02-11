import "react";
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
        className="w-full h-screen max-h-145 lg:max-h-162.5 md:max-h-145 flex flex-col items-center justify-center overflow-hidden px-2 sm:px-0"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative text-[#00BFFF] sm:text-xl border border-white rounded-4xl px-4 sm:px-10 py-3 font-semibold"
        >
          <h1>{t("hero.heading")}</h1>
          <motion.span
            initial={{ scale: 10, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-[10px] sm:text-xs absolute bottom-0 right-3 text-gray-200"
          >
            {t("hero.for")}
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-100">
            {t("hero.title")}
          </h1>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{
              opacity: [0, 1, 1, 1],
              x: [200, -50, -50, 0],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.2, 0.9, 1],
              delay: 2,
              ease: "easeOut",
            }}
            className="text-gray-200 sm:text-lg md:text-xl font-semibold"
          >
            <h2 className="mt-1">{t("hero.subtitle")}</h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5 }}
          className="mt-10 text-white sm:text-lg font-medium">
          <h3>{t("hero.description")}</h3>
        </motion.div>

        <div className="flex mt-10 gap-2 sm:gap-5 md:gap-7 lg:gap-10">
          <motion.a href="/contact"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 3 }}
            className="text-white bg-[#0D00FC] py-2.5 rounded-xl w-38 sm:text-xl font-semibold sm:w-50 text-center hover:bg-[#0b00dc] transition-colors"
          >
            {t("hero.button1")}
          </motion.a>

          <motion.a href="/contact"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 3 }}
            className="text-white py-2.5 rounded-xl sm:text-xl w-38 font-semibold sm:w-50 text-center border-white border hover:bg-white/15 transition-colors"
          >
            {t("hero.button2")}
          </motion.a>
        </div>
      </div>

      {/* Industry Section */}
      <Services />
      <Portfolio />
    </div>
  );
};

export default Home;
