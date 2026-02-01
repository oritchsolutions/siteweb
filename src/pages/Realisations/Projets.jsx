import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence} from 'framer-motion'
import Type from '../../components/Type'
import Projetcarte from "../../components/Projetcarte";
import projects from "../../assets/projets";

const Projets = () => {
  const [activeType, setActiveType] = useState("all");

  const filteredProjects =
    activeType === "all"
      ? projects
      : projects.filter((project) => project.type === activeType);

  return (
    <section className="w-full min-h-screen bg-grey-light dark:border-border-dark dark:bg-darkk">
      {/* Filtre */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Type active={activeType} setActive={setActiveType} />
      </motion.div>

      {/* Grille des projets */}
      <div
        className="max-w-300 mx-auto px-5 md:px-10 py-12
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                layout
              >
                <Projetcarte project={project} />
              </motion.div>
            ))
          ) : (
            <motion.p 
              className="col-span-full text-center text-slate-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Aucun projet trouvé
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projets;