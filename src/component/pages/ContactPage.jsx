import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import firm from "../../assets/white-designed-background.jpg";
import { useRef, useState } from "react";
import Maps from "../address/Maps";
import { useTranslation } from "react-i18next";
import PageTransition from "../PageTransition";

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs

      .sendForm("service_8hu24rg", "template_w9wugb7", form.current, {
        publicKey: "e8fiYD4ifT77UAV-3",
      })

      .then(
        (result) => {
          console.log(result);
          toast.success(t("contact.toasts.success"));
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error(t("contact.toasts.error"));
        },
      );
  };

  return (
    <PageTransition>
      <div
        className="bg-gray-100 py-18 px-4 md:px-10"
        style={{
          backgroundImage: `url(${firm})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-6 px-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
                {t("contact.header")}
              </h1>
              <p className="text-gray-600 mt-4 text-base md:text-lg">
                {t("contact.subtitle")}
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-semibold">
                {t("contact.cooperate")}
              </p>
              <p className="text-gray-600">{t("contact.address")}</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-100 shadow-lg rounded-xl p-6 w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Change 'fullName' to 'from_name' */}
              <div className="flex flex-col">
                <label
                  htmlFor="from_name"
                  className="text-md font-semibold text-gray-700 mb-1"
                >
                  {t("contact.labels.fullName")}
                </label>
                <input
                  name="from_name" // CHANGED FROM fullName
                  id="from_name"
                  type="text"
                  required
                  placeholder={t("contact.placeholders.fullName")}
                  className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
                />
              </div>

              {/* Change 'title' to 'subject' */}
              <div className="flex flex-col">
                <label
                  htmlFor="subject"
                  className="text-md font-semibold text-gray-700 mb-1"
                >
                  {t("contact.labels.title")}
                </label>
                <input
                  name="subject" // CHANGED FROM title
                  id="subject"
                  type="text"
                  required
                  placeholder={t("contact.placeholders.title")}
                  className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
                />
              </div>

              {/* Change 'email' to 'from_email' */}
              <div className="flex flex-col">
                <label
                  htmlFor="from_email"
                  className="text-md font-semibold text-gray-700 mb-1"
                >
                  {t("contact.labels.email")}
                </label>
                <input
                  name="from_email" // CHANGED FROM email
                  id="from_email"
                  type="email"
                  required
                  placeholder={t("contact.placeholders.email")}
                  className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
                />
              </div>

              {/* Phone stays the same */}
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-md font-semibold text-gray-700 mb-1"
                >
                  {t("contact.labels.phone")}
                </label>
                <input
                  name="phone"
                  id="phone"
                  type="tel"
                  placeholder={t("contact.placeholders.phone")}
                  className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
                />
              </div>

              {/* Add missing 'company' field */}
              <div className="flex flex-col">
                <label
                  htmlFor="company"
                  className="text-md font-semibold text-gray-700 mb-1"
                >
                  {t("contact.labels.company")}
                </label>
                <input
                  name="company" // ADD THIS FIELD
                  id="company"
                  type="text"
                  placeholder={t("contact.placeholders.company")}
                  className="font-sm border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
                />
              </div>

              {/* Message stays the same */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-md font-semibold text-gray-700 mb-1"
                >
                  {t("contact.labels.message")}
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder={t("contact.placeholders.message")}
                  className="font-sm border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md py-2 px-3 resize-none"
                />
              </div>

              {/* Add hidden date field */}
              <input
                type="hidden"
                name="date"
                value={new Date().toLocaleDateString()}
              />

              {/* Rest of your form remains the same */}
              <div className="flex items-start gap-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="mt-1 accent-blue-900"
                  required
                />
                <label htmlFor="checkbox" className="text-sm text-gray-600">
                  {t("contact.policyConsent")}
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 rounded-md transition-all duration-300"
              >
                {t("contact.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
