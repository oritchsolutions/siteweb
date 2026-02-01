import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Link } from "react-router-dom";
const Savoirplus = () => {
  return (
    <section className='border-y border-grey-border bg-background-off py-12
    dark:border-border-dark dark:bg-background-secondary-dark'>
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center
        sm:px-6 lg:px-8'>
            <motion.h2 
              className='text-2xl font-bold text-dark sm:text-3xl dark:text-white'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Bâtir le futur, une ligne de code à la fois
            </motion.h2>

            <motion.p 
              className='max-w-2xl text-grey dark:text-text-grey'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Oritch Solution se consacre à l'innovation, à la qualité et à l'impact commercial tangible grâce à des technologies de pointe. Nous ne nous contentons pas d'écrire du code, nous résolvons des problèmes.
            </motion.p>
            <Link to="/equipe">
           
            <motion.a 
              href="" 
              className='flex items-center gap-2 font-semibold text-primary hover:text-primary-hover
              hover:underline dark:text-primary-dark dark:hover:text-primary-dark'
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              En savoir plus sur nous 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </motion.a>
             </Link>
        </div>
    </section>
  )
}

export default Savoirplus