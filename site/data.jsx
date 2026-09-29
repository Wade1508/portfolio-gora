// Tous les textes du site, en français et en anglais. Modifier ici pour changer les contenus.

// Couleur de chaque statut de projet (badges, frise, compétences)
const STATUS_COLORS = {
  live: 'oklch(0.84 0.17 155)',
  done: 'oklch(0.86 0.15 200)',
  progress: 'oklch(0.85 0.14 80)',
  learning: 'oklch(0.8 0.12 290)',
  practice: 'oklch(0.8 0.12 350)',
};

const CONTACT = {
  email: 'goradia1508@gmail.com',
  github: { label: 'Wade1508', href: 'https://github.com/Wade1508' },
  linkedin: { label: 'Gora Dia Wade', href: 'https://www.linkedin.com/in/gora-dia-wade-324575253/' },
  location: 'Longueuil, Québec, Canada',
};

const CERTS = [
  { name: 'Angular', years: '2022–2023' },
  { name: 'JavaScript', years: '2023–2024' },
  { name: 'Node.js', years: '2024–2025' },
];

// Filtres des projets, dans l'ordre d'affichage
const FILTERS = ['all', 'live', 'progress', 'learning'];

const DATA = {
  fr: {
    skip: 'Aller au contenu',
    nav: [
      { href: '#apropos', label: 'À propos' },
      { href: '#projets', label: 'Projets' },
      { href: '#competences', label: 'Compétences' },
      { href: '#parcours', label: 'Parcours' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      meta: 'Longueuil, Québec · Objectif : ingénieur en IA',
      title: 'Développeur web orienté automatisation et intelligence artificielle',
      tagline: "Formé en génie logiciel, je construis des sites web, des automatisations et des outils propulsés par l'IA pour répondre à des besoins concrets d'entreprises.",
      cta1: 'Voir mes projets',
      cta2: 'Me contacter',
      photoAlt: 'Portrait de Gora Dia Wade',
    },
    sec: {
      aboutKicker: 'profil', about: 'À propos',
      projectsKicker: 'travaux', projects: 'Projets',
      skillsKicker: 'stack', skills: 'Compétences',
      journeyKicker: 'formation', journey: 'Parcours',
      certsKicker: 'certifs', certs: 'Certifications',
      langKicker: 'profil', lang: 'Langues et intérêts',
    },
    about: "Je m'appelle Gora Dia Wade. Après deux années de génie logiciel au Sénégal, je développe mes compétences en développement web, en automatisation et en intelligence artificielle. J'apprends en construisant : des sites en React mis en ligne, des workflows n8n, et un assistant personnel sur Claude Code. Mon objectif : poursuivre en Licence 3 puis en Master en Data Science et IA, et construire des solutions pratiques pour les entreprises, au Canada comme au Sénégal.",
    filterLabel: 'Filtrer par statut',
    filters: { all: 'Tous', live: 'En ligne', progress: 'En cours', learning: 'Apprentissage' },
    noProjects: 'Aucun projet pour ce filtre.',
    badges: { live: 'En ligne', done: 'Réalisé', progress: 'En cours', learning: 'Apprentissage', practice: 'Pratique personnelle' },
    projects: [
      {
        status: 'live', title: 'IA Preneurs Marketplace',
        rows: [
          ['Besoin', 'Mettre en relation des entreprises (PME) avec des experts IA formés par une académie.'],
          ['Mon rôle', 'Rédaction du brief, conception avec Claude Design, intégration en React, versionnement Git et mise en ligne sur Netlify avec déploiement automatique.'],
          ['État', "Page d'accueil en ligne ; pages annuaire, profil expert et espace expert à venir."],
        ],
        tagsLabel: 'Technologies', tags: ['React', 'JavaScript', 'CSS', 'Claude Design', 'Git', 'GitHub', 'Netlify'],
        link: { label: 'Voir le site', href: 'https://reliable-mooncake-62cb24.netlify.app' },
      },
      {
        status: 'done', title: 'Jarvis, assistant personnel sur Claude Code',
        rows: [
          ['Besoin', 'Un assistant IA qui connaît mon contexte et automatise mes tâches de développement.'],
          ['Mon rôle', "Configuration et personnalisation à partir du Jarvis Starter Kit : fichiers de contexte, commandes personnalisées (/prime, /update, /morning, /commit avec vérification des secrets), skill de veille, gestion des clés d'API et versionnement GitHub."],
        ],
        tagsLabel: 'Technologies', tags: ['Claude Code', 'VS Code', 'Git', 'GitHub', 'Markdown'],
        note: 'Dépôt privé : pas de lien public.',
      },
      {
        status: 'progress', title: 'AutoClient Québec',
        rows: [
          ['Besoin', "Aider les PME (d'abord les entreprises de nettoyage au Québec) à traiter, qualifier et suivre leurs demandes clients."],
          ['Fonctionnement conçu', "Formulaire → webhook n8n → qualification et score du prospect par l'IA → enregistrement dans Google Sheets → notification à l'entreprise → réponse et relances."],
          ['État', 'Concept et architecture conçus ; première version et démonstration en construction.'],
        ],
        tagsLabel: 'Technologies', tags: ['n8n', 'Webhooks', "API d'IA", 'Google Sheets'],
      },
      {
        status: 'learning', title: 'Assistant WhatsApp IA pour une boutique',
        rows: [
          ['Besoin', "Permettre aux clients d'une boutique de vêtements de discuter, consulter des produits et commander sur WhatsApp, avec alerte au vendeur."],
          ['Architecture prévue', 'WhatsApp Business Platform → backend Flask → base SQLite → réponse générée par IA → notification vendeur, automatisations n8n.'],
          ['État', "Projet cadré et découpé en étapes d'apprentissage."],
        ],
        tagsLabel: 'Technologies prévues', tags: ['Python', 'Flask', 'SQLite', 'API REST', 'WhatsApp Business Platform', 'n8n'],
      },
      {
        status: 'practice', title: 'Création visuelle assistée par IA',
        rows: [
          ['Pratique', 'Portraits composites, noir et blanc, sépia, retouche de lumière et de netteté, formats verticaux pour TikTok.'],
          ['Approche', "Briefs visuels précis, prompting d'image, préservation des visages, itérations jusqu'à un rendu naturel."],
        ],
        tagsLabel: 'Compétences', tags: ["Prompting d'image", 'Retouche', 'Formats verticaux'],
        note: 'Aucune image publiée : les créations montrent des personnes privées.',
      },
    ],
    // [type, titre, compétences]. Type : used | notions | learning | ai (change le style)
    skills: [
      ['used', 'Utilisé en projet', ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub', 'Netlify', 'Claude Code', 'n8n']],
      ['notions', 'Notions acquises', ['Node.js', 'Next.js', 'Angular', 'API REST', 'Webhooks', 'SQL Server']],
      ['learning', 'En apprentissage', ['Python', 'Machine Learning', 'Data Science']],
      ['ai', 'Outils IA', ['Claude', 'Claude Code', 'Claude Design', 'ChatGPT', 'Codex', 'Gemini', 'NotebookLM']],
    ],
    // [type, quand, titre, détail]. Type : goal | past | current (change la couleur du point)
    timeline: [
      ['goal', 'Objectif 2027', 'Licence 3, puis Master en Data Science et IA', ''],
      ['past', '2024', 'Technique informatique', 'Cégep de Granby (Québec) · une session'],
      ['past', '2021–2023', 'Licence 1 et 2 en génie logiciel', "Institut Supérieur d'Informatique (Sénégal) · 120 crédits validés"],
      ['past', '2020–2021', 'Baccalauréat scientifique (série S2)', 'Lycée Seydina Limamou Laye (Sénégal)'],
      ['current', 'En cours', 'Formation en Machine Learning', 'Coursera'],
    ],
    langs: [['Français', 'Courant'], ['Anglais', 'Lu et écrit, en progression vers B2'], ['Intérêts', 'Football, musique']],
    contact: { title: 'Travaillons ensemble', emailCta: 'Écrire un courriel', locLabel: 'Localisation' },
    footer: '© 2026 Gora Dia Wade. Conçu avec Claude Design et React.',
    backTop: 'Haut de page',
  },

  en: {
    skip: 'Skip to content',
    nav: [
      { href: '#apropos', label: 'About' },
      { href: '#projets', label: 'Projects' },
      { href: '#competences', label: 'Skills' },
      { href: '#parcours', label: 'Background' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      meta: 'Longueuil, Quebec · Goal: AI engineer',
      title: 'Web developer focused on automation and artificial intelligence',
      tagline: 'With a background in software engineering, I build websites, automations and AI-powered tools that address real business needs.',
      cta1: 'View my projects',
      cta2: 'Get in touch',
      photoAlt: 'Portrait of Gora Dia Wade',
    },
    sec: {
      aboutKicker: 'profile', about: 'About',
      projectsKicker: 'work', projects: 'Projects',
      skillsKicker: 'stack', skills: 'Skills',
      journeyKicker: 'education', journey: 'Background',
      certsKicker: 'certs', certs: 'Certifications',
      langKicker: 'profile', lang: 'Languages & interests',
    },
    about: "My name is Gora Dia Wade. After two years of software engineering studies in Senegal, I'm building my skills in web development, automation and artificial intelligence. I learn by building: React websites deployed to production, n8n workflows, and a personal assistant on Claude Code. My goal: continue with a third-year bachelor's (Licence 3) and then a Master's in Data Science and AI, and build practical solutions for businesses in both Canada and Senegal.",
    filterLabel: 'Filter by status',
    filters: { all: 'All', live: 'Live', progress: 'In progress', learning: 'Learning' },
    noProjects: 'No projects for this filter.',
    badges: { live: 'Live', done: 'Completed', progress: 'In progress', learning: 'Learning', practice: 'Personal practice' },
    projects: [
      {
        status: 'live', title: 'IA Preneurs Marketplace',
        rows: [
          ['Need', 'Connect small and medium-sized businesses with AI experts trained by an academy.'],
          ['My role', 'Wrote the brief, designed with Claude Design, built it in React, versioned with Git and deployed on Netlify with continuous deployment.'],
          ['Status', 'Homepage live; directory, expert profile and expert dashboard pages coming next.'],
        ],
        tagsLabel: 'Tech stack', tags: ['React', 'JavaScript', 'CSS', 'Claude Design', 'Git', 'GitHub', 'Netlify'],
        link: { label: 'Visit the site', href: 'https://reliable-mooncake-62cb24.netlify.app' },
      },
      {
        status: 'done', title: 'Jarvis, a personal assistant on Claude Code',
        rows: [
          ['Need', 'An AI assistant that knows my context and automates my development tasks.'],
          ['My role', 'Set up and customized from the Jarvis Starter Kit: context files, custom commands (/prime, /update, /morning, /commit with secret scanning), a tech-watch skill, API key management and GitHub versioning.'],
        ],
        tagsLabel: 'Tech stack', tags: ['Claude Code', 'VS Code', 'Git', 'GitHub', 'Markdown'],
        note: 'Private repository: no public link.',
      },
      {
        status: 'progress', title: 'AutoClient Québec',
        rows: [
          ['Need', 'Help small businesses (starting with cleaning companies in Quebec) handle, qualify and follow up on customer inquiries.'],
          ['Designed workflow', 'Form → n8n webhook → AI lead qualification and scoring → saved to Google Sheets → business notified → reply and follow-ups.'],
          ['Status', 'Concept and architecture designed; first version and demo under construction.'],
        ],
        tagsLabel: 'Tech stack', tags: ['n8n', 'Webhooks', 'AI APIs', 'Google Sheets'],
      },
      {
        status: 'learning', title: 'AI WhatsApp assistant for a clothing store',
        rows: [
          ['Need', "Let a clothing store's customers chat, browse products and place orders on WhatsApp, with an alert sent to the seller."],
          ['Planned architecture', 'WhatsApp Business Platform → Flask backend → SQLite database → AI-generated reply → seller notification, n8n automations.'],
          ['Status', 'Project scoped and broken down into learning milestones.'],
        ],
        tagsLabel: 'Planned stack', tags: ['Python', 'Flask', 'SQLite', 'REST APIs', 'WhatsApp Business Platform', 'n8n'],
      },
      {
        status: 'practice', title: 'AI-assisted visual creation',
        rows: [
          ['Practice', 'Composite portraits, black and white, sepia, light and sharpness retouching, vertical formats for TikTok.'],
          ['Approach', 'Precise visual briefs, image prompting, face preservation, iterating until the result looks natural.'],
        ],
        tagsLabel: 'Skills', tags: ['Image prompting', 'Retouching', 'Vertical formats'],
        note: 'No images published: the work features private individuals.',
      },
    ],
    skills: [
      ['used', 'Used in projects', ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub', 'Netlify', 'Claude Code', 'n8n']],
      ['notions', 'Working knowledge', ['Node.js', 'Next.js', 'Angular', 'REST APIs', 'Webhooks', 'SQL Server']],
      ['learning', 'Currently learning', ['Python', 'Machine Learning', 'Data Science']],
      ['ai', 'AI tools', ['Claude', 'Claude Code', 'Claude Design', 'ChatGPT', 'Codex', 'Gemini', 'NotebookLM']],
    ],
    timeline: [
      ['goal', 'Goal 2027', "Third-year bachelor's (Licence 3), then a Master's in Data Science and AI", ''],
      ['past', '2024', 'Computer Science Technology', 'Cégep de Granby (Quebec) · one semester'],
      ['past', '2021–2023', "First and second year of a bachelor's in Software Engineering (Licence 1 & 2)", "Institut Supérieur d'Informatique (Senegal) · 120 credits completed"],
      ['past', '2020–2021', 'Scientific Baccalaureate (S2 track)', 'Lycée Seydina Limamou Laye (Senegal)'],
      ['current', 'Ongoing', 'Machine Learning course', 'Coursera'],
    ],
    langs: [['French', 'Fluent'], ['English', 'Reading and writing, progressing toward B2'], ['Interests', 'Soccer, music']],
    contact: { title: "Let's work together", emailCta: 'Send an email', locLabel: 'Location' },
    footer: '© 2026 Gora Dia Wade. Built with Claude Design and React.',
    backTop: 'Back to top',
  },
};
