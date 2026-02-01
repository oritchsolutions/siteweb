import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import assets from '../assets/assets'
import { Link } from "react-router-dom"
import { MapPin, Mail, Phone } from "lucide-react"

const Footer = () => {
  const entrepriseLinks = [
    { to: "/equipe", label: "À propos" },
    { to: "/contactez-nous", label: "Contact" }
  ]

  const servicesLinks = [
    { to: "/services", label: "Développement Web" },
    { to: "/services", label: "Applications Mobiles" },
    { to: "/services", label: "Design UI/UX" }
  ]

  const contactInfo = [
    { icon: MapPin, text: "Douala, Cameroun" },
    { icon: Mail, text: "hello@oritchsolution.com" },
    { icon: Phone, text: "+237 674 98 32 36" }
  ]

  return (
    <footer className='border-t border-grey-border dark:border-border-dark bg-background-off dark:bg-background-secondary-dark pt-16 pb-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg-px-8'>
            <div className='grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12'>
                {/* Logo et description */}
                <motion.div 
                  className='flex flex-col gap-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                    <motion.div 
                      className='flex items-center gap-2'
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                        <img src={assets.logo} alt="Logo Oritch Solution" className='w-10 sm:w-10' />
                        <span className='text-lg font-bold text-dark dark:text-white'>Oritch Solution</span>
                    </motion.div>
                    <p className='text-sm text-grey dark:text-text-grey'>
                      Donner aux entreprises les moyens d'agir avec des solutions logicielles évolutives et performantes adaptées à l'ère numérique.
                    </p>
                    <div className='flex gap-4'>
                        <motion.a 
                          href="" 
                          className='text-grey hover:text-primary transition-colors'
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                            <span className='sr-only'>Twitter</span>
                            <svg className='h-5 w-5' viewBox='0 0 24 24'></svg>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Entreprise */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h3 className='text-sm font-bold uppercase tracking-wider text-dark dark:text-white mb-4'>Entreprise</h3>
                    <ul className="mt-4 space-y-4">
                        {entrepriseLinks.map((link, index) => (
                          <motion.li
                            key={link.to}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                          >
                            <Link 
                              to={link.to} 
                              className="text-sm text-grey dark:text-text-grey hover:text-primary dark:hover:text-primary-dark transition-colors inline-block"
                            >
                              {link.label}
                            </Link>
                          </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className='text-sm font-bold uppercase tracking-wider text-dark dark:text-white mb-4'>Services</h3>
                    <ul className="mt-4 space-y-4">
                        {servicesLinks.map((link, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                          >
                            <Link 
                              to={link.to} 
                              className="text-sm text-grey dark:text-text-grey hover:text-primary dark:hover:text-primary-dark transition-colors inline-block"
                            >
                              {link.label}
                            </Link>
                          </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className='text-sm font-bold uppercase tracking-wider text-dark dark:text-white mb-4'>Contact</h3>
                    <ul className='mt-4 space-y-4'>
                        {contactInfo.map((item, index) => {
                          const Icon = item.icon
                          return (
                            <motion.li 
                              key={index}
                              className='flex items-center gap-2 text-sm text-grey dark:text-text-grey'
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                              >
                                <Icon className="h-4 w-4 text-primary dark:text-primary-dark"/>
                              </motion.div>
                              {item.text}
                            </motion.li>
                          )
                        })}
                    </ul>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div 
              className='border-t border-grey-border dark:border-border-dark pt-8 text-center sm:text-left'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p className='text-sm text-grey dark:text-text-grey'>© 2026 Oritch Solution. Tous droits réservés.</p>
            </motion.div>
        </div>
    </footer>
  )
}

export default Footer