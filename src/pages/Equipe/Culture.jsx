import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Lightbulb, Users, BookOpen } from "lucide-react"

const tabCulture = [
  {
    titre: "Innovation Audacieuse",
    description:
      "Nous ne nous contentons pas de suivre les tendances, nous cherchons constamment des moyens plus intelligents et plus efficaces de résoudre les problèmes.",
    icon: Lightbulb,
    bgSize: 160,
    bgTop: "-top-2",
    bgRight: "-right-6",
  },
  {
    titre: "Collaboration Totale",
    description:
      "Nous croyons que les meilleures idées naissent du partage. La transparence et l'entraide sont au cœur de notre processus de travail.",
    icon: Users,
    bgSize: 160,
    bgTop: "-top-2",
    bgRight: "-right-3",
  },
  {
    titre: "Apprentissage Continu",
    description:
      "La technologie évolue vite, et nous aussi. Chaque projet est une opportunité d'apprendre, de grandir et de repousser nos limites.",
    icon: BookOpen,
    bgSize: 160,
    bgTop: "-top-2",
    bgRight: "-right-3",
  },
]

const Culture = () => {
  return (
    <section className="border-y border-grey-border bg-background-off dark:border-border-dark dark:bg-darkk w-full px-5 md:px-10 py-20 flex justify-center">
      <div className="max-w-300 w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-navy dark:text-white text-3xl md:text-5xl font-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Notre Culture & Nos Valeurs
          </motion.h2>
          <motion.p 
            className="text-slate-600 dark:text-text-grey text-lg font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ce qui nous définit et guide nos actions au quotidien pour délivrer le meilleur à nos clients.
          </motion.p>
        </div>

        {/* Cartes Culture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tabCulture.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="bg-white p-10 rounded-2xl border border-gray-100 dark:border-border-dark dark:bg-dark shadow-sm relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(19, 236, 200, 0.15)"
                }}
              >
                {/* Background icon */}
                <motion.div
                  className={`absolute ${item.bgTop} ${item.bgRight} p-4 opacity-5 dark:opacity-40 transition-all duration-500`}
                  whileHover={{ opacity: 0.15, scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={item.bgSize} className="text-navy dark:text-ico" />
                </motion.div>

                {/* Small icon */}
                <motion.div 
                  className="flex h-12 w-12 mb-8 items-center justify-center rounded-lg bg-primary-ultra border border-primary-light transition-transform dark:bg-ac dark:border-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                >
                  <Icon className="h-6 w-6 text-primary dark:text-primary-dark" />
                </motion.div>

                {/* Titre */}
                <motion.h3 
                  className="text-navy dark:text-white text-2xl font-black mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  {item.titre}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
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

export default Culture