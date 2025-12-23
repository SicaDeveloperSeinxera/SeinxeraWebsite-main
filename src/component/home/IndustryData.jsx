import { useState } from "react";
import aiImage from "../../assets/ai.jpg";
import itImage from "../../assets/it-services.jpg";
import iotImage from "../../assets/iot.jpg";
import desktopImage from "../../assets/desktop-development.jpg";
import mobileImage from "../../assets/mobile-development.jpg";
import webImage from "../../assets/web-dev-code.jpg";
import { useTranslation } from "react-i18next";

const industryItems = [
  {
    icon: "🤖",
    image: aiImage,
  },
  {
    icon: "💻",
    image: itImage,
  },
  {
    icon: "🌐",
    image: iotImage,
  },
  {
    icon: "🖥️",
    image: desktopImage,
  },
  {
    icon: "📱",
    image: mobileImage,
  },
  {
    icon: "🌍",
    image: webImage,
  },
];

const IndustryData = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = industryItems[activeIndex];
  const keys = ["ai", "it", "iot", "desktop", "mobile", "web"];

  return (
    <div className="px-4 lg:px-20 py-10">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl text-blue-800 font-semibold">
          {t('industry.heading')}
        </h2>
        <h1 className="mt-2 md:mt-3 text-2xl md:text-3xl font-bold text-black">
          {t('industry.title')}
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          {t('industry.description')}
        </p>
      </div>

      {/* Main Content - Sidebar + Display Area */}
      <div className="flex flex-col md:flex-row bg-white p-4 rounded-md shadow-md">
        {/* Sidebar List */}
        <div className="w-full md:w-1/3 space-y-2 mb-4 md:mb-0">
          {industryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b text-base md:text-lg rounded hover:bg-blue-100 transition ${
                index === activeIndex
                  ? "bg-white text-blue-700 font-semibold border-blue-600"
                  : ""
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{item.icon}</span>
                {t(`industry.items.${keys[index]}.title`)}
              </span>
              {index === activeIndex && <span>➜</span>}
            </div>
          ))}
        </div>

        {/* Display Area */}
        <div className="w-full md:w-2/3 md:pl-6">
          <img
            src={activeItem.image}
            alt={t(`industry.items.${keys[activeIndex]}.title`)}
            className="rounded-lg shadow-lg w-full h-52 sm:h-64 md:h-80 object-cover"
          />
          <div className="bg-gray-800 text-gray-200 mt-4 p-4 rounded">
            <h2 className="text-lg md:text-xl font-bold">{t(`industry.items.${keys[activeIndex]}.title`)}</h2>
            <p className="mt-1 text-sm md:text-base">
              {t(`industry.items.${keys[activeIndex]}.description`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryData;
