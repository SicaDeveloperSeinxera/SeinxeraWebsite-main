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
  
  // Create refs for each section
  const applicationRef = useRef(null);
  const dataRef = useRef(null);
  const digitalEngineeringRef = useRef(null);
  const automationRef = useRef(null);
  const qualityRef = useRef(null);

  // Map section IDs to refs
  const sectionRefs = {
    'application': applicationRef,
    'data': dataRef,
    'digital-engineering': digitalEngineeringRef,
    'automation': automationRef,
    'quality': qualityRef
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
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location, sectionRefs]);

  // Get services array with their IDs
  const servicesData = t("services.cards", { returnObjects: true });
  
  // Map services to their respective IDs (adjust based on your actual service order)
  const serviceSections = [
    { id: 'application', title: 'Application Development', ref: applicationRef },
    { id: 'data', title: 'Data Solutions', ref: dataRef },
    { id: 'digital-engineering', title: 'Digital Engineering', ref: digitalEngineeringRef },
    { id: 'automation', title: 'Automation', ref: automationRef },
    { id: 'quality', title: 'Quality Assurance', ref: qualityRef }
  ];

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
          {servicesData.map((service, index) => (
            <div
              key={index}
              id={serviceSections[index]?.id}
              ref={serviceSections[index]?.ref}
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
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;