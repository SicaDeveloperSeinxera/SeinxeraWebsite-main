import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from "../PageTransition";

const TeamsPage = () => {
  const { t } = useTranslation();
  const teamMembers = [
    { name: 'Raj Dangol', roleKey: 'frontend', image: 'https://via.placeholder.com/150' },
    { name: 'Rusha Manandar', roleKey: 'java', image: 'https://via.placeholder.com/150' },
    { name: 'Ayush', roleKey: 'pythonResearch', image: 'https://via.placeholder.com/150' },
    { name: 'Saroj', roleKey: 'java', image: 'https://via.placeholder.com/150' },
    { name: 'Ranjita Maharjan', roleKey: 'java', image: 'https://via.placeholder.com/150' },
    { name: 'Amrit Adhikari', roleKey: 'pythonResearch', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-pulse">
          {t('teams.title')}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {t('teams.subtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{t(`teams.roles.${member.roleKey}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default TeamsPage;