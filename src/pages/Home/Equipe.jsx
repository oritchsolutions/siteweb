import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import assets from "../../assets/assets"
import { Link } from "react-router-dom"

const tabEquipe = [
  {
    nom: "Toya Tankwa Joel Sorel",
    role: "Developpeur",
    photo: assets.image_toya,
  },
  {
    nom: "Véra Estelle Mamchie",
    role: ".NET Developer & QA Tester",
    photo: assets.image_vera,
  },
  {
    nom: "Clovis Finka",
    role: "Developpeur web fullstack",
    photo: assets.image_finka,
  },
  
]

const Equipe = () => {
  return (
    <section className="bg-background-off py-20 dark:bg-background-secondary-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2 
            className="text-3xl font-bold text-dark sm:text-4xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Rencontrez l'Équipe
          </motion.h2>
          <motion.p 
            className="mt-2 text-grey max-w-2xl mx-auto dark:text-text-grey"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Les esprits créatifs derrière le code.
          </motion.p>
        </div>

        {/* Team */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tabEquipe.map((member, index) => (
            <motion.div 
              key={index} 
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full 
                border-4 border-white shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform
                  duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.photo})` }}
                />
              </motion.div>

              <motion.h3 
                className="text-lg font-bold text-dark dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
              >
                {member.nom}
              </motion.h3>

              <motion.p 
                className="text-sm text-primary font-medium dark:text-primary-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/equipe"
              className="text-sm font-semibold text-dark-secondary
              hover:text-primary transition-colors
              dark:text-white dark:hover:text-primary-dark inline-block"
            >
              Voir toute l'équipe →
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Equipe