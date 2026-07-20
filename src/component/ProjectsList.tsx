import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { TFunction } from "i18next";

const VISIBLE_ROWS = 4;
const ROW_HEIGHT = 46;

interface ProjectRowProps {
  projectKey: string;
  t: TFunction;
  index: number;
}

const ProjectRow = ({ projectKey, t, index }: ProjectRowProps) => (
  <motion.li
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
    className="shrink-0"
  >
    <Link
      to={`/projects/${t(`Projects.${projectKey}.id`)}`}
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
}

const ProjectsList = ({ projects, t }: ProjectsListProps) => {
  if (!projects || projects.length === 0) return null;

  const isScrollable = projects.length > VISIBLE_ROWS;

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

      <div className="relative rounded-xl border border-slate-200 bg-white shadow-sm ">
        <ul
          className="projects-scrollbar flex flex-col divide-y divide-slate-100 overflow-y-auto "
          style={isScrollable ? { maxHeight: ROW_HEIGHT * VISIBLE_ROWS } : undefined}
        >
          {projects.map((projectKey: string, i: number) => (
            <ProjectRow key={projectKey} projectKey={projectKey} t={t} index={i} />
          ))}
        </ul>

        {isScrollable && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-linear-to-t from-white to-transparent rounded-b-xl" />
        )}
      </div>
    </div>
  );
};

export default ProjectsList;