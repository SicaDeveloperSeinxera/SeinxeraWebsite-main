import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PageTransition from "../PageTransition";
import ProjectCard from "../ProjectCard";

interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  "team involved"?: string;
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const projectsMap = t("Projects", { returnObjects: true }) as Record<
    string,
    Project
  >;
  const projects = Object.values(projectsMap || {});

  return (
    <PageTransition>
      <div key={i18n.language} className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="max-full lg:px-20 px-6 pt-2 pb-12 flex flex-col gap-3 sm:pt-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              to="/team"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-700 hover:text-white hover:shadow-md"
            >
              <FaArrowLeft className="text-xs" />
              {t("ProjectHeading.back")}
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-7xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            {t("ProjectHeading.explore")}
          </motion.h1>

        </section>

        {/* Grid */}
        <section className=" w-full lg:px-20 px-6 pb-24">
          {projects.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white px-8 py-16 text-center shadow-sm">
              <p className="text-gray-500">No projects are catalogued yet.</p>
            </div>
          ) : (
            <motion.div
              variants={prefersReducedMotion ? undefined : containerVariants}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variants={prefersReducedMotion ? undefined : cardVariants}
              />
            ))}
            </motion.div>
          )}
        </section>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;