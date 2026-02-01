import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Quote } from "lucide-react"

const temoignagesData = [
  {
    texte: "Oritch Solution a parfaitement compris nos enjeux métiers. Leur approche technique et leur réactivité ont permis de lancer notre plateforme 2 mois avant la date prévue.",
    initiales: "JF",
    nom: "Jean Fotso",
    poste: "CTO, FinTech Services"
  },
  {
    texte: "Une équipe professionnelle qui ne se contente pas de coder, mais qui propose de vraies solutions d'amélioration. Le résultat final dépasse nos attentes en termes d'UX.",
    initiales: "SN",
    nom: "Sophie Ndzié",
    poste: "Directrice Marketing, Luxe & Co"
  },
  {
    texte: "Grâce à leur expertise technique, notre plateforme est aujourd'hui plus rapide, plus stable et prête à évoluer. Leur accompagnement a été déterminant à chaque étape du projet.",
    initiales: "AM",
    nom: "Alexandre Mbiya",
    poste: "Responsable IT, Solutions Digitales"
  }
]

const Temoignages = () => {
  return (
    <section className='border-y border-grey-border bg-background-off dark:border-border-dark dark:bg-darkk w-full px-5 md:px-10 py-20 flex justify-center'>
        <div className='max-w-300 w-full'>
            <motion.div 
              className='text-navy text-2xl font-bold mb-10 pl-2 border-l-4 border-primary dark:border-primary-dark'
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Témoignages Clients
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {temoignagesData.map((temoignage, index) => (
                  <motion.div
                    key={index}
                    className='bg-light-gray dark:bg-team p-8 rounded-xl border border-slate-200 dark:border-white/10 relative shadow-sm'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(19, 236, 200, 0.15)",
                      borderColor: "rgba(19, 236, 200, 0.3)"
                    }}
                  >
                    <motion.span 
                      className='text-5xl absolute top-6 right-6'
                      initial={{ opacity: 0, rotate: -45, scale: 0 }}
                      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <Quote
                        className="w-16 h-16 text-[#c7f6ec] dark:text-primary/20"
                        strokeWidth={1.5}
                      />
                    </motion.span>

                    <motion.p 
                      className='text-slate-600 dark:text-[#d1d5db] italic mb-6 relative z-10'
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    >
                      "{temoignage.texte}"
                    </motion.p>

                    <motion.div 
                      className='flex items-center gap-4'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    >
                      <motion.div 
                        className='w-10 h-10 rounded-full bg-black dark:bg-gray-600 flex items-center justify-center text-white font-bold'
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {temoignage.initiales}
                      </motion.div>
                      <div>
                        <p className='text-navy font-bold text-sm'>{temoignage.nom}</p>
                        <p className='text-slate-500 dark:text-gray-500 text-xs'>{temoignage.poste}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Temoignages