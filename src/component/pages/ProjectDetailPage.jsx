import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaFolderOpen } from "react-icons/fa";
import PageTransition from "../PageTransition";
import { teamMembers } from "./TeamsPage";
import ProjectCard from "../ProjectCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();
  const memberId = location.state?.memberId;

  const projectsMap = t("Projects", { returnObjects: true });

  const projectEntries = Object.entries(projectsMap || {});
  const currentEntry = projectEntries.find(
    ([, p]) => p.id?.toLowerCase() === id?.toLowerCase()
  );
  const projectKey = currentEntry?.[0];
  const project = currentEntry?.[1];

  if (!project || !projectKey) {
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
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200"
            >
              <FaArrowLeft />
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  const selectedMember = teamMembers.find(
    (member) => member.id === memberId
  );

  let visibleProjects = [];

  if (selectedMember) {
    visibleProjects = selectedMember.projects
      .map((k) => projectsMap[k])
      .filter((p) => Boolean(p))
      .filter((p) => p.id.toLowerCase() !== id?.toLowerCase());
  } else {
    visibleProjects = Object.values(projectsMap)
      .filter((p) => p.id.toLowerCase() !== id?.toLowerCase())
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
  }

  return (
    <PageTransition key={i18n.language}>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-5 sm:py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => navigate("/team")}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-700 hover:text-white hover:shadow-md"
              >
                <FaArrowLeft className="text-xs" />
                {t("ProjectHeading.back")}
              </button>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              {project.name}
            </motion.h1>

            <div className="mt-5 h-0.5 w-14 rounded-full bg-blue-400" />
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Header bar */}
            <div className="flex items-center gap-4 border-b border-gray-100 bg-linear-to-r from-blue-50/70 to-transparent px-8 py-7 sm:px-12">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-sm shadow-blue-200">
                <FaFolderOpen />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {t("ProjectHeading.overview")}
                </p>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  {t("ProjectHeading.projectDescription")}
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

          {/* Other Projects */}
          {visibleProjects.length > 0 && (
            <section className="mt-14 sm:mt-16">
              <div className="flex items-end justify-between gap-4">
                <div>
                  {selectedMember ? (
                    <div className="flex items-center gap-3">
                        {selectedMember.image && (
                        <img
                            src={selectedMember.image}
                            alt={selectedMember.name}
                            className="h-15 w-15 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        )}

                        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {t("ProjectHeading.otherProjects", {
                                name: selectedMember.name,
                            })}
                        </h2>
                    </div>
                    ) : (
                    <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                        {t("ProjectHeading.moreProjects")}
                    </h2>
                    )}
                </div>

                <Link
                  to="/projects"
                  className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-700 hover:text-white hover:shadow-md"
                >
                  {t("ProjectHeading.viewallprojects")}
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-10">
                  <div key={selectedMember?.id ?? "random-projects"}>
                    <motion.div
                      key={project.id}
                      variants={prefersReducedMotion ? undefined : containerVariants}
                      initial={prefersReducedMotion ? undefined : "hidden"}
                      whileInView={prefersReducedMotion ? undefined : "show"}
                      viewport={{ once: true, amount: 0.15 }}
                      className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {visibleProjects.map((p) => (
                        <ProjectCard
                            key={p.id}
                            project={p}
                            variants={prefersReducedMotion ? undefined : cardVariants}
                            state={
                            selectedMember
                                ? { memberId: selectedMember.id }
                                : undefined
                            }
                        />
                      ))}
                    </motion.div>
                  </div>
              </div>

              <Link
                to="/projects"
                className="mt-8 flex sm:hidden items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-600 hover:bg-blue-700 hover:text-white hover:shadow-md"
              >
                View all projects
                <FaArrowRight className="text-xs" />
              </Link>
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetailPage;