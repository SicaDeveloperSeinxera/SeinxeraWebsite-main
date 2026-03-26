import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import PageTransition from "../PageTransition";
import ai from '../../assets/services/Artificial intelligence-rafiki.svg';
import website from '../../assets/services/website.png';
import web from '../../assets/services/web.svg';
import mobile from '../../assets/services/mobile.svg';
import annotation from '../../assets/services/annotation.png';
import security from '../../assets/services/security.svg';

const Services = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Create refs for each section matching Footer IDs (using valid IDs)
  const webDevelopmentRef = useRef(null);
  const aiMlRef = useRef(null);  // Changed from "AI/ML" to "ai-ml"
  const desktopDevelopmentRef = useRef(null);
  const mobileApplicationRef = useRef(null);
  const cadRef = useRef(null);
  const dataRef = useRef(null);
  const ocrRef = useRef(null);

  // Map Footer section IDs to refs
  const sectionRefs = {
    'webDevelopment': webDevelopmentRef,
    'ai-ml': aiMlRef,  // Updated to match valid ID
    'desktopDevelopment': desktopDevelopmentRef,
    'mobileApplication': mobileApplicationRef,
    'cad': cadRef,
    'data': dataRef,
    'ocr': ocrRef
  };

  // Handle scrolling when location state changes
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const ref = sectionRefs[sectionId];
      
      if (ref && ref.current) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'  // Changed from "start" to "center" to center in viewport
          });
        }, 100);
      } else {
        console.warn(`Section with ID "${sectionId}" not found`);
      }
    }
  }, [location]);

  // Map services to their respective sections
  const serviceSections = [
    { id: 'webDevelopment', title: 'Web Development', ref: webDevelopmentRef },
    { id: 'ai-ml', title: 'AI/ML Solutions', ref: aiMlRef },
    { id: 'desktopDevelopment', title: 'Desktop Development', ref: desktopDevelopmentRef },
    { id: 'mobileApplication', title: 'Mobile Application', ref: mobileApplicationRef },
    { id: 'cad', title: 'CAD Solutions', ref: cadRef },
    { id: 'data', title: 'Data Solutions', ref: dataRef },
    { id: 'ocr', title: 'OCR Services', ref: ocrRef }
  ];

  // Get services array from translations
  const servicesData = t("services.cards", { returnObjects: true });

  return (
    <PageTransition>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {servicesData.map((service, index) => {
            // Find the matching section for this service
            const section = serviceSections[index];
            
            return (
              <div
                key={index}
                id={section?.id}
                ref={section?.ref}
                className="bg-white hover:bg-blue-900 hover:text-white p-6 md:p-8 rounded-lg shadow-md transition-all hover:scale-110 duration-300 scroll-mt-20"
              >
                <img 
                  src={
                    service.icon === "ai" ? ai : 
                    service.icon === "web" ? website :
                    service.icon === "website" ? web : 
                    service.icon === "mobile" ? mobile : 
                    service.icon === "annotation" ? annotation : 
                    security
                  } 
                  alt={service.title} 
                  className="w-16 h-16 mb-4" 
                />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;