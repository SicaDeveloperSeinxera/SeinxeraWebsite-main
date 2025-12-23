import React from "react";
import webDevCode from "../../assets/web-dev-code.jpg";
import { useTranslation } from "react-i18next";

// Mirror the Services Page categories
const serviceIds = [
  "ai_ml",
  "cad",
  "data_annotation",
  "web",
  "desktop",
  "ocr_data_entry",
];



const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-200 p-8 rounded-t-2xl min-h-[400px] h-full text-center flex flex-col md:flex-row align-items-center">
      <div className="text-5xl font-semibold text-gray-800 px-1 py-16 mb-8 self-center sm:w-1/3">
        {t('services.title')}
      </div>
      
      {/* 2x3 Grid Section */}
      <div className="pl-6 lg:w-2/3 ">
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-full w-full max-w-4xl mx-auto ">
          {serviceIds.map((id, index) => (
          <div
            key={index}
            className="group relative rounded-lg shadow-md min-h-[200px] min-w-[200px] flex items-center justify-center overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-200 hover:scale-105 transform transition-transform ease-in-out"
            style={{
              backgroundImage: `url(${webDevCode})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* This is the new dark tint layer */}
            {/* The 'group-hover:opacity-75' class makes the tint darker on hover */}
            <div className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

            <div className="relative z-10 p-6 text-gray-200 text-center">
              <span className="font-bold text-xl md:text-2xl">
                {t(`services.cards.${id}.title`)}
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

// Export the component as the default export.
export default Services;
