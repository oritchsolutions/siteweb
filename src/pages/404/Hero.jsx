import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Ghost } from "lucide-react"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <main className='flex flex-col relative items-center justify-center py-20
    overflow-hidden bg-primary-ultra dark:bg-dark/80'>
        {/* Effet de fond flou animé */}
        <motion.div 
          className='absolute top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 h-96 w-96 rounded-full bg-primary/20 blur-[100px] 
          pointer-events-none'
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        <div className='relative z-10 px-4 text-center sm:px-6 lg:px-8'>
            {/* Icône Ghost */}
            <motion.div 
              className='mx-auto mb-8 flex h-24 w-24 items-center 
              justify-center rounded-2xl bg-red-600 dark:bg-white shadow-xl shadow-red-400/30 dark:shadow-white/50 backdrop-blur-sm'
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -10, 10, -10, 0]
              }}
            >
                <motion.span 
                  className='text-white dark:text-red-600'
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Ghost className="w-18 h-18"/>
                </motion.span>
            </motion.div>

            {/* Titre 404 */}
            <motion.h1 
              className='text-8xl font-black tracking-tighter 
              text-text-main sm:text-9xl mb-2 text-bluue dark:text-white'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.h1>

            {/* Sous-titre */}
            <motion.h2 
              className='text-2xl font-bold text-slate-800 sm:text-3xl mb-4 dark:text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                Oups ! La page que vous cherchez n'existe pas.
            </motion.h2>

            {/* Description */}
            <motion.p 
              className='mx-auto max-w-lg text-base text-text-secondary mb-10 
              leading-relaxed dark:text-text-grey'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
                Il semble que le lien que vous avez suivi soit rompu ou que la page ait été déplacée. Ne vous inquiétez pas, tout n'est pas perdu.
            </motion.p>

            {/* Bouton retour */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="/">
                <motion.button
                  className='inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold dark:bg-primary-dark text-white transition-all hover:scale-105 hover:bg-primary-hover dark:hover:bg-primary-dark cursor-pointer dark:text-dark hover:shadow-[0_6px_20px_rgba(19,236,200,0.23)]'
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 30px rgba(19,236,200,0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Retour à l'accueil
                </motion.button>
              </Link>
            </motion.div>
        </div>
    </main>
  )
}

export default Hero