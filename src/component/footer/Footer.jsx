import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import PageTransition from "../PageTransition";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Function to handle navigation with scroll target
  const handleServiceNavigation = (sectionId) => {
    // Check if we're already on the services page
    if (window.location.pathname === "/service") {
      // If on services page, scroll directly to center of viewport
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "center"  // Changed from "start" to "center"
        });
      }
    } else {
      // If on another page, navigate to services with scroll state
      navigate("/service", {
        state: { scrollTo: sectionId }
      });
    }
  };

  return (
<PageTransition>
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 px-8 ">
          <div className="lg:col-span-1 space-y-8 p-1">
            {/* Heading */}
            <h2 className="text-2xl font-light leading-tight max-w-xs">
              {t("footer.ctaTitle")}
            </h2>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-colors"
            >
              <span>
                {t("footer.ctaButton")}
              </span>
              <HiArrowRight className="w-5 h-5" />
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/seinxera/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seinxera on LinkedIn"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <Link
                to="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
              <a
                href="https://www.instagram.com/seinxera/profilecard/?igsh=MXNrc2ZuM3RqMnVnMA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seinxera on Instagram"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@seinxera?_t=ZS-8ymsH3wH58B&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seinxera on TikTok"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>

              <a
                href="https://youtu.be/HDgblQA0lWw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seinxera on Youtube"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4 p-1">
            <h3 className="text-lg font-semibold text-white">
              {t("footer.sections.navigation")}
            </h3>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("nav.home")}
              </Link>

              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/service"
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/career"
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("nav.careers")}
              </Link>
              <Link
                to="/team"
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("nav.teams")}
              </Link>

              <Link
                to="/contact"
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* What We Do Column - Now using Links instead of Buttons */}
          <div className="space-y-4 p-1">
            <h3 className="text-lg font-semibold text-white">
              {t("footer.sections.whatWeDo")}
            </h3>
            <nav className="space-y-3">
              {/* Changed from button to Link */}
              <Link
                to="/service"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceNavigation("webDevelopment");
                }}
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.whatWeDo.webDevelopment")}
              </Link>

              <Link
                to="/service"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceNavigation("ai-ml"); // Changed to valid ID
                }}
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.whatWeDo.AI/ML")}
              </Link>

              <Link
                to="/service"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceNavigation("desktopDevelopment");
                }}
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.whatWeDo.desktopDevelopment")}
              </Link>

              <Link
                to="/service"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceNavigation("mobileApplication");
                }}
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.whatWeDo.mobileApplication")}
              </Link>

              <Link
                to="/service"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceNavigation("cad");
                }}
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.whatWeDo.cad")}
              </Link>

              <Link
                to="/service"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceNavigation("data");
                }}
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.whatWeDo.data")}
              </Link>

              <Link
                to="/service"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceNavigation("ocr");
                }}
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.whatWeDo.ocr")}
              </Link>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="space-y-4 p-1">
            <h3 className="text-lg font-semibold text-white">
              {t("footer.sections.legal")}
            </h3>
            <nav className="space-y-3">
              <Link
                to="/privacy"
                className="block text-gray-300 hover:text-white transition-colors "
              >
                {t("footer.legal.privacy")}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
    </PageTransition>
  );
}