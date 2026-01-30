import { useState, useRef, useEffect } from "react";
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
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsGlobalOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (isGlobalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGlobalOpen]);

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-full mx-auto px-8 ">
        <div className="flex justify-between items-center py-0">
          {/* Logo */}
          <div className="shrink-0 ">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <div className="flex gap-8 md:gap-6">

            {/* Desktop Links */}
            <div className="hidden md:flex items-center justify-center gap-8 md:gap-4 text-white text-sm font-semibold">
              <Link to="/" className="hover:text-blue-300 transition text-nowrap">
                {t("nav.home")}
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-300 transition text-nowrap"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/service"
                className="hover:text-blue-300 transition text-nowrap"
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/career"
                className="hover:text-blue-300 transition text-nowrap"
              >
                {t("nav.careers")}
              </Link>
              <Link
                to="/team"
                className="hover:text-blue-300 transition text-nowrap"
              >
                {t("nav.teams")}
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-white text-black text-md rounded-full px-1 py-2 hover:bg-gray-200 transition"
              >
                {t("nav.contact")}
                <FaArrowRightFromBracket />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden text-white gap-3">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <IoMdClose size={24} />
                ) : (
                  <AiOutlineMenuFold size={28} />
                )}
              </button>
            </div>
            <div ref={dropdownRef}>
              <button
                onClick={() => setIsGlobalOpen(!isGlobalOpen)}
                className="cursor-pointer"
              >
                <img className="w-7 h-7 mt-1" src={globalIcon} alt="Global Icon" />
              </button>

              {isGlobalOpen && (
                <div className="absolute top-18 right-0 bg-gray-600 p-4 rounded-md shadow-md z-50 text-white font-bold">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block hover:text-blue-300 transition text-nowrap"
                  >
                    {t("nav.languages.english")}
                  </button>
                  <button
                    onClick={() => changeLanguage("ja")}
                    className="block hover:text-blue-300 mt-2 transition text-nowrap"
                  >
                    {t("nav.languages.japanese")}
                  </button>
                </div>
              )}
            </div>
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
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/service"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t("nav.services")}
            </Link>
            <Link
              to="/career"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t("nav.careers")}
            </Link>
            <Link
              to="/team"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t("nav.teams")}
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block hover:text-blue-300"
            >
              {t("nav.contact")}
            </Link>
          </div>
        )}
      </div>
    </nav >
  );
};

export default NavigationBar;
