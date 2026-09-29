# Prompt Claude Design : portfolio de Gora Dia Wade

> À copier-coller dans Claude Design (https://claude.ai/design). Tout ce qui est sous la ligne.
> Joindre la photo `site/assets/photo-gora.jpg` au message dans Claude Design.

---

Crée le portfolio personnel de Gora Dia Wade : un site d'une seule page qui défile, destiné aux employeurs et recruteurs qui cliquent sur le lien de son CV. En moins d'une minute, ils doivent comprendre qui il est, ce qu'il sait faire, voir ses projets et pouvoir le contacter.

## Règle absolue : l'honnêteté

Utilise UNIQUEMENT les contenus ci-dessous. N'invente aucun client, témoignage, chiffre, diplôme, entreprise ou lien. Chaque projet affiche clairement son statut. Ne présente jamais « ingénieur IA » comme un titre acquis : c'est son objectif.

## Format technique (obligatoire)

Site statique en React chargé par CDN, sans build ni npm, avec exactement ces fichiers :

- `index.html` : charge React 18, ReactDOM et Babel standalone depuis unpkg, le CSS, puis les scripts `text/babel` dans cet ordre : `data.jsx`, `components.jsx`, `homepage.jsx`
- `data.jsx` : TOUS les textes du site, en français ET en anglais, sous forme d'objets (`fr` / `en`)
- `components.jsx` : les briques réutilisables (boutons, badges de statut, cartes projet, etc.)
- `homepage.jsx` : les sections de la page et l'affichage final
- `assets/styles.css` : tout le style, couleurs en variables CSS dans `:root`

## Bilingue FR / EN

Un bouton FR | EN dans la barre de navigation bascule toute la page. Français par défaut. Mémoriser le choix dans localStorage. Traduis tous les contenus ci-dessous en anglais professionnel et naturel.

## Direction visuelle : sombre et tech

- Fond très sombre (presque noir, légèrement bleuté), texte clair, une couleur d'accent vive (cyan électrique ou vert néon) et une couleur secondaire discrète
- Typographie moderne sans empattement, avec une police monospace pour les petits détails techniques (tags, statuts, dates)
- Cartes aux bords fins et lumineux, ombres subtiles, légers effets au survol
- Animations d'apparition douces au défilement, sans excès
- Responsive et mobile-first : beaucoup de recruteurs ouvrent le lien sur leur téléphone
- Accessible : bons contrastes, navigation au clavier

## Sections, dans l'ordre

### 1. Barre de navigation (fixe)
Logo texte « GDW » ou « Gora Dia Wade », liens vers les sections, bouton FR | EN.

### 2. Accueil
- Nom : **Gora Dia Wade**
- Titre : **Développeur web orienté automatisation et intelligence artificielle**
- Accroche : « Formé en génie logiciel, je construis des sites web, des automatisations et des outils propulsés par l'IA pour répondre à des besoins concrets d'entreprises. »
- Petite ligne : « Longueuil, Québec · Objectif : ingénieur en IA »
- Boutons : « Voir mes projets » et « Me contacter »
- Photo de Gora : `assets/photo-gora.jpg` (portrait vertical 941×1672, fond brun chaud dégradé, lunettes de vue, polo noir). Je la joins à ce message. Cadrer sur le visage et les épaules (object-fit: cover, centré en haut), en rond ou aux coins arrondis, avec un léger halo de la couleur d'accent. Le fond brun chaud doit s'intégrer harmonieusement au thème sombre.

### 3. À propos
« Je m'appelle Gora Dia Wade. Après deux années de génie logiciel au Sénégal, je développe mes compétences en développement web, en automatisation et en intelligence artificielle. J'apprends en construisant : des sites en React mis en ligne, des workflows n8n, et un assistant personnel sur Claude Code. Mon objectif : poursuivre en Licence 3 puis en Master en Data Science et IA, et construire des solutions pratiques pour les entreprises, au Canada comme au Sénégal. »

### 4. Projets
Des cartes avec : titre, badge de statut coloré, description courte (le besoin), mon rôle, technologies (tags) et bouton de lien si disponible. Filtre par statut : Tous · En ligne · En cours · Apprentissage.

**IA Preneurs Marketplace** — Statut : ✅ En ligne
- Besoin : mettre en relation des entreprises (PME) avec des experts IA formés par une académie.
- Rôle : rédaction du brief, conception avec Claude Design, intégration en React, versionnement Git et mise en ligne sur Netlify avec déploiement automatique.
- État : page d'accueil en ligne, pages annuaire, profil expert et espace expert à venir.
- Technologies : React, JavaScript, CSS, Claude Design, Git, GitHub, Netlify
- Lien : « Voir le site » → https://reliable-mooncake-62cb24.netlify.app

**Jarvis, assistant personnel sur Claude Code** — Statut : ✅ Réalisé
- Besoin : un assistant IA qui connaît mon contexte et automatise mes tâches de développement.
- Rôle : configuration et personnalisation à partir du Jarvis Starter Kit : fichiers de contexte, commandes personnalisées (/prime, /update, /morning, /commit avec vérification des secrets), skill de veille, gestion des clés d'API et versionnement GitHub.
- Technologies : Claude Code, VS Code, Git, GitHub, Markdown
- Pas de lien (dépôt privé).

**AutoClient Québec** — Statut : 🔧 En cours
- Besoin : aider les PME (d'abord les entreprises de nettoyage au Québec) à traiter, qualifier et suivre leurs demandes clients.
- Fonctionnement conçu : formulaire → webhook n8n → qualification et score du prospect par l'IA → enregistrement dans Google Sheets → notification à l'entreprise → réponse et relances.
- État : concept et architecture conçus, première version et démonstration en construction.
- Technologies : n8n, webhooks, API d'IA, Google Sheets

**Assistant WhatsApp IA pour une boutique** — Statut : 📚 Apprentissage
- Besoin : permettre aux clients d'une boutique de vêtements de discuter, consulter des produits et commander sur WhatsApp, avec alerte au vendeur.
- Architecture prévue : WhatsApp Business Platform → backend Flask → base SQLite → réponse générée par IA → notification vendeur, automatisations n8n.
- État : projet cadré et découpé en étapes d'apprentissage.
- Technologies prévues : Python, Flask, SQLite, API REST, WhatsApp Business Platform, n8n

**Création visuelle assistée par IA** — Statut : 🎨 Pratique personnelle
- Portraits composites, noir et blanc, sépia, retouche de lumière et de netteté, formats verticaux pour TikTok.
- Approche : briefs visuels précis, prompting d'image, préservation des visages, itérations jusqu'à un rendu naturel.
- Pas de lien ni d'images (les créations montrent des personnes privées).

### 5. Compétences
Présentées en trois niveaux honnêtes (pas de barres de pourcentage) :
- **Utilisé en projet :** HTML, CSS, JavaScript, React, Git, GitHub, Netlify, Claude Code, n8n
- **Notions acquises :** Node.js, Next.js, Angular, API REST, webhooks, SQL Server
- **En apprentissage :** Python, Machine Learning, Data Science
- **Outils IA :** Claude, Claude Code, Claude Design, ChatGPT, Codex, Gemini, NotebookLM

### 6. Parcours
Une frise chronologique verticale :
- **Objectif 2027 :** Licence 3, puis Master en Data Science et IA
- **2024 :** Technique informatique, Cégep de Granby (Québec), une session
- **2021–2023 :** Licence 1 et 2 en génie logiciel, Institut Supérieur d'Informatique (Sénégal), 120 crédits validés
- **2020–2021 :** Baccalauréat scientifique (série S2), Lycée Seydina Limamou Laye (Sénégal)
- **En cours :** formation en Machine Learning sur Coursera

### 7. Certifications
Petites cartes : Angular (2022–2023), JavaScript (2023–2024), Node.js (2024–2025).

### 8. Langues et intérêts
- Français : courant
- Anglais : lu et écrit, en progression vers B2
- Intérêts : football, musique

### 9. Contact
- Titre : « Travaillons ensemble »
- Courriel : goradia1508@gmail.com (bouton qui ouvre la messagerie)
- GitHub : https://github.com/Wade1508
- LinkedIn : https://www.linkedin.com/in/gora-dia-wade-324575253/
- Localisation : Longueuil, Québec, Canada
- Pas de numéro de téléphone.

### 10. Pied de page
« © 2026 Gora Dia Wade. Conçu avec Claude Design et React. »

Commence par la page complète, puis je te demanderai des ajustements.
