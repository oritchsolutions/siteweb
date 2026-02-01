import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import { Handshake } from "lucide-react"

const Synergie = () => {
  return (
    <section className='border-y border-grey-border bg-background-off
    dark:border-border-dark dark:bg-background-secondary-dark w-full px-5 md:px-10
    py-20 flex justify-center'>
       <div className='max-w-212.5 text-center'>
        <motion.div 
          className='inline-block text-primary dark:text-primary-dark p-4 rounded-2xl bg-white dark:bg-dark shadow-sm mb-8'
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
            <Handshake className="w-10 h-10" />
        </motion.div>

        <motion.h2 
          className='text-dark dark:text-white text-3xl md:text-4xl font-black mb-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Une synergie de compétences uniques
        </motion.h2>

        <motion.p 
          className='text-grey dark:text-text-grey text-lg md:text-xl leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Chez Oritch Solution, nous ne sommes pas seulement des collègues, nous sommes une équipe unie par une passion commune pour l'excellence. Notre force réside dans notre diversité : ingénieurs backend chevronnés, designers UX intuitifs et chefs de projet agiles collaborent étroitement pour garantir le succès de chaque ligne de code et de chaque pixel.
        </motion.p>
       </div>
    </section>
  )
}

export default Synergie