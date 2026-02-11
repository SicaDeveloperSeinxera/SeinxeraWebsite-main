import React from "react";
import { useTranslation } from "react-i18next";
import PageTransition from "../PageTransition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import rusha from "../../assets/rusha.jpg";
import manik from "../../assets/manik.jpeg";
import sujal from "../../assets/sujal.jpg";
import prabigya from "../../assets/prabigya.jpg";
import nischal from "../../assets/nischal.png";
import saroj from "../../assets/saroj.jpg";

const TeamsPage = () => {
  const {t} = useTranslation();
  
  const teamMembers = [
    { id: 1, name: "Saroj Sharma", image: saroj, roleKey: "jmanager", testimonialKey: "t1" },
    { id: 2, name: "Rusha Manandhar", image: rusha, roleKey: "jdev", testimonialKey: "t2" },
    { id: 3, name: "Sujal Subedi", image: sujal, roleKey: "ai", testimonialKey: "t3" },
    { id: 4, name: "Nischal Shrestha", image: nischal, roleKey: "wdev", testimonialKey: "t4" },
    { id: 5, name: "Prabigya Poudel", image: prabigya, roleKey: "UI", testimonialKey: "t5" },
    { id: 6, name: "Manik Shrestha", image: manik, roleKey: "UI", testimonialKey: "t6" },
  ];

  return (
    <PageTransition>
      <div className="min-h-auto bg-white py-12 px-4">
        <div className="max-w-full text-center">
        <div className="w-11/12 mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("teams.title")}
          </h1>
          <p className="text-xl px-4 text-center text-gray-600 mb-12">{t("teams.subtitle")}</p>
        </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 3 },
            }}
            className="w-11/12 lg:w-11/12 mx-auto md:w-11/12 sm:w-11/12 bg-white testimonial-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="py-10">
                <div className="relative bg-gray-100 border mt-4 border-gray-200 rounded-2xl shadow-sm p-8 h-100 flex flex-col items-center">
                  
                  {/* Floating Avatar */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-30 h-30 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Identity */}
                  <div className="mt-12">
                    <h3 className="text-xl font-bold text-slate-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-900 font-medium">
                      {t(`teams.roles.${member.roleKey}`)}
                    </p>
                  </div>

                  <hr className="w-full border-gray-300 mb-6" />

                  {/* Testimonial Text - NOW TRANSLATED */}
                  <p className="text-gray-600 leading-relaxed text-justify hyphens-auto">
                    {t(`teams.testimonials.${member.testimonialKey}`)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles for Swiper dots */}
      <style jsx global>{`
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
      `}</style>
    </PageTransition>
  );
};

export default TeamsPage;