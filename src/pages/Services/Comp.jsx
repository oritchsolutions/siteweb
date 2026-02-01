import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Layers, Smartphone, Globe, Server, Palette, Headset } from "lucide-react"

const tabComp = [
  {
    titre: "Développement Sur Mesure",
    description:
      "Créez des solutions logicielles sur mesure qui s'intègrent parfaitement à vos flux de travail uniques. Des systèmes CRM aux outils de traitement automatisé.",
    icon: Layers,
  },
  {
    titre: "Applications Mobiles",
    description:
      "Solutions natives iOS, Android et multiplateformes utilisant Flutter et React Native. Performance fluide sur tous les appareils.",
    icon: Smartphone,
  },
  {
    titre: "Plateformes Web",
    description:
      "Applications web haute performance, plateformes SaaS et solutions e-commerce construites avec des frameworks modernes comme React et Vue.",
    icon: Globe,
  },
  {
    titre: "Déploiement et accompagnement digital",
    description:
      "Mise en production, cloud, CI/CD et accompagnement stratégique pour assurer la stabilité et l'évolutivité de vos solutions.",
    icon: Server,
  },
  {
    titre: "Design Produit (UI/UX)",
    description:
      "Un design centré sur l'utilisateur qui séduit. Nous créons des interfaces intuitives et des expériences engageantes qui fidélisent les utilisateurs.",
    icon: Palette,
  },
  {
    titre: "Maintenance & Support",
    description:
      "Surveillance 24/7, mises à jour régulières et corrections de bugs pour garantir la continuité de vos services.",
    icon: Headset,
  },
]

const Comp = () => {
  return (
    <section className="w-full px-5 md:px-10 py-20 flex justify-center
    border-y border-grey-border bg-background-off
    dark:border-border-dark dark:bg-darkk">
      <div className="max-w-300 w-full">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-dark dark:text-white text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos Compétences Clés
          </motion.h2>
          <motion.p 
            className="text-grey dark:text-text-grey text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nous proposons des services complets adaptés aux exigences spécifiques
            de votre secteur. Que vous ayez besoin d'une application mobile ou d'une
            infrastructure cloud complexe, nous avons la solution.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabComp.map((item, index) => {
            const Icon = item.icon

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
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(19, 236, 200, 0.15)" 
                }}
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
                    {item.titre}
                  </motion.h3>
                  <motion.p 
                    className="mt-2 text-sm text-grey dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {item.description}
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

export default Comp