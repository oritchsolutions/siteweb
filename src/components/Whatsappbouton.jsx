import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
import WhatsAppIcon from "../assets/whatsapp-svgrepo-com.svg"

export default function Whatsappbouton() {
  return (
    <motion.a
      href="https://wa.me/237674983236?text=Bonjour%2C%20je%20souhaite%20obtenir%20plus%20d'informations%20sur%20vos%20services%20et%20comment%20vous%20pouvez%20m'aider."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5
        bg-green-500 hover:bg-green-600
        text-white
        w-14 h-14
        flex items-center justify-center
        rounded-full
        shadow-lg
        transition
        z-50
      "
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5,
        delay: 1,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.15,
        rotate: 360,
        boxShadow: "0 10px 30px rgba(34, 197, 94, 0.5)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.img 
        src={WhatsAppIcon} 
        alt="WhatsApp" 
        className="w-9 h-9"
        animate={{ 
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Cercle de pulsation */}
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ 
          scale: [1, 1.5, 1.5],
          opacity: [0.7, 0, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.a>
  )
}