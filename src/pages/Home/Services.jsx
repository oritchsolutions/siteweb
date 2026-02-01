import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Globe, Smartphone, SquareTerminal, Palette } from "lucide-react"
import { Link } from "react-router-dom";

const tabservices =[
    {
        titre: 'Développement Web',
        description : 'Applications web évolutives, réactives et performantes construites avec des frameworks modernes.',
        icon : Globe
    },
    {
        titre: 'Applications Mobiles',
        description : 'Expériences mobiles natives et multiplateformes pour iOS et Android.',
        icon : Smartphone
    },
    {
        titre: 'Logiciels Sur Mesure',
        description : 'Solutions d\'entreprise sur mesure pour rationaliser les opérations et augmenter l\'efficacité.',
        icon : SquareTerminal
    },
    {
        titre: 'Design UI/UX',
        description : 'Systèmes de design centrés sur l\'utilisateur garantissant des parcours numériques intuitifs et engageants.',
        icon : Palette
    },
]

const Services = () => {
  return (
    <section className='py-20 sm:py-24 bg-white dark:bg-dark'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <motion.div 
              className='mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row
              sm:items-end'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <div>
                    <motion.h2 
                      className='text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Nos Services
                    </motion.h2>
                    <motion.p 
                      className='mt-2 text-grey dark:text-text-grey'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Des solutions technologiques complètes pour chaque étape de votre croissance.
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
                    to="/services" 
                    className="flex items-center gap-2 text-sm font-bold text-primary
                    hover:text-primary-hover transition-colors dark:text-primary-dark dark:hover:text-white"
                  >
                    Voir tous les services →
                  </Link>
                </motion.div>
            </motion.div>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {tabservices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="group relative flex flex-col gap-4 rounded-xl border border-grey-border
                  bg-white p-6 transition-all hover:border-primary/50 hover:shadow-lg
                  hover:shadow-primary/5 hover:-translate-y-1
                  dark:border-border-dark dark:bg-background-secondary-dark
                  dark:hover:border-primary/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(19, 236, 200, 0.15)" }}
                >
                  <motion.div 
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-ultra
                    border border-primary-light
                    dark:bg-dark dark:border-0"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 360 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-6 w-6 text-primary dark:text-primary-dark" />
                  </motion.div>

                  <div>
                    <motion.h3 
                      className="text-lg font-bold text-dark group-hover:text-primary
                      transition-colors dark:text-white dark:group-hover:text-primary-dark"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    >
                      {service.titre}
                    </motion.h3>
                    <motion.p 
                      className="mt-2 text-sm text-grey dark:text-gray-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </motion.div>
              )
            })}

            </div>
        </div>
    </section>
  )
}

export default Services