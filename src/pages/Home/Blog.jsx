import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'

const tabBlog = [
  {
    date: "12 Jan 2026",
    titre: "L'avenir de l'IA dans le développement web",
    description:
      "Comment l'intelligence artificielle remodèle la façon dont nous construisons et interagissons avec les applications web à l'ère moderne.",
    lien: "#"
  },
  {
    date: "29 Jan 2026",
    titre: "Pourquoi React domine encore le Front-End",
    description:
      "Analyse des raisons pour lesquelles React reste le framework front-end le plus utilisé par les équipes modernes.",
    lien: "#"
  },
  {
    date: "01 Fev 2026",
    titre: "Sécurité Web : les bonnes pratiques en 2024",
    description:
      "Les techniques essentielles pour sécuriser vos applications web face aux nouvelles menaces.",
    lien: "#"
  }
]

const Blog = () => {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div 
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-dark sm:text-4xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Dernières Actualités
            </motion.h2>
            <motion.p 
              className="mt-2 text-grey dark:text-text-grey"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tendances, tutoriels et actualités technologiques.
            </motion.p>
          </div>

          <motion.a
            href="#"
            className="flex items-center gap-2 text-sm font-bold text-primary
            hover:text-primary-hover transition-colors
            dark:text-primary-dark dark:hover:text-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ x: 5 }}
          >
            Visiter le Blog →
          </motion.a>
        </motion.div>

        {/* Articles */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tabBlog.map((post, index) => (
            <motion.article
              key={index}
              className="flex flex-col gap-3 rounded-lg border border-transparent
              p-4 transition-all hover:border-grey-border hover:bg-background-off
              hover:shadow-sm dark:hover:bg-background-secondary-dark
              dark:hover:border-border-dark"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.time 
                className="text-xs font-bold text-primary dark:text-primary-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              >
                {post.date}
              </motion.time>

              <motion.h3 
                className="text-xl font-bold text-dark hover:text-primary
                cursor-pointer transition-colors
                dark:text-white dark:hover:text-primary-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              >
                {post.titre}
              </motion.h3>

              <motion.p 
                className="text-sm text-grey line-clamp-3 dark:text-text-grey"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              >
                {post.description}
              </motion.p>

              <motion.a
                href={post.lien}
                className="mt-auto text-sm font-medium text-dark-secondary
                hover:text-primary hover:underline
                dark:text-white dark:hover:text-primary-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                whileHover={{ x: 3 }}
              >
                Lire la suite
              </motion.a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog