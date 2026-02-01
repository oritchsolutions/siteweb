import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'

const Projetcarte = ({ project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-team rounded-xl overflow-hidden
      border border-slate-100 dark:border-white/10
      shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary-dark/50 hover:shadow-primary-dark/5
      transition-all duration-300 group flex flex-col"
    >
      {/* Image */}
      <div className="w-full aspect-video bg-cover bg-center overflow-hidden relative">
        <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-all"></div>

        <div
          className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        ></div>

        {/* Type */}
        <div
          className="absolute top-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-sm
          px-3 py-1 rounded text-xs font-bold uppercase tracking-wider"
        >
          {project.type}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <motion.h3
          whileHover={{ color: "#0ea5e9" }} // change couleur sur hover
          className="text-navy dark:text-white text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors"
        >
          {project.title}
        </motion.h3>

        <p className="text-slate-500 dark:text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
          <strong className="text-navy dark:text-white font-semibold">Défi :</strong>{" "}
          {project.challenge}
          <br />
          <strong className="text-navy dark:text-white font-semibold">Solution :</strong>{" "}
          {project.solution}
        </p>

        {/* Footer */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-xs text-slate-600 dark:text-white
                bg-slate-100 dark:bg-white/10
                px-2 py-1 rounded border border-slate-200 dark:border-white/10"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2.5 rounded-lg border border-slate-200 dark:border-white/20
            text-navy dark:text-white text-sm font-bold
            hover:bg-primary dark:hover:bg-primary-dark hover:border-primary hover:text-white dark:hover:text-dark
            transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Voir le projet
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

export default Projetcarte;
