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
        className="w-full h-screen max-h-auto lg:max-h-162.5 md:max-h-145 flex flex-col items-center justify-center overflow-hidden px-2 md:px-0"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
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
              duration: 0.8,
              times: [0, 0.2, 0.9, 1],
              delay:1.5,
              ease: "easeOut",
            }}
            className="text-gray-200 sm:text-lg md:text-xl font-semibold"
          >
            <h2 className="mt-1">{t("hero.subtitle")}</h2>
          </motion.div>
        </motion.div>

        <div className="flex mt-10 gap-2 sm:gap-5 md:gap-7 lg:gap-10">
          <motion.a href="/contact"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, transition: {duration: 1.2, delay: 2  } }}
            whileHover={{ scale: 1.05 , transition: {duration:0.3} }}
            className="text-white bg-[#0D00FC] py-2.5 rounded-xl w-38 sm:text-xl font-semibold sm:w-50 text-center hover:bg-[#0b00dc] transition-colors"
          >

            {t("hero.button1")}
          </motion.a>

          <motion.a href="/service"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 , transition:{duration:1.2, delay:2}}}
            whileHover={{scale:1.05, transition:{duration:0.3}}}
            className="text-white py-2.5 rounded-xl sm:text-xl w-38 font-semibold sm:w-50 text-center border-white border hover:bg-white/15 transition-colors"
          >
            {t("hero.button2")}
          </motion.a>
        </div>
        <div className="mt-10 -mb-20">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 350 }}
            transition={{ duration: 1.2, delay: 3 }}
            className="text-gray-200 sm:text-lg md:text-xl font-semibold"
          >
            <h2 className="mt-30">{t("hero.heading")}</h2>
          </motion.div>
        </div>
      </section>

      <About />
      <Services />
      <Clients />
      <Portfolio />
    </div>
  );
};

export default Home;
