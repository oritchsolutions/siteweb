import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import assets from "../../assets/assets"

const directionTeam = [
  {
    name: "Toya Tankwa Joel Sorel",
    role: "Developpeur",
    description: "Développeur Web | Création de sites modernes, rapides et adaptés aux besoins des entreprises🔹Passionné par le design, le code propre et l’expérience utilisateur",
    image: assets.image_toya,
  },
]

const engineeringTeam = [
  {
    name: "Podo Yann Théophile",
    role: "Développeur logiciel",
    description: "Passionné par l’algorithmique, les mathématiques et la programmation, je m’intéresse particulièrement aux systèmes d’information et aux solutions logicielles innovantes.",
    image: assets.image_podo,
  },
  {
    name: "Véra Estelle Mamchie",
    role: ".NET Developer & QA Tester",
    description: "Focused on reliable and high-quality software. Let’s connect !",
    image: assets.image_vera,
  },
  {
    name: "Joseph Mballe",
    role: "Développeur logiciel",
    description: "J'aime transformer des idées complexes en solutions logicielles simples et élégantes, avec un code propre et maintenable.",
    image: assets.image_mballe,
  },
  {
    name: "Clovis Finka",
    role: "Développeur web fullstack",
    description: "🥇Je crée des solutions web performantes, responsives, sécurisées pour répondre à vos besoins.",
    image: assets.image_finka
  },
]

const Team = () => {
  return (
    <section className='w-full px-5 md:px-10 py-24 flex justify-center bg-white dark:bg-dark'>
      <div className='max-w-300 w-full'>

        {/* Direction & Stratégie */}
        <div className='mb-20'>
          <motion.div 
            className='flex items-center gap-4 mb-12'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className='h-8 w-1.5 bg-primary dark:bg-primary-dark rounded-full'
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            ></motion.div>
            <motion.h3 
              className='text-dark dark:text-white text-2xl font-black tracking-tight'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Direction & Stratégie
            </motion.h3>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {directionTeam.map((member, index) => (
              <motion.div 
                key={index} 
                className='bg-white dark:bg-team rounded-2xl overflow-hidden shadow-sm dark:shadow-2xl hover:shadow-xl hover:-translate-y-1 transition-all group'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              >
                <motion.div 
                  className='aspect-4/5 relative overflow-hidden bg-cover bg-center' 
                  style={{ backgroundImage: `url(${member.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                ></motion.div>
                <div className='p-8'>
                  <motion.h4 
                    className='text-dark dark:text-white text-2xl font-black group-hover:text-primary dark:group-hover:text-primary-dark transition-colors'
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {member.name}
                  </motion.h4>
                  <motion.p 
                    className='text-primary dark:text-primary-dark text-sm font-bold uppercase tracking-widest mt-1 mb-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p 
                    className='text-grey dark:text-text-grey text-base leading-relaxed font-medium'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  >
                    {member.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ingénierie & Design */}
        <div>
          <motion.div 
            className='flex items-center gap-4 mb-12'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className='h-8 w-1.5 bg-primary dark:bg-primary-dark rounded-full'
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            ></motion.div>
            <motion.h3 
              className='text-dark dark:text-white text-2xl font-black tracking-tight'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ingénierie & Design
            </motion.h3>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {engineeringTeam.map((member, index) => (
              <motion.div 
                key={index} 
                className='bg-white dark:bg-team rounded-xl p-6 shadow-sm hover:shadow-lg transition-all text-center group'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(19, 236, 200, 0.15)" }}
              >
                <motion.div 
                  className='w-24 h-24 mx-auto rounded-full mb-6 flex items-center justify-center border-2 border-transparent group-hover:border-primary transition-all duration-300 bg-center bg-cover'
                  style={{ backgroundImage: `url(${member.image})` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                <motion.h4 
                  className='text-dark dark:text-white text-lg font-black mb-1'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {member.name}
                </motion.h4>

                <motion.p 
                  className='text-primary dark:text-primary-dark text-xs font-black uppercase tracking-wide mb-3'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  {member.role}
                </motion.p>

                <motion.p 
                  className='text-slate-600 dark:text-text-grey text-xs font-medium leading-relaxed'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  {member.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Team