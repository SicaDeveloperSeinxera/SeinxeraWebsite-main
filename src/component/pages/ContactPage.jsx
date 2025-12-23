import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import firm from "../../assets/white-designed-background.jpg";
import Maps from "../address/Maps";
import { useTranslation } from "react-i18next";
import PageTransition from "../PageTransition";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm("service_ch9c6rh", "template_smhsrpa", form.current, {
        publicKey: "e8fiYD4ifT77UAV-3",
      })

      .then(
        (result) => {
          console.log(result);
          toast.success(t('contact.toasts.success'));
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error(t('contact.toasts.error'));
        }
      );
  };

  return (
    <PageTransition>
    <div className="bg-gray-100 py-18 px-4 md:px-10" style={{ backgroundImage: `url(${firm})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6 px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
              {t('contact.header')}
            </h1>
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              {t('contact.subtitle')}
            </p>
          </div>

          <div>
            <p className="text-gray-700 font-semibold">{t('contact.cooperate')}</p>
            <p className="text-gray-600">{t('contact.address')}</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-100 shadow-lg rounded-xl p-6 w-full md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="text-md font-semibold text-gray-700 mb-1"
              >
                {t('contact.labels.fullName')}
              </label>
              <input
                name="fullName"
                id="fullName"
                type="text"
                required
                placeholder={t('contact.placeholders.fullName')}
                className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="text-md font-semibold text-gray-700 mb-1"
              >
                {t('contact.labels.title')}
              </label>
              <input
                name="title"
                id="title"
                type="text"
                required
                placeholder={t('contact.placeholders.title')}
                className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-md font-semibold text-gray-700 mb-1"
              >
                {t('contact.labels.email')}
              </label>
              <input
                name="email"
                id="email"
                type="email"
                required
                placeholder={t('contact.placeholders.email')}
                className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-md font-semibold text-gray-700 mb-1"
              >
                {t('contact.labels.phone')}
              </label>
              <input
                name="phone"
                id="phone"
                type="tel"
                placeholder={t('contact.placeholders.phone')}
                className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="checkbox"
                type="checkbox"
                className="mt-1 accent-blue-900"
                required
              />
              <label htmlFor="checkbox" className="text-sm text-gray-600">
                {t('contact.policyConsent')}
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 rounded-md transition-all duration-300"
            >
              {t('contact.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;
