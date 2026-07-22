import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  "team involved"?: string;
}

type Props = {
  project: Project;
  variants?: Variants;
  state?: unknown;
};

const ProjectCard = ({ project, variants, state }: Props) => {
    const { t, i18n } = useTranslation();
  const excerpt =
    project.description?.split("\n")[0]?.slice(0, 110) ?? "";

  return (
    <motion.div variants={variants} className="group">
      <Link
        to={`/projects/${project.id}`}
        state={state}
        className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white px-5 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <h3 className="text-base font-bold leading-snug text-slate-800">
          {project.name}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">
          {excerpt}
          {excerpt.length === 110 ? "…" : ""}
        </p>

        <div className="mt-4 h-0.5 w-8 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-14" />

        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-blue-800">
          <span>{t("ProjectHeading.overview")}</span>
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;