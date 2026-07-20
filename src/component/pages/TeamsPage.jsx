import React from "react";
import { useTranslation } from "react-i18next";
import PageTransition from "../PageTransition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ProjectsList from "../ProjectsList";
import rusha from "../../assets/rusha.jpg";
import manik from "../../assets/manik.jpeg";
import kushal from "../../assets/kushal.JPG";
import prabigya from "../../assets/prabigya.jpg";
import nischal from "../../assets/nischal.png";
import saroj from "../../assets/saroj.jpg";
import sisam from "../../assets/SisamUpadhyay.jpg";
import sadikshya from "../../assets/sadikshya.jpg";
import dipesh from "../../assets/dipesh.jpg";
import diwana from "../../assets/diwana.jpg";

const TeamsPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: "Saroj Sharma",
      image: saroj,
      roleKey: "jmanager",
      testimonialKey: "t1",
      projects: ["Calendar", "Trytec", "QuickFind", "La Entrega", "EMS", "AWS CRUD", "Shift App", "Seiko-EC", "Seinxera Website", "Shift-AI"]
    },
    {
      id: 2,
      name: "Sisam Upadhyay",
      image: sisam,
      roleKey: "jmanager",
      testimonialKey: "t2",
      projects: ["SlackBot", "QuickFind AI Integration", "EMS", "Seiko-EC", "LiteLLM Deployment"]
    },
    {
      id: 3,
      name: "Kushal Pandey",
      image: kushal,
      roleKey: "ai",
      testimonialKey: "t3",
      projects: ["Robo AI Voice Chat", "Robo Reception AI Assistant", "Building Navigation", "LiteLLM Deployment", "Shift-AI"]
    },
    {
      id: 4,
      name: "Nischal Shrestha",
      image: nischal,
      roleKey: "wdev",
      testimonialKey: "t4",
      projects: ["Trytec"]
    },
    {
      id: 5,
      name: "Prabigya Poudel",
      image: prabigya,
      roleKey: "UI",
      testimonialKey: "t5",
      projects: ["EMS"]
    },
    {
      id: 6,
      name: "Manik Shrestha",
      image: manik,
      roleKey: "UI",
      testimonialKey: "t6",
      projects: ["EMS", "Seiko-EC"]
    },
    {
      id: 7,
      name: "Sadikshya Dhakal",
      image: sadikshya,
      roleKey: "jmanager",
      testimonialKey: "t7",
      projects: ["EMS"]
    },
    {
      id: 8,
      name: "Dipesh Shrestha",
      image: dipesh,
      roleKey: "UI",
      testimonialKey: "t8",
      projects: ["Trytec", "Seiko-EC", "Seinxera Website"]
    },
    {
      id: 9,
      name: "Diwana Tamang",
      image: diwana,
      roleKey: "annotator",
      testimonialKey: "t9",
      projects: ["Steel annotation", "newspaper annotation", "Road annotation", "earthquake annotation"]
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-auto bg-white py-8 sm:py-12 px-4">
        <div className="max-w-full text-center">
          <div className="w-11/12 mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t("teams.title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl px-2 sm:px-4 text-center text-gray-600 mb-10 sm:mb-12">
              {t("teams.subtitle")}
            </p>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 28 },
              1440: { slidesPerView: 3, spaceBetween: 30 }
            }}
            className="w-11/12 lg:w-11/12 mx-auto md:w-11/12 sm:w-11/12 bg-white testimonial-swiper"
          >
            {teamMembers.map(member =>
              <SwiperSlide key={member.id} className="py-10">
                <div className="relative mt-4 flex h-full min-h-135 flex-col rounded-2xl border border-gray-200 bg-gray-100 p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:min-h-145 sm:p-6 lg:min-h-155 xl:min-h-162.5">
                  {/* Floating Avatar */}
                  <div className="absolute -top-12 sm:-top-15 left-1/2 transform -translate-x-1/2">
                    <img
                      width={1000}
                      height={1000}
                      src={member.image}
                      alt={member.name}
                      className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                    />
                  </div>

                  {/* Identity */}
                  <div className="mt-10 sm:mt-12 text-center shrink-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-900 font-medium">
                      {t(`teams.roles.${member.roleKey}`)}
                    </p>
                  </div>

                  <hr className="w-full border-gray-300 my-4 sm:mb-6 shrink-0" />

                  {/* Testimonial Text */}
                  <p className="flex-1 text-sm leading-7 text-gray-600 text-justify sm:text-base">
                    {t(`teams.testimonials.${member.testimonialKey}`)}
                  </p>

                  {/* Involved Projects - anchored to bottom so it lines up across all cards */}
                  <div className="mt-6 w-full border-t border-gray-200 pt-5">
                    <ProjectsList projects={member.projects} t={t} />
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles for Swiper dots */}
      <style jsx global>
        {`
          .swiper-pagination-bullet {
            background: #a3e635 !important;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: #4ade80 !important;
            opacity: 1;
          }
          .testimonial-swiper {
            padding-bottom: 50px !important;
          }
        `}
      </style>
    </PageTransition>
  );
};

export default TeamsPage;