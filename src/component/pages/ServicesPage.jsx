import 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from "../PageTransition";
import ai from '../../assets/services/Artificial intelligence-rafiki.svg';
import web from '../../assets/services/web.svg';
import mobile from '../../assets/services/mobile.svg';
import security from '../../assets/services/security.svg';

const services = [
  { id: 'ai_ml', icon: ai },
  { id: 'cad', icon: web },
  { id: 'data_annotation', icon: mobile },
  { id: 'web', icon: web },
  { id: 'desktop', icon: security },
  { id: 'ocr_data_entry', icon: mobile },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 py-16 px-6 md:px-20">
      <div className="text-center mb-16 ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          {t('services.title')}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white hover:bg-blue-900 hover:text-white p-6 md:p-8 rounded-lg shadow-md">
            <img src={service.icon} alt={t(`services.cards.${service.id}.title`)} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold">{t(`services.cards.${service.id}.title`)}</h3>
            <p className="text-sm">{t(`services.cards.${service.id}.description`)}</p>
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default Services;
