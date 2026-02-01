import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import assets from "../../assets/assets"
import { Link } from "react-router-dom";

const tabRealisations = [
  {
    categorie: "FinTech",
    titre: "Tableau de Bord Analytique FinTrack",
    description:
      "Une plateforme complète de visualisation de données aidant les institutions financières à suivre les tendances du marché en temps réel.",
    image: assets.image_hero,
  },
  {
    categorie: "FinTech",
    titre: "Tableau de Bord Analytique FinTrack",
    description:
      "Une plateforme complète de visualisation de données aidant les institutions financières à suivre les tendances du marché en temps réel.",
    image: assets.image_hero,
  }
]

const Realisations = () => {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div 
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end
          border-b border-grey-border pb-6 dark:border-border-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nos Réalisations
            </motion.h2>
            <motion.p 
              className="mt-2 text-grey dark:text-text-grey"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Découvrez comment nous transformons les défis en opportunités.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ x: 5 }}
          >
            <Link
              to="/realisations"
              className="flex items-center gap-2 text-sm font-bold text-primary
                    hover:text-primary-hover transition-colors dark:text-primary-dark dark:hover:text-white"
            >
              Voir tout le portfolio →
            </Link>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {tabRealisations.map((item, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl transition-all hover:-translate-y-1
              dark:bg-background-secondary-dark"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="overflow-hidden rounded-2xl border bg-grey-light
                shadow-sm group-hover:shadow-md transition-shadow
                border-grey-border dark:border-border-dark"
                whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >

                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="aspect-video w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-dark/0
                    group-hover:bg-dark/10 transition-colors duration-300"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div 
                  className="p-6 bg-white dark:bg-background-secondary-dark"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <motion.span 
                      className="inline-block rounded bg-primary-ultra px-2 py-1
                      text-xs font-bold uppercase tracking-wider text-primary
                      dark:bg-primary dark:text-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                    >
                      {item.categorie}
                    </motion.span>
                  </div>

                  <motion.h3 
                    className="text-xl font-bold text-dark group-hover:text-primary
                    transition-colors dark:text-white dark:group-hover:text-primary-dark"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  >
                    {item.titre}
                  </motion.h3>

                  <motion.p 
                    className="mt-2 text-sm text-grey line-clamp-2 dark:text-text-grey"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>

              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Realisations