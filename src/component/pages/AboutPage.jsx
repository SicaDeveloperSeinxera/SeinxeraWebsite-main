import aboutImage from "../../assets/home.png"; // Use your own image path
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mission from "../../assets/mission.png";
import { useTranslation } from "react-i18next";
import Maps from "../address/Maps";
import PageTransition from "../PageTransition";

const About = () => {
  const { t } = useTranslation();
  return (
    <PageTransition>
    <div className="bg-white text-gray-800 px-6 md:px-20 py-12">
      {/* Title */}
      <motion.div  
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 pt-4 pb-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
          {t('about.title')}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {t('about.tagline')}
        </p>
      </motion.div>

      {/* Image + Text Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl font-bold mb-6 text-primary">{t('about.whoWeAre')}</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {t('about.p1')}
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {t('about.p2')}
          </p>
          <Link
            to="/contact"
            className="mt-4 bg-primary text-white  px-6 py-2 rounded-lg hover:bg-primary/80 transition"
          >
            {t('about.contactCta')}
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div className=""
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Mission */}

      <div className="lg:flex l:items-center mt-10 py-12 gap-4">
        <div>
          <img src={mission} alt="mission" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{t('about.missionTitle')}</h2>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {t('about.missionBody')}
          </p>
        </div>
      </div>
      <div className="text-4xl text-center font-bold py-8 text-gray-700">
        {t('contact.cooperate')}
      </div>
      <Maps />
    </div>
    </PageTransition>
  );
};

export default About;
