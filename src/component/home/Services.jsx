import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col my-25 w-full items-center px-2">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t("services.title")}</h1>
      <h2 className="sm:text-lg md:text-xl mt-1">{t("services.subtitle")}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-1 sm:gap-4 md:gap-6 lg:gap-5 mt-8 sm:px-[5%]">
        {t("services.cards", { returnObjects: true }).map((cards, index) => {
          return (
            <>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 },
                  x: { duration: 0.5, delay: 0.2 },
                  scale: { duration: 0.25 },
                }}
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className="flex flex-col aspect-square bg-cover bg-center sm:rounded-lg rounded-md items-center justify-center px-3 text-white lg:hidden"
                style={{ backgroundImage: `url(/${cards.img})` }}
              >
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold">{cards.title}</h3>
                <p className="text-xs sm:text-sm md:text-[15px]">{cards.shortDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: (index + 2) % 3 === 0 ? 0 : index % 3 === 0 ? -50 : 50, scale: (index + 2) % 3 === 0 ? 0.8 : 1 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 },
                  x: { duration: 0.5, delay: 0.2 },
                  scale: { duration: 0.25 },
                }}
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className="aspect-square bg-cover bg-center sm:rounded-lg rounded-md items-center justify-center px-3 text-white hidden lg:flex lg:flex-col"
                style={{ backgroundImage: `url(/${cards.img})` }}
              >
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold">{cards.title}</h3>
                <p className="text-xs sm:text-sm md:text-[15px]">{cards.shortDescription}</p>
              </motion.div>
            </>
          )
        })
        }
      </div>
    </section>
  );
};

// Export the component as the default export.
export default Services;
