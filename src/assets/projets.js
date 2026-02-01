import assets from "../assets/assets";

const projects = [
  {
    id: 1,
    title: "Gestion des étudiants",
    type: "mobile",
    challenge: "Centraliser la gestion des étudiants et de leurs notes de manière fiable.",
    solution: "Application web permettant l’ajout, la consultation et la gestion des notes par classe.",
    tech: ["React", "Flask", "MySQL"],
    image: assets.equipe
  },
  {
    id: 3,
    title: "Dashboard Admin",
    type: "web",
    challenge: "Visualiser rapidement des données complexes pour la prise de décision.",
    solution: "Dashboard interactif avec graphiques et statistiques en temps réel.",
    tech: ["React", "Tailwind", "Chart.js"],
    image: assets.equipe
  },

  // 🔹 NOUVEAUX PROJETS
  {
    id: 4,
    title: "Gestion Hospitalière",
    type: "web",
    challenge: "Optimiser la gestion des patients, rendez-vous et dossiers médicaux.",
    solution: "Système web centralisé pour la gestion des patients et du personnel médical.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    image: assets.equipe
  },
  {
    id: 5,
    title: "Plateforme E-commerce",
    type: "web",
    challenge: "Faciliter la vente en ligne pour les petites entreprises locales.",
    solution: "Boutique en ligne avec panier, paiement et gestion des commandes.",
    tech: ["React", "Node.js", "MongoDB"],
    image: assets.equipe
  },
  {
    id: 6,
    title: "Application de Réparation IT",
    type: "desktop",
    challenge: "Suivre efficacement les réparations de matériels informatiques.",
    solution: "Application de gestion des clients, matériels et interventions techniques.",
    tech: ["Java", "SQLite"],
    image: assets.equipe
  }
];

export default projects;
