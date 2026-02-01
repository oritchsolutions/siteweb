import React, {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import Whatsappbouton from './components/Whatsappbouton.jsx'
import AppRoutes from "./routes/AppRoutes.jsx";
import Footer from './components/Footer.jsx'

const App = () => {
    const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "light"
      }
      return "light"
    })

    useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark")
      localStorage.setItem("theme", theme)
    }, [theme])

  return (
    <div className='bg-white dark:bg-dark text-slate-900 dark:text-white font-display'>
      <Header theme={theme} setTheme={setTheme} />
        <AppRoutes />
        <Whatsappbouton />
      <Footer/>
    </div>
  )
}

export default App