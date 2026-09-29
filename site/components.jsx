// Les briques réutilisables du site. Utilisent les données de data.jsx.

const { useState, useEffect } = React;

/* ---------- Éléments de base ---------- */

// Sur-titre numéroté (« 02 / travaux ») + titre de section. `small` pour les sections secondaires
function SectionHeader({ num, kicker, title, small }) {
  return (
    <div className={small ? 'sec-head small' : 'sec-head'}>
      <span className="kicker">{num} / {kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

// Pastille colorée selon le statut (live, done, progress, learning, practice)
function StatusBadge({ status, label }) {
  return (
    <span className="status" style={{ '--c': STATUS_COLORS[status] }}>{label}</span>
  );
}

function TagList({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => <li key={tag}>{tag}</li>)}
    </ul>
  );
}

/* ---------- Photo ---------- */

// Portrait de l'accueil. Si l'image ne charge pas, affiche son chemin à la place
function Photo({ alt }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="photo">
      <div className="photo-glow" />
      <div className="photo-frame">
        <span className="photo-fallback">assets/photo-gora.jpg</span>
        {ok && <img src="assets/photo-gora.jpg" alt={alt} onError={() => setOk(false)} />}
        <div className="photo-shade" />
        <div className="photo-loc"><span className="dot" />Longueuil, QC</div>
      </div>
    </div>
  );
}

/* ---------- Cartes ---------- */

// Reçoit un projet de DATA[lang].projects et les libellés de badges
function ProjectCard({ project, badges }) {
  const { status, title, rows, tagsLabel, tags, link, note } = project;
  return (
    <article className="project">
      <div className="project-top">
        <StatusBadge status={status} label={badges[status]} />
        <h3>{title}</h3>
      </div>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="label">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="project-tags">
        <span className="label">{tagsLabel}</span>
        <TagList tags={tags} />
      </div>
      {link && (
        <a className="project-link" href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      )}
      {note && <p className="project-note">{note}</p>}
    </article>
  );
}

// `kind` : used | notions | learning | ai (le style change selon le niveau)
function SkillGroup({ kind, label, items }) {
  return (
    <div className={`skill-group skill-${kind}`}>
      <div className="skill-head">
        <span className="skill-dot" />
        <h3>{label}</h3>
      </div>
      <TagList tags={items} />
    </div>
  );
}

// `kind` : goal | past | current (couleur du point et de la date)
function TimelineItem({ kind, when, title, sub }) {
  return (
    <li className={`tl-${kind}`}>
      <span className="tl-dot" />
      <span className="tl-when">{when}</span>
      <span className="tl-title">{title}</span>
      {sub && <span className="tl-sub">{sub}</span>}
    </li>
  );
}

function CertCard({ name, years }) {
  return (
    <div className="cert">
      <b>{name}</b>
      <span>{years}</span>
    </div>
  );
}

/* ---------- En-tête et pied de page ---------- */

function LangSwitch({ lang, onChange }) {
  return (
    <div className="lang" role="group" aria-label="Langue / Language">
      {['fr', 'en'].map((l) => (
        <button key={l} type="button" aria-pressed={lang === l} onClick={() => onChange(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Navbar({ t, lang, onLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="nav">
      <nav className="wrap nav-bar" aria-label="Navigation">
        <a className="logo" href="#top">
          <span className="logo-mark">GDW</span>
          <span className="logo-name">Gora Dia Wade</span>
        </a>
        <div className="nav-links">
          {t.nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </div>
        <LangSwitch lang={lang} onChange={onLang} />
        <button
          type="button"
          className="burger"
          aria-expanded={menuOpen}
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '≡'}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          {t.nav.map((l) => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </div>
      )}
    </header>
  );
}

function Footer({ t }) {
  return (
    <footer>
      <div className="wrap foot">
        <span>{t.footer}</span>
        <a href="#top">{t.backTop} ↑</a>
      </div>
    </footer>
  );
}
