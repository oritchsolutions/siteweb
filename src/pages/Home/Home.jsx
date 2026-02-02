import React from "react";
import Banniere from "./Banniere";
import Savoirplus from "./Savoirplus";
import Services from "./Services";
import Pourquoi from "./Pourquoi";
import Realisations from "./Realisations";
import Equipe from "./Equipe";
import CTA from "./CTA";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banniere />
      <Savoirplus />
      <Services />
      <Pourquoi />
      <Realisations />
      <Equipe />
      <CTA />
    </div>
  );
};

export default Home;
