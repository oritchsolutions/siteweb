import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { BadgeCheck, Rocket, TrendingUp, Headset } from "lucide-react"

const tabPourquoi = [
  {
    titre: "Développeurs Experts",
    description: "Une équipe d'ingénieurs hautement qualifiés avec une expertise diversifiée.",
    icon: BadgeCheck
  },
  {
    titre: "Technologies Modernes",
    description: "Utilisation des derniers frameworks comme React, Node.js et Flutter.",
    icon: Rocket
  },
  {
    titre: "Solutions Évolutives",
    description: "Des architectures conçues pour gérer la croissance dès le premier jour.",
    icon: TrendingUp
  },
  {
    titre: "Support Fiable",
    description: "Des équipes de maintenance dédiées pour assurer le bon fonctionnement de vos logiciels.",
    icon: Headset
  }
]

const Pourquoi = () => {
  return (
    <section className="bg-background-off py-20 dark:bg-background-secondary-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Titre */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold text-dark sm:text-4xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pourquoi choisir Oritch
          </motion.h2>
          <motion.p 
            className="mt-4 text-grey max-w-2xl mx-auto dark:text-text-grey"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nous combinons expertise technique et approche orientée business.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tabPourquoi.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center gap-3 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="p-4 rounded-full bg-white border border-grey-border
                  shadow-sm mb-2 dark:bg-background-dark dark:border-border-dark"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 360,
                    boxShadow: "0 10px 25px rgba(19, 236, 200, 0.3)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-6 w-6 text-primary dark:text-primary-dark" />
                </motion.div>

                <motion.h3 
                  className="text-lg font-bold text-dark dark:text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {item.titre}
                </motion.h3>

                <motion.p 
                  className="text-sm text-grey dark:text-text-grey"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
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

export default Pourquoi