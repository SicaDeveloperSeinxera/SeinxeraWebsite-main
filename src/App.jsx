import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import AboutPage from "./component/pages/AboutPage";
import CareersPage from "./component/pages/CareersPage";
import Footer from "./component/footer/Footer";
import ContactPage from "./component/pages/ContactPage";
import ServicesPage from "./component/pages/ServicesPage";
import TeamsPage from "./component/pages/TeamsPage";
import NavigationBar from "./component/navbar/NavigationBar";
import {useTranslation}  from "react-i18next";

const App = () => {
  return (
    <div>
      <NavigationBar />
      
      <Routes>
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareersPage />} />
        <Route path="/team" element={<TeamsPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
