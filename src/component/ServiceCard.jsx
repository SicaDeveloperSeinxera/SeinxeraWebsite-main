import  'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300">
      <img src={icon} alt={title} className="mx-auto h-16 w-16 mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
