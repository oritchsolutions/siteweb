import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Services from "../pages/Services/Services.jsx";
import Equipe from "../pages/Equipe/Equipe.jsx";
import Realisation from "../pages/Realisations/Realisations.jsx";
import Contacts from "../pages/Contacts/Contacts.jsx";
import NotFound from "../pages/404/Hero.jsx";

const AppRoutes = () => {
  const { pathname } = useLocation();

  // Scroll automatique en haut à chaque changement de route
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/realisations" element={<Realisation />} />
      <Route path="/contactez-nous" element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

