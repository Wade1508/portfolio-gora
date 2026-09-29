# Site portfolio Gora Dia Wade

Portfolio d'une page, en React, sans installation. Bilingue FR / EN.

## Les fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Point d'entrée. Charge React, Babel, le CSS, puis les 3 fichiers `.jsx` dans l'ordre |
| `data.jsx` | Tous les textes (FR et EN) : projets, compétences, parcours, certifications, contact |
| `components.jsx` | Les briques réutilisables : `ProjectCard`, `StatusBadge`, `SkillGroup`, `Photo`, `Navbar`, `Footer`... |
| `homepage.jsx` | Les sections de la page, le choix de langue et l'affichage final |
| `assets/styles.css` | Tout le style (couleurs dans `:root`, mobile) |
| `assets/photo-gora.jpg` | Photo de l'accueil |

## Lancer le site

Ouvrir `index.html` en double-clic ne marche pas : le navigateur bloque le chargement des fichiers `.jsx` en local.

Dans VS Code, installer l'extension **Live Server**, faire un clic droit sur `index.html`, puis choisir **Open with Live Server**.

## Modifier le site

- Ajouter ou modifier un projet : `data.jsx`, dans `projects` (en `fr` ET en `en`)
- Changer une compétence ou une étape du parcours : `data.jsx`
- Changer la photo : remplacer `assets/photo-gora.jpg` (même nom)
- Changer une couleur : `assets/styles.css`, bloc `:root` en haut du fichier
