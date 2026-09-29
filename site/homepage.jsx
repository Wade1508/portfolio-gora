// La page complète, section par section. Utilise data.jsx et components.jsx.

/* ---------- Accueil ---------- */

function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="hero-fade" />
      <div className="wrap hero-grid">
        <div className="hero-copy" data-reveal>
          <div className="hero-meta"><span className="line" />{t.hero.meta}</div>
          <h1>Gora Dia Wade</h1>
          <p className="hero-title">{t.hero.title}</p>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#projets">{t.hero.cta1} <span aria-hidden="true">→</span></a>
            <a className="btn-ghost" href="#contact">{t.hero.cta2}</a>
          </div>
        </div>
        <div data-reveal>
          <Photo alt={t.hero.photoAlt} />
        </div>
      </div>
    </section>
  );
}

/* ---------- À propos ---------- */

function About({ t }) {
  return (
    <section id="apropos" className="section">
      <div className="wrap split" data-reveal>
        <SectionHeader num="01" kicker={t.sec.aboutKicker} title={t.sec.about} />
        <p className="about-text span2">{t.about}</p>
      </div>
    </section>
  );
}

/* ---------- Projets ---------- */

function Projects({ t }) {
  const [filter, setFilter] = useState('all');
  const shown = t.projects.filter((p) => filter === 'all' || p.status === filter);

  return (
    <section id="projets" className="section">
      <div className="wrap stack">
        <div className="projects-head" data-reveal>
          <SectionHeader num="02" kicker={t.sec.projectsKicker} title={t.sec.projects} />
          <div className="chips" role="group" aria-label={t.filterLabel}>
            {FILTERS.map((k) => (
              <button key={k} type="button" className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>
                {t.filters[k]}
              </button>
            ))}
          </div>
        </div>
        <div className="projects" data-reveal>
          {shown.map((p) => <ProjectCard key={p.title} project={p} badges={t.badges} />)}
        </div>
        {shown.length === 0 && <p className="empty">{t.noProjects}</p>}
      </div>
    </section>
  );
}

/* ---------- Compétences ---------- */

function Skills({ t }) {
  return (
    <section id="competences" className="section">
      <div className="wrap stack">
        <div data-reveal>
          <SectionHeader num="03" kicker={t.sec.skillsKicker} title={t.sec.skills} />
        </div>
        <div className="skills" data-reveal>
          {t.skills.map(([kind, label, items]) => (
            <SkillGroup key={kind} kind={kind} label={label} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Parcours ---------- */

function Journey({ t }) {
  return (
    <section id="parcours" className="section">
      <div className="wrap split">
        <div data-reveal>
          <SectionHeader num="04" kicker={t.sec.journeyKicker} title={t.sec.journey} />
        </div>
        <ol className="timeline span2" data-reveal>
          {t.timeline.map(([kind, when, title, sub]) => (
            <TimelineItem key={when} kind={kind} when={when} title={title} sub={sub} />
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Certifications, langues et intérêts ---------- */

function CertsAndLangs({ t }) {
  return (
    <section id="certifications" className="section section-sm">
      <div className="wrap duo">
        <div className="col" data-reveal>
          <SectionHeader num="05" kicker={t.sec.certsKicker} title={t.sec.certs} small />
          <div className="certs">
            {CERTS.map((c) => <CertCard key={c.name} {...c} />)}
          </div>
        </div>
        <div className="col" data-reveal>
          <SectionHeader num="06" kicker={t.sec.langKicker} title={t.sec.lang} small />
          <dl className="langs">
            {t.langs.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact({ t }) {
  return (
    <section id="contact" className="contact">
      <div className="contact-glow" />
      <div className="wrap stack" data-reveal>
        <div className="sec-head big">
          <span className="kicker">07 / contact</span>
          <h2>{t.contact.title}</h2>
        </div>
        <a className="btn-email" href={`mailto:${CONTACT.email}`}>
          <span>{t.contact.emailCta}</span>
          <span className="mono">{CONTACT.email}</span>
        </a>
        <div className="contact-cards">
          <a className="contact-card" href={CONTACT.github.href} target="_blank" rel="noopener noreferrer">
            <span className="label-sm">GitHub ↗</span>
            <strong>{CONTACT.github.label}</strong>
          </a>
          <a className="contact-card" href={CONTACT.linkedin.href} target="_blank" rel="noopener noreferrer">
            <span className="label-sm">LinkedIn ↗</span>
            <strong>{CONTACT.linkedin.label}</strong>
          </a>
          <div className="contact-card">
            <span className="label-sm">{t.contact.locLabel}</span>
            <strong>{CONTACT.location}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Animations d'apparition ---------- */

// Fait apparaître en douceur les blocs [data-reveal] situés sous l'écran au chargement
function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.remove('reveal-hidden');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add('reveal-hidden');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

/* ---------- Langue ---------- */

function getSavedLang() {
  try {
    const saved = localStorage.getItem('gdw-lang');
    if (saved === 'fr' || saved === 'en') return saved;
  } catch (e) {}
  return 'fr';
}

/* ---------- Page complète ---------- */

function HomePage() {
  const [lang, setLang] = useState(getSavedLang);
  const t = DATA[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('gdw-lang', lang); } catch (e) {}
  }, [lang]);

  useReveal();

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <Navbar t={t} lang={lang} onLang={setLang} />
      <main id="main">
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Journey t={t} />
        <CertsAndLangs t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

// Affichage final
ReactDOM.createRoot(document.getElementById('root')).render(<HomePage />);
