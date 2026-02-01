import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';
const CTA = () => {
  return (
    <section className='relative overflow-hidden py-24 bg-dark'>
        <div className='absolute inset-0 bg-bluue dark:bg-[rgb(17,35,32)]'></div>
        <div className='relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8'>
            <motion.h2 
              className='text-3xl font-black text-white sm:text-5xl'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Vous avez un projet en tête ?
            </motion.h2>

            <motion.p 
              className='mt-6 text-lg text-gray-300 sm:text-xl dark:text-text-grey'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Construisons quelque chose d'extraordinaire ensemble. Du concept au lancement, nous sommes vos partenaires de réussite.
            </motion.p>

            <motion.div 
              className='mt-10 flex justify-center'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            > 
            <Link to="/contactez-nous">
                <motion.button 
                  className='h-14 rounded-lg bg-primary dark:bg-primary-dark px-10 text-lg
                  font-bold text-white dark:text-background-dark shadow-[0_0_30px_rgba(19,236,200,0.4)] transition-all hover:scale-105
                  cursor-pointer'
                  whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(19,236,200,0.6)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactez-nous
                </motion.button>
                </Link>
            </motion.div>
        </div>
    </section>
  )
}

export default CTA