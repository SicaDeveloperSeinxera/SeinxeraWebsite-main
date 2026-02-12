import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Clients = () => {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col items-center my-25">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("clients.title")}</h1>
            <div className="flex gap-10 mt-8 ">
                {t("clients.clients", { returnObjects: true }).map((clients, index) => (
                    <motion.a 
                    href={`${clients.link}`} 
                    className="flex text-3xl font-bold py-5 px-10 bg-gray-200 rounded-xl max-w-70 items-center justify-center" 
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