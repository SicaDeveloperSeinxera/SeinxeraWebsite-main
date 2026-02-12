import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cityBackground from "../../assets/background-portfolio.jpg";
import { useTranslation } from "react-i18next";
import aiImage from "../../assets/ai.jpg";
import imageAnnotation from "../../assets/image-annotation.webp";
import cadTraceImage from "../../assets/cad-trace-image.jpg";
import laentregaImage from "../../assets/laentrega-image.png";

const Portfolio = () => {
  const { t } = useTranslation();

  const slides = useMemo(
    () => [
      {
        title: t("portfolio.slide1.title"),
        text: t("portfolio.slide1.stack"),
        description : t("portfolio.slide1.description"),
        image: aiImage,
      },
      {
        title: t("portfolio.slide2.title"),
        text: t("portfolio.slide2.stack"),
        description : t("portfolio.slide2.description"),
        image: laentregaImage,
      },
      {
        title: t("portfolio.slide3.title"),
        text: t("portfolio.slide3.stack"),
        description : t("portfolio.slide3.description"),
        image: imageAnnotation,
      },
      {
        title: t("portfolio.slide4.title"),
        text: t("portfolio.slide4.stack"),
        description : t("portfolio.slide4.description"),
        image: cadTraceImage,
      },
    ],
    [t]
  );

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const next = () => setCurrent((i) => (i + 1) % slides.length);
  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section
      className="bg-white p-2 sm:p-8 rounded-t-2xl min-h-75 h-full text-center"
      style={{
        backgroundImage: `url(${cityBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-3xl font-semibold text-gray-200 px-1 py-1">
        {t("portfolio.header")}
      </div>

      <div className="relative mx-auto my-12 max-w-250">
        {/* Invisible edge controls with delayed arrow hints */}
        <EdgeControls prev={prev} next={next} />

        {/* Slider viewport */}
        <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-200">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 sm:p-8 min-h-105 max-w-300"
              >
                <img
                  className="w-full md:w-112.5 h-87.5 rounded-xl object-fill mx-auto"
                  src={slides[current].image}
                  alt={slides[current].title}
                />
                <div className="w-full sm:px-2 flex flex-col">
                  <h3 className="text-4xl md:text-3xl font-semibold text-gray-800 text-left break-all">
                    {slides[current].title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-2 font-semibold text-left">
                    {slides[current].text}
                  </p>
                  <p className="text-gray-600 mt-12 leading-relaxed text-justify max-w-125">
                    {slides[current].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                current === idx ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export the component as the default export.
export default Portfolio;

// EdgeControls component keeps navigation functional while hidden; shows arrows after 0.8s hover
const EdgeControls = ({ prev, next }) => {
  const [showLeftHint, setShowLeftHint] = useState(false);
  const [showRightHint, setShowRightHint] = useState(false);
  const leftTimerRef = useRef(null);
  const rightTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (leftTimerRef.current) clearTimeout(leftTimerRef.current);
      if (rightTimerRef.current) clearTimeout(rightTimerRef.current);
    };
  }, []);

  const handleLeftEnter = () => {
    if (leftTimerRef.current) clearTimeout(leftTimerRef.current);
    leftTimerRef.current = setTimeout(() => setShowLeftHint(true), 800);
  };
  const handleLeftLeave = () => {
    if (leftTimerRef.current) clearTimeout(leftTimerRef.current);
    setShowLeftHint(false);
  };
  const handleRightEnter = () => {
    if (rightTimerRef.current) clearTimeout(rightTimerRef.current);
    rightTimerRef.current = setTimeout(() => setShowRightHint(true), 800);
  };
  const handleRightLeave = () => {
    if (rightTimerRef.current) clearTimeout(rightTimerRef.current);
    setShowRightHint(false);
  };

  return (
    <>
      {/* Left edge click/hover area */}
      <div
        role="button"
        aria-label="Previous"
        title="Previous"
        onClick={prev}
        onMouseEnter={handleLeftEnter}
        onMouseLeave={handleLeftLeave}
        className="absolute left-0 top-0 h-full w-10 md:w-14 z-30 cursor-pointer"
      />
      {/* Right edge click/hover area */}
      <div
        role="button"
        aria-label="Next"
        title="Next"
        onClick={next}
        onMouseEnter={handleRightEnter}
        onMouseLeave={handleRightLeave}
        className="absolute right-0 top-0 h-full w-10 md:w-14 z-30 cursor-pointer"
      />

      {/* Delayed arrow hints */}
      <AnimatePresence>
        {showLeftHint && (
          <motion.div
            key="left-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-none text-gray-200 text-4xl"
          >
            ‹
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showRightHint && (
          <motion.div
            key="right-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-none text-gray-200 text-4xl"
          >
            ›
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


