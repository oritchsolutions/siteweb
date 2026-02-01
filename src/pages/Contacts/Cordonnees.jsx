import { Mail, Phone, Send, Clock  } from "lucide-react";
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Cordonnees = () => {
  return (
    <section className='w-full px-5 md:px-10 py-16 bg-background-off dark:bg-darkk relative'>
        <div className='max-w-300 w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16'>
            <motion.div 
              className='lg:col-span-5 flex flex-col gap-8'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
                <motion.h2 
                  className='text-2xl font-bold text-navy'
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Nos coordonnées
                </motion.h2>

                <div className='space-y-6'>
                    <motion.div 
                      className='flex items-start gap-4'
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                        <motion.div 
                          className='w-12 h-12 rounded-lg bg-white dark:bg-team shadow-sm flex items-center justify-center shrink-0 text-primary'
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Mail className="h-6 w-6 text-primary dark:text-primary-dark" />
                        </motion.div>
                        <div>
                            <p className='text-sm font-medium text-grey dark:text-gray-400 mb-1'>Email</p>
                            <p className='text-navy font-bold hover:text-primary dark:hover:text-primary-dark transition-colors'>contact@oritch-solution.com</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                      className='flex items-start gap-4'
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                        <motion.div 
                          className='w-12 h-12 rounded-lg bg-white dark:bg-team shadow-sm flex items-center justify-center shrink-0 text-primary'
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Phone className="h-6 w-6 text-primary dark:text-primary-dark" />
                        </motion.div>
                        <div>
                            <p className='text-sm font-medium text-grey dark:text-gray-400 mb-1'>Téléphone</p>
                            <p className='text-navy font-bold hover:text-primary dark:hover:text-primary-dark transition-colors'>+237 674 98 32 36</p>
                        </div>
                    </motion.div>
                    <motion.div 
                      className='flex items-start gap-4'
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                        <motion.div 
                          className='w-12 h-12 rounded-lg bg-white dark:bg-team shadow-sm flex items-center justify-center shrink-0 text-primary'
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Clock className="h-6 w-6 text-primary dark:text-primary-dark" />
                        </motion.div>
                        <div>
                            <p className='text-sm font-medium text-grey dark:text-gray-400 mb-1'>Horaires</p>
                            <p className='text-navy font-bold hover:text-primary dark:hover:text-primary-dark transition-colors'>Lun - Ven : 09h00 - 18h00</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="bg-white dark:bg-team rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
                    <motion.h2 
                      className="text-2xl font-bold text-navy mb-6 relative z-10"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Envoyez-nous un message
                    </motion.h2>

                    <form action="" method="post">
                        <motion.div 
                          className="flex flex-col gap-4 mb-5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <label className="text-sm font-medium text-anthracite">Nom & Prénom</label>
                            <input 
                              type="text" 
                              required 
                              placeholder="Jean Fotso" 
                              name="" 
                              id="" 
                              className="w-full bg-gray-50 dark:bg-[#111817] border border-gray-200 dark:border-[#272f2d] rounded-lg px-4 py-3 text-navy placeholder-gray-400 focus:outline-none focus:border-primary dark:focus:border-primary-dark focus:ring-1 focus:ring-primary transition-all"
                            />
                        </motion.div>

                        <motion.div 
                          className="flex flex-col gap-4 mb-5"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <label className="text-sm font-medium text-anthracite">Message</label>
                            <textarea 
                              type="text" 
                              name="" 
                              id="" 
                              className="w-full bg-gray-50 dark:bg-[#111817] border border-gray-200 dark:border-[#272f2d] rounded-lg px-4 py-3 text-navy placeholder-gray-400 focus:outline-none focus:border-primary dark:focus:border-primary-dark focus:ring-1 focus:ring-primary transition-all"
                              placeholder="Décrivez votre projet ou votre besoin en quelques lignes..." 
                              rows="5" 
                              required
                            />
                        </motion.div>

                        <motion.div 
                          className="flex justify-end"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <motion.button 
                              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary-dark cursor-pointer px-8 text-base font-bold text-dark shadow-lg shadow-primary/20 hover:bg-opacity-90 hover:translate-y-0.5 transition-all duration-200"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                                Envoyer
                                <Send className="w-6 h-6 ml-2" />
                            </motion.button>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Cordonnees