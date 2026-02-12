import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col md:flex-row px-2 sm:px-20 my-25 w-full lg:gap-x-10 gap-y-10">
            <div className="flex-1">
                <motion.h1
                    className="text-xl sm:text-2xl text-[#0D00FC] font-medium"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {t("homeAbout.title")}
                </motion.h1>
                <h2 className="text-3xl sm:text-4xl mt-1.5 font-bold">{t("homeAbout.subtitle")}</h2>
                <motion.p
                    className="text-lg sm:text-xl mt-1.5"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {t("homeAbout.description1")}
                </motion.p>
                <motion.p
                    className="text-lg sm:text-xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {t("homeAbout.description2")}
                </motion.p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 flex-1 gap-y-10 md:gap-y-2">
                {
                    t("homeAbout.highlights", { returnObjects: true }).map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <motion.div
                                className="flex items-center justify-center text-4xl sm:text-6xl bg-linear-to-b from-[#5C7CFE] to-[#0D00FC] text-transparent bg-clip-text font-bold"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index / 2 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {item.value}
                            </motion.div>

                            <motion.p
                                className="text-xl sm:text-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index / 2 + 0.5 }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {item.label}
                            </motion.p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default About;