import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import globalIcon from "../../assets/global-icon-light.png"; // Assuming you have a global icon
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsGlobalOpen(false);
  };

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-8 ">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 md:gap-6 text-white font-semibold">
            <Link to="/" className="hover:text-blue-300 transition text-nowrap">
              {t('nav.home')}
            </Link>
            <Link to="/about" className="hover:text-blue-300 transition text-nowrap">
              {t('nav.about')}
            </Link>
            <Link to="/service" className="hover:text-blue-300 transition text-nowrap">
              {t('nav.services')}
            </Link>
            <Link to="/career" className="hover:text-blue-300 transition text-nowrap">
              {t('nav.careers')}
            </Link>
            <Link to="/team" className="hover:text-blue-300 transition text-nowrap">
              {t('nav.teams')}
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white text-black rounded-full px-5 py-2 hover:bg-gray-200 transition"
            >
              {t('nav.contact')}
              <FaArrowRightFromBracket />
            </Link>
            <button onClick={() => setIsGlobalOpen(!isGlobalOpen)} className="cursor-pointer"><img className="w-7 h-7"  src={globalIcon} alt="Global Icon" /></button>

            {isGlobalOpen && (
              <div className="absolute top-18 right-0 bg-gray-600 p-4 rounded-md shadow-md">
                <button onClick={() => changeLanguage('en')} className="block hover:text-blue-300 transition text-nowrap">
                  {t('nav.languages.english')}
                </button>
                <button onClick={() => changeLanguage('ja')} className="block hover:text-blue-300 transition text-nowrap">
                  {t('nav.languages.japanese')}
                </button>
              </div>
            )

            }
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-white">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <IoMdClose size={24} />
              ) : (
                <AiOutlineMenuFold size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden  bg-primary  rounded-b-md py-4 text-white space-y-3 font-semibold">
            <div className="bg-white w-full h-0.5"></div>
            <Link
              to="/"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/service"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/career"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t('nav.careers')}
            </Link>
            <Link
              to="/team"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t('nav.teams')}
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t('nav.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
