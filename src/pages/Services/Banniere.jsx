import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import assets from "../../assets/assets"
import { BadgeCheck } from "lucide-react"
import { Link } from "react-router-dom";

const Banniere = () => {
  return (
    <section className='w-full px-5 md:px-10 py-12 md:py-20 flex justify-center bg-white 
    dark:bg-dark'>
        <div className='max-w-300 w-full flex flex-col-reverse md:flex-row gap-12
        items-center'>
            <motion.div 
              className='flex flex-col gap-6 flex-1 text-left'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
                <motion.h1 
                  className='text-dark dark:text-white text-4xl md:text-6xl font-black 
                  tracking-tight leading-none'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Solutions numériques pour
                    <br />
                    <span className='text-transparent bg-clip-text bg-linear-to-r from 
                    bg-primary dark:bg-primary-dark to-emerald-400 inline-block'>Entreprises Modernes</span>
                </motion.h1>

                <motion.p 
                  className='text-grey dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Nous fournissons des services complets d'ingénierie logicielle, de la conception initiale au déploiement et à la mise à l'échelle. Laissez-nous gérer la technologie pendant que vous vous concentrez sur la croissance.
                </motion.p>

                <motion.div 
                  className='pt-4'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Link to="/realisations">
                      <motion.button 
                        className='h-12 rounded-lg bg-primary dark:bg-primary-dark px-8 text-base font-bold
                        text-white dark:text-dark transition-all hover:bg-primary-hover dark:hover:bg-primary-dark shadow-lg
                        shadow-primary/25 hover:shadow-primary/40 cursor-pointer'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir nos réalisations
                      </motion.button>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div 
              className='flex-1 w-full'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.div 
                  className='w-full aspect-video bg-center bg-cover rounded-xl shadow-2xl 
                  shadow-gray-200 dark:shadow-primary/40 overflow-hidden relative' 
                  style={{ backgroundImage: `url(${assets.services})` }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                    <div className='absolute inset-0 bg-linear-to-tr from-white/10 dark:from-dark/10 to-transparent'></div>
                    
                    <motion.div 
                      className='absolute bottom-6 left-6 bg-white/95 dark:bg-dark/90 backdrop-blur border 
                      border-gray-200 dark:border-white/10 p-4 rounded-lg shadow-xl max-w-xs hidden md:block'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                    >
                        <div className='flex items-center gap-3 mb-2'>
                            <motion.span 
                              className='text-primary dark:text-primary-dark'
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            >
                              <BadgeCheck />
                            </motion.span>
                            <span className='text-dark font-bold dark:text-white'>Qualité avant tout</span>
                        </div>
                        <p className='text-grey dark:text-text-grey text-xs'>Tests rigoureux et architecture propre pour chaque livrable.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default Banniere