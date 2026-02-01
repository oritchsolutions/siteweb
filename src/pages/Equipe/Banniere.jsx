import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import assets from "../../assets/assets"

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
                    Nos talents
                </motion.div>

                <motion.h1 
                  className='text-4xl font-black leading-none tracking-tight text-dark 
                  sm:text-6xl lg-6xl dark:text-white'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  L'Humain au <br /> cœur de <br />
                  <span className='text-primary relative inline-block dark:text-primary-dark'>l'Innovation</span>
                </motion.h1>

                <motion.p 
                  className='text-xl dark:text-gray-400 text-grey sm:text:xl max-w-lg'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Rencontrez les esprits créatifs, les ingénieurs rigoureux et les stratèges visionnaires qui transforment vos défis complexes en solutions logicielles élégantes.
                </motion.p>
            
            </motion.div>

            <motion.div 
              className='relative lg:h-auto'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.div 
                  className='relative overflow-hidden rounded-2xl
                  bg-white shadow-2xl dark:bg-dark dark:border-dark-secondary'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                    <div className='flex items-center gap-2 px-4 py-3'>
                        <motion.div 
                          className='h-3 w-3 rounded-full bg-green-400'
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        ></motion.div>
                        <motion.div 
                          className='h-3 w-3 rounded-full bg-red-400'
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        ></motion.div>
                        <motion.div 
                          className='h-3 w-3 rounded-full bg-yellow-400'
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        ></motion.div>
                    </div>
                    <motion.div 
                      className='aspect-video w-full bg-cover bg-center' 
                      style={{ backgroundImage: `url(${assets.equipe})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    ></motion.div>
                </motion.div>

            </motion.div>
        </div>
        </div>
    </section>
  )
}

export default Banniere