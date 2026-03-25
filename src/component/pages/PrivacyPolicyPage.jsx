import { useTranslation, Trans } from "react-i18next";
import PageTransition from "../PageTransition";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  
  // Get the points array
  const points = t("PrivacyPolicy.points", { returnObjects: true });
  

  return (
    <main className="w-full my-6">
      <PageTransition>
        <section className="flex flex-col w-full px-4 md:px-8 lg:px-16 xl:px-24 py-8">
          <h2 className="font-bold text-xl sm:text-2xl mt-0 mb-1">
            {t("PrivacyPolicy.heading")}
          </h2>

          <p className="mt-3">
            {t("PrivacyPolicy.description")}
          </p>

          <div className="flex flex-col w-full mt-5">
            {points.map((point, idx) => (
              <div className="mt-5" key={idx}>
                <h3 className="text-lg font-semibold mb-3">
                  {idx + 1}. {point.heading}
                </h3>

                {/* For text without links */}
                {point.description?.text && !point.description.text.includes("<contact>") && (
                  <p>
                    {t(`PrivacyPolicy.points.${idx}.description.text`)}
                  </p>
                )}

                {/* For text WITH contact link */}
                {point.description?.text && point.description.text.includes("<contact>") && (
                  <p>
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
                  <ul className="list-disc mt-3 px-4">
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