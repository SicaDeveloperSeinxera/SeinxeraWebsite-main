import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Clients = () => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col items-center my-25 px-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("clients.title")}</h1>
            <div className="flex gap-2 sm:gap-6 md:gap-8 lg:gap-10 mt-8 ">
                {t("clients.clients", { returnObjects: true }).map((clients, index) => (
                    <motion.a 
                    href={`${clients.link}`} 
                    className="flex px-4 max-w-34.5 sm:max-w-45 sm:px-6 py-1.5 sm:py-2.5 sm:text-xl md:text-2xl lg:text-3xl font-bold md:py-3.5 lg:py-5 md:px-8 lg:px-10 bg-gray-200 rounded-xl md:max-w-56 lg:max-w-70 items-center justify-center" 
                    key={index} 
                    target="_blank"
                    whileHover={{y: -10, scale: 1.1}}
                    >
                        {clients.name}
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

export default Clients;