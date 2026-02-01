import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'

const Banniere = () => {
  return (
    <section className='w-full px-5 md:px-10 py-16 md:py-15 flex justify-center
    bg-white dark:bg-dark relative overflow-hidden'>
        <div className='max-w-225 w-full text-center relative z-10'>
            <motion.div 
              className='inline-flex items-center gap-2 rounded-full border border-primary-light 
              bg-primary-ultra px-3 py-1 font-medium text-sm text-primary dark:border-primary-dark/30 dark:bg-primary/10 dark:text-primary-dark'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                <span className='relative flex h-2 w-2'>
                    <span className='animate-ping absolute inline-flex h-full w-full
                    rounded-full bg-primary opacity-75 '></span>
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-primary-dark'></span>
                </span>
                Portfolio
            </motion.div>

            <motion.h1 
              className='text-4xl font-black leading-none tracking-tight text-dark 
              sm:text-6xl lg-6xl dark:text-white mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nos
              <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-500 ml-4 relative inline-block dark:from-primary-dark dark:to-emerald-400'>
                Réalisations
              </span>
            </motion.h1>

            <motion.h2 
              className='text-xl md:text-2xl text-slate-700 font-bold mb-4 dark:text-white'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Des solutions logicielles conçues pour répondre à des besoins réels
            </motion.h2>

            <motion.p 
              className='text-slate-500 dark:text-gray-400 text-lg font-normal leading-relaxed max-w-2xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              De la startup ambitieuse à la grande entreprise, nous collaborons étroitement avec nos clients pour concevoir des produits digitaux innovants. Découvrez une sélection de projets où technologie rime avec impact et performance.
            </motion.p>
        </div>
    </section>
  )
}

export default Banniere