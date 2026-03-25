import { useTranslation, Trans } from "react-i18next";
import PageTransition from "../PageTransition";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  
  // Get the points array
  const points = t("PrivacyPolicy.points", { returnObjects: true });
  return (
    <main className="w-full">
      <PageTransition>
        <section className="flex flex-col w-full px-6 md:px-12 lg:px-20 xl:px-32 py-12 md:py-16">
          <h2 className="font-bold text-xl sm:text-2xl mb-4 ">
            {t("PrivacyPolicy.heading")}
          </h2>

         

          <p className="mb-8">
            {t("PrivacyPolicy.description")}
          </p>

          <div className="flex flex-col w-full space-y-8">
            {points.map((point, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-3">
                  {idx + 1}. {point.heading}
                </h3>

                {/* For text without links */}
                {point.description?.text && !point.description.text.includes("<contact>") && (
                  <p className="mb-4">
                    {t(`PrivacyPolicy.points.${idx}.description.text`)}
                  </p>
                )}

                {/* For text WITH contact link */}
                {point.description?.text && point.description.text.includes("<contact>") && (
                  <p className="mb-4">
                    <Trans
                      i18nKey={`PrivacyPolicy.points.${idx}.description.text`}
                      components={{
                        contact: <Link to="/contact" className="text-blue-600 hover:underline" />
                      }}
                    />
                  </p>
                )}
                
                {/* For bullet points */}
                {point.description?.points && point.description.points.length > 0 && (
                  <ul className="list-disc mt-2 pl-6 space-y-1">
                    {point.description.points.map((subPoint, subIdx) => (
                      <li key={subIdx}>
                        {subPoint}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </PageTransition>
    </main>
  );
};

export default PrivacyPolicyPage;