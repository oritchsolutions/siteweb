import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'

const tabProcess = [
  {
    step: 1,
    titre: "Découverte",
    description:
      "Nous analysons vos besoins, définissons les exigences et planifions la feuille de route.",
  },
  {
    step: 2,
    titre: "Design",
    description:
      "Nous créons des wireframes, des prototypes et des designs UI haute fidélité.",
  },
  {
    step: 3,
    titre: "Développement",
    description:
      "Nos experts écrivent un code propre et efficace et intègrent les systèmes.",
  },
  {
    step: 4,
    titre: "Déploiement & Échelle",
    description:
      "Nous lançons votre produit, surveillons les performances et itérons.",
  },
]

const Comment = () => {
  return (
    <section className="w-full px-5 md:px-10 py-12 md:py-20 flex justify-center bg-white dark:bg-dark">
      <div className="max-w-300 w-full relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-dark dark:text-white text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Comment Nous Travaillons
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Notre méthodologie agile garantit la transparence et la livraison continue de valeur.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {tabProcess.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Step number */}
              <motion.div
                className="w-16 h-16 rounded-full bg-white dark:bg-dark
                border-2 border-primary dark:border-primary-dark
                flex items-center justify-center text-dark dark:text-white
                text-2xl font-bold mb-6 z-10
                shadow-[0_0_20px_rgba(19,236,200,0.2)]"
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
                  scale: 1.15,
                  boxShadow: "0 0 30px rgba(19,236,200,0.4)"
                }}
              >
                {item.step}
              </motion.div>

              {/* Line */}
              {index < tabProcess.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-14 left-1/2 w-full h-0.5
                  bg-linear-to-r from-primary dark:from-primary-dark to-transparent z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
              )}

              <motion.h3 
                className="text-dark dark:text-white text-lg font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
              >
                {item.titre}
              </motion.h3>

              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Comment