import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Mail } from "lucide-react";

const Banniere = () => {
  return (
    <section className='w-full px-5 md:px-10 pt-16 md:pt-24 pb-12 flex flex-col items-center bg-white dark:bg-dark relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-125 h-125 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none'></div>
        <div className='absolute bottom-0 left-0 w-75 h-75 bg-blue-400/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none'></div>
        
        <div className='max-w-300 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
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
                    Nous sommes à votre écoute
                </motion.div>

                <motion.h1 
                  className='text-4xl md:text-6xl font-black text-navy leading-tight mb-2'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Contactez-nous
                </motion.h1>

                <motion.p 
                  className='text-xl text-grey dark:text-gray-400 leading-relaxed max-w-lg mb-8'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Parlez-nous de votre projet ou de vos besoins et nous vous répondrons rapidement. Construisons ensemble l'avenir de votre entreprise.
                </motion.p>
            </motion.div>

            <motion.div 
              className='relative h-full min-h-75 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className='absolute inset-0 bg-linear-to-r from-light-gray to-white dark:from-card-dark dark:to-[#1a2e2b]'></div>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                      backgroundImage: 'radial-gradient(#13ecc8 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                  }}
                ></div>
                
                <div className='relative z-10 text-center p-8'>
                    <motion.div 
                      className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#e2f9f5] dark:bg-[#19544a] mb-4 backdrop-blur-sm border border-primary-dark/50'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <Mail className="h-9 w-9 text-primary-dark" />
                    </motion.div>

                    <motion.h3 
                      className='text-navy font-bold text-lg'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Réponse garantie sous 24h
                    </motion.h3>

                    <motion.p 
                      className='text-sm text-grey dark:text-gray-400 mt-2'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      Nos équipes sont réactives pour analyser vos besoins.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Banniere