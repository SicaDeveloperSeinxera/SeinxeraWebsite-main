import aboutImage from "../../assets/home.png"; // Use your own image path
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mission from "../../assets/mission.png";
import { useTranslation } from "react-i18next";
import Maps from "../address/Maps";
import PageTransition from "../PageTransition";
import { FaGlobe, FaBuilding, FaCalendar, FaMapPin, FaPhone } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/logogoogogoo.png";
import { SiBrandfolder } from "react-icons/si";
import { MdOutlinePersonPin } from "react-icons/md";

const About = () => {
  const { t } = useTranslation();
  const points = t('about.information.info.points', { returnObjects: true });
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

        <div className="flex flex-col xl:flex-row mt-7 border-2 border-gray-200 rounded-xl overflow-clip shadow-xl w-full">

          {/**Image Section*/}
          <div className="relative bg-[url('/city-backgrounds.jpg')] w-full h-110 sm:h-150 md:h-180 xl:h-auto bg-cover bg-no-repeat xl:w-2/5 ">
            <div className="absolute bottom-4 left-4 flex items-center">
              <img
                className="w-22.5 h-22.5 shrink-0 -ml-2 lg:ml-0"
                src={logo}
                alt="Logo"
              />
              <h1 className="text-white font-bold tracking-wider sm:text-base md:text-lg flex-1 md:text-center lg:text-left lg:text-xl">
                SEINXERA
              </h1>
            </div>
          </div>

          {/**Content Section*/}
          <div className="px-5 flex-1">

            <div className="flex items-center mt-5">
              <FaGlobe className="text-blue-600 size-7" />
              <h2 className="ml-2 text-lg text-black/80">{t('about.information.title')}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border-b border-gray-200 mt-4 w-full pb-4">

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-blue-100 bg-gray-50 rounded-lg">
                <div>
                  <FaBuilding className="bg-blue-100 text-blue-600 px-2 size-10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.company.label')}
                  </h3>
                  <p className="text-sm mt-1">
                    {t("about.information.company.value")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-indigo-100 bg-gray-50 rounded-lg">
                <div>
                  <SiBrandfolder className="bg-indigo-100 text-indigo-600 px-2 size-10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.brand.label')}
                  </h3>
                  <p className="text-sm mt-1">
                    {t("about.information.brand.value")}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-green-100 bg-gray-50 rounded-lg">
                <div>
                  <FaCalendar className="bg-green-100 text-green-600 px-2 size-10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.established.label')}
                  </h3>
                  <p className="text-sm mt-1">
                    {t('about.information.established.value')}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-purple-100 bg-gray-50 rounded-lg">
                <div>
                  <MdOutlinePersonPin className="bg-purple-100 text-purple-600 px-2 size-10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.representative.label')}
                  </h3>
                  <p className="text-sm mt-1">
                    {t('about.information.representative.value')}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-red-100 bg-gray-50 rounded-lg">
                <div>
                  <FaMapPin className="bg-red-100 text-red-600 px-2 size-10 py-1 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.address.label')}
                  </h3>
                  <p className="text-sm mt-1">
                    {t('about.information.address.value')}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-cyan-100 bg-gray-50 rounded-lg">
                <div>
                  <FaPhone className="bg-cyan-100 text-cyan-600 px-2 size-10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.phone.label')}
                  </h3>
                  <p className="text-sm mt-1">
                    {t('about.information.phone.value')}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-fuchsia-100 bg-gray-50 rounded-lg">
                <div>
                  <IoMdMail className="bg-fuchsia-100 text-fuchsia-600 px-2 size-10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.email.label')}
                  </h3>
                  <a href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to= + ${t('about.information.email.value')}`} target="_blank" className="hover:underline">
                    <p className="text-sm mt-1">
                      {t('about.information.email.value')}
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex gap-3 items-center px-4 py-2 border-2 border-pink-100 bg-gray-50 rounded-lg">
                <div>
                  <FaPeopleRoof className="bg-pink-100 text-pink-600 px-2 size-10 rounded-xl" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-xs">
                    {t('about.information.employees.label')}
                  </h3>
                  <p className="text-sm mt-1">
                    {t('about.information.employees.value')}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mt-4 mb-5 text-sm items-center">
              <p>{t('about.information.info.value')} {t('about.information.info.sub')}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-x-1 gap-y-1 text-[13px] text-gray-600 w-full justify-between">
                {points.map((_, i) => (
                  <div key={i} className="bg-gray-50 px-1 py-1 rounded-md border-gray-300 border">
                    {points[i]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-4xl text-center font-bold py-8 text-gray-700 mt-8">
          {t('contact.cooperate')}
        </div>
        <Maps />
      </div>
    </PageTransition>
  );
};

export default About;
