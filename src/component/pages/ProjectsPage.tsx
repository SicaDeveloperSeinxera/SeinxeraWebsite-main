import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowLeft, FaUsers, FaFolderOpen } from "react-icons/fa";
import PageTransition from "../PageTransition";

interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
}

const ProjectsPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const projects = t("Projects", {
    returnObjects: true,
  }) as Record<string, Project>;

  const project = Object.values(projects || {}).find((p) => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg rounded-3xl bg-white p-10 text-center shadow-lg border border-gray-200"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
              <FaFolderOpen className="text-blue-600 text-xl" />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900">
              Project Not Found
            </h1>

            <p className="mt-3 text-gray-500">
              The project you're looking for doesn't exist or has been removed.
            </p>

            <Link
              to="/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200"
            >
              <FaArrowLeft />
              Back to Teams
            </Link>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative h-104 sm:h-120 overflow-hidden">
          {project.image ? (
            <motion.img
              initial={{ scale: 1.08, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-800 to-slate-900 text-blue-200">
              <FaFolderOpen className="text-5xl opacity-40" />
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-slate-900/10" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/40 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-5xl px-6 pb-12 sm:pb-16">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="mt-5 text-4xl font-bold text-white drop-shadow-sm sm:text-5xl lg:text-6xl"
              >
                {project.name}
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-700 hover:text-white hover:shadow-md"
            >
              <FaArrowLeft className="text-xs" />
              {t('ProjectHeading.back')}
            </Link>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Header bar */}
            <div className="flex items-center gap-4 border-b border-gray-100 bg-linear-to-r from-blue-50/70 to-transparent px-8 py-7 sm:px-12">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-sm shadow-blue-200">
                <FaFolderOpen />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {t('ProjectHeading.overview')}
                </p>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {t('ProjectHeading.projectDescription')}
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="px-8 py-8 sm:px-12 sm:py-10">
              <p className="whitespace-pre-line text-base leading-8 text-gray-600 sm:text-lg sm:leading-9">
                {project.description}
              </p>
            </div>
            
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;