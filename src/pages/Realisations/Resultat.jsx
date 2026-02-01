import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Zap, Gauge, BarChart3 } from "lucide-react"

const resultatsData = [
  {
    icon: Zap,
    titre: "Gain de Productivité",
    description: "Nos outils sur mesure automatisent les flux de travail complexes, permettant à vos équipes de gagner des heures précieuses chaque semaine."
  },
  {
    icon: Gauge,
    titre: "Performance & Rapidité",
    description: "Architecture optimisée et code propre garantissent des applications rapides, capables de supporter votre croissance sans ralentissement."
  },
  {
    icon: BarChart3,
    titre: "ROI Mesurable",
    description: "Chaque fonctionnalité est pensée pour apporter de la valeur : réduction des coûts, augmentation des conversions ou fidélisation client."
  }
]

const Resultat = () => {
  return (
    <section className='w-full px-5 md:px-10 py-16 flex justify-center bg-light-gray'>
        <div className='max-w-300 w-full'>
            <div className='text-center mb-16'>
                <motion.h2 
                  className='text-navy text-3xl font-bold mb-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Des résultats concrets pour nos clients
                </motion.h2>
                <motion.p 
                  className='text-slate-500 dark:text-gray-400 max-w-2xl mx-auto'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Notre engagement va au-delà du code. Nous mesurons notre succès par l'impact réel de nos solutions sur votre activité.
                </motion.p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {resultatsData.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={index}
                      className='p-8 rounded-2xl bg-white dark:bg-team border border-slate-100 dark:border-white/10
                      shadow-sm hover:shadow-xl hover:border-primary/50 dark:hover:border-primary-dark/50 hover:shadow-primary-dark/5
                      transition-all duration-300 flex flex-col items-center text-center'
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 40px rgba(19, 236, 200, 0.15)"
                      }}
                    >
                      <motion.div 
                        className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary dark:text-primary-dark mb-6'
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: 360,
                          backgroundColor: "rgba(19, 236, 200, 0.2)"
                        }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>

                      <motion.h3 
                        className='text-navy text-xl font-bold mb-3'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                      >
                        {item.titre}
                      </motion.h3>

                      <motion.p 
                        className='text-slate-500 dark:text-gray-400 text-sm leading-relaxed'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  )
                })}
            </div>
        </div>
    </section>
  )
}

export default Resultat