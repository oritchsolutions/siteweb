import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import assets from "../../assets/assets"
import { Link } from "react-router-dom";

const Banniere = () => {
  return (
    <section className='relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-white dark:bg-dark'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
            <motion.div 
              className='flex flex-col gap-6'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >

                <motion.div 
                  className='inline-flex w-fit items-center gap-2 rounded-full border border-primary-light 
                  bg-primary-ultra px-3 py-1 text-xs font-semibold text-primary dark:border-primary-dark/30 dark:bg-primary/10 dark:text-primary-dark'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className='relative flex h-2 w-2'>
                        <span className='animate-ping absolute inline-flex h-full w-full
                        rounded-full bg-primary opacity-75 '></span>
                        <span className='relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-primary-dark'></span>
                    </span>
                    Nous acceptons de nouveaux projets
                </motion.div>

                <motion.h1 
                  className='text-4xl font-black leading-none tracking-tight text-dark 
                  sm:text-6xl lg-6xl dark:text-white'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Solutions Logicielles Intelligentes pour
                  <span className="text-transparent bg-clip-text bg-linear-to-r from 
                      bg-primary dark:bg-primary-dark to-emerald-400 inline-block">
                      Entreprises Modernes
                  </span>
                </motion.h1>

                <motion.p 
                  className='text-xl text-grey dark:text-gray-400 sm:text:xl max-w-lg'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Nous sommes spécialisés dans le développement web évolutif, les applications mobiles intuitives et les logiciels sur mesure conçus pour stimuler votre croissance.
                </motion.p>

                <motion.div 
                  className='flex flex-wrap gap-4 pt-4'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link to="/contactez-nous">
                    <motion.button 
                      className='h-12 rounded-lg bg-primary dark:bg-primary-dark px-8 text-base font-bold
                      text-white dark:text-dark transition-all hover:bg-primary-hover dark:hover:bg-primary-dark shadow-lg
                      shadow-primary/25 hover:shadow-primary/40 cursor-pointer'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contactez-nous
                    </motion.button>
                    </Link>
                    <Link to="/realisations">
                      <motion.button 
                        className='h-12 rounded-lg border border-grey-light bg-white
                        px-8 text-base font-bold text-dark-secondary transition-all hover:border-primary
                        hover:text-primary dark:hover:text-primary-dark hover:bg-primary-ultra cursor-pointer dark:border-border-dark dark:hover:border-primary-dark dark:bg-transparent dark:hover:bg-transparent dark:text-white'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Voir nos projets
                      </motion.button>
                    </Link>
                </motion.div>
            
            </motion.div>

            <motion.div 
              className='relative lg:h-auto'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className='absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary-dark/20 blur-[100px]'></div>
                <motion.div 
                  className='relative overflow-hidden rounded-2xl
                  bg-white shadow-2xl dark:bg-dark dark:border-dark-secondary'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                    <div className='flex items-center gap-2 px-4 py-3'>
                        <div className='h-3 w-3 rounded-full bg-green-400'></div>
                        <div className='h-3 w-3 rounded-full bg-red-400'></div>
                        <div className='h-3 w-3 rounded-full bg-yellow-400'></div>
                    </div>
                    <div className='aspect-video w-full bg-cover bg-center' style={{ backgroundImage: `url(${assets.image_hero})` }}></div>
                </motion.div>

            </motion.div>
        </div>
        </div>
    </section>
  )
}

export default Banniere