import { useRef, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { TFunction } from "i18next";

const VISIBLE_ROWS = 3;
const ROW_HEIGHT = 46;
const SCROLL_EPSILON = 4;

interface ProjectRowProps {
  projectKey: string;
  t: TFunction;
  index: number;
  reduceMotion: boolean;
  memberId: number;
}

const ProjectRow = ({ projectKey, t, index, reduceMotion, memberId }: ProjectRowProps) => (
  <motion.li
    initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    transition={reduceMotion ? undefined : { duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
    className="shrink-0"
  >
    <Link
      to={`/projects/${t(`Projects.${projectKey}.id`)}`} state={{ memberId }}
      className="group flex items-center justify-between gap-3 py-3 px-3.5
                 transition-colors duration-200 ease-out
                 hover:bg-blue-50/70"
    >
      <span className="flex items-center gap-2.5 min-w-0">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
        <span className="text-xs sm:text-sm font-medium text-slate-700 truncate group-hover:text-blue-900 transition-colors">
          {t(`Projects.${projectKey}.name`)}
        </span>
      </span>

      <svg
        className="w-3.5 h-3.5 text-slate-300 shrink-0 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </motion.li>
);

interface ProjectsListProps {
  projects: string[];
  t: TFunction;
  memberId: number;
}

const ProjectsList = ({ projects, t, memberId }: ProjectsListProps) => {
  const prefersReducedMotion = useReducedMotion();
  const listRef = useRef<HTMLUListElement>(null);

  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const isScrollable = !!projects && projects.length > VISIBLE_ROWS;

  const updateScrollState = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setAtTop(el.scrollTop <= SCROLL_EPSILON);
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - SCROLL_EPSILON);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [updateScrollState, projects]);

  if (!projects || projects.length === 0) return null;

  const handleScrollDown = () => {
    listRef.current?.scrollBy({ top: ROW_HEIGHT, behavior: "smooth" });
  };

  const handleScrollUp = () => {
    listRef.current?.scrollBy({ top: -ROW_HEIGHT, behavior: "smooth" });
  };

  const upDisabled = !isScrollable || atTop;
  const downDisabled = !isScrollable || atBottom;

  return (
    <div className="w-full mt-4 sm:mt-5 text-left shrink-0">
      <div className="flex items-center justify-between mb-2 sm:mb-2.5">
        <h2 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
          {t("ProjectHeading.involved")}
        </h2>
        <span className="text-[10px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
          {projects.length}
        </span>
      </div>

      <div className="relative rounded-xl border border-slate-200 bg-white shadow-sm">
        <ul
          ref={listRef}
          onScroll={updateScrollState}
          className="projects-scrollbar flex flex-col divide-y divide-slate-100 overflow-y-auto"
          style={isScrollable ? { maxHeight: ROW_HEIGHT * VISIBLE_ROWS } : undefined}
        >
          {projects.map((projectKey: string, i: number) => (
            <ProjectRow
              key={projectKey}
              projectKey={projectKey}
              t={t}
              index={i}
              reduceMotion={!!prefersReducedMotion}
              memberId={memberId}
            />
          ))}
        </ul>

        {isScrollable && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-linear-to-t from-white to-transparent rounded-b-xl" />
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-2">
        <button
          type="button"
          onClick={handleScrollUp}
          disabled={upDisabled}
          aria-label="Scroll up"
          aria-disabled={upDisabled}
          className={`flex items-center justify-center w-8 h-8 rounded-full border shadow-md transition-colors duration-200
            ${
              upDisabled
                ? "bg-slate-50 border-slate-100 cursor-not-allowed opacity-50"
                : "bg-white border-slate-200 hover:bg-blue-50 hover:border-blue-200"
            }`}
        >
          <svg
            className={`w-4 h-4 ${upDisabled ? "text-slate-300" : "text-blue-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleScrollDown}
          disabled={downDisabled}
          aria-label="Scroll down"
          aria-disabled={downDisabled}
          className={`flex items-center justify-center w-8 h-8 rounded-full border shadow-md transition-colors duration-200
            ${
              downDisabled
                ? "bg-slate-50 border-slate-100 cursor-not-allowed opacity-50"
                : "bg-white border-slate-200 hover:bg-blue-50 hover:border-blue-200"
            }`}
        >
          <svg
            className={`w-4 h-4 ${downDisabled ? "text-slate-300" : "text-blue-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectsList;