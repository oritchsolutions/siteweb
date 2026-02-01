import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Send } from "lucide-react"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className='w-full px-5 md:px-10 py-16 flex justify-center bg-light-gray'>
        <motion.div 
          className="max-w-300  w-full bg-linear-to-r from-light-gray to-white dark:from-card-dark dark:to-[#1a2e2b] rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <motion.div 
              className='absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary dark:via-primary-dark to-transparent opacity-50'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            ></motion.div>

            <motion.h2 
              className='text-navy text-3xl md:text-5xl font-black mb-6 tracking-tight relative z-10'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                Vous avez un projet similaire ?
            </motion.h2>

            <motion.p 
              className='text-slate-600 dark:text-[#d1d5db] text-lg mb-8 max-w-xl mx-auto relative z-10'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                Confiez-le à Oritch Solution. Nous transformons vos idées en succès numérique avec rigueur et passion.
            </motion.p>

            <motion.div 
              className='relative z-10'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Link to="/contactez-nous">
                  <motion.button 
                    className='inline-flex h-14 min-w-55 cursor-pointer items-center justify-center rounded-lg bg-primary dark:bg-primary-dark px-8 text-lg font-bold text-white dark:text-dark shadow-lg shadow-primary/25 transition-transform hover:scale-105 gap-2'
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(19, 236, 200, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Discuter de mon projet</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Send className="w-6 h-6 ml-2" />
                    </motion.span>
                  </motion.button>
                </Link>
            </motion.div>

            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(#13ecc8 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
        </motion.div>
    </section>
  )
}

export default CTA