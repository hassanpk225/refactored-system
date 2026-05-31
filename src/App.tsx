import './index.css'

const PROJECTS = [
  {
    emoji: '📈',
    name: 'Lead Generation Campaign',
    desc: 'Drove 3,200+ qualified leads for a B2B SaaS brand at 47% lower CPL using optimized Facebook & Google campaigns.',
    tags: ['Facebook Ads', 'Google Ads', 'Lead Gen'],
  },
  {
    emoji: '💰',
    name: 'E-commerce Revenue Sprint',
    desc: 'Scaled a direct-to-consumer brand from $12K to $68K monthly revenue in 90 days through precision retargeting.',
    tags: ['Instagram Ads', 'TikTok Ads', 'Conversion'],
  },
  {
    emoji: '🎯',
    name: 'Local Business Funnel',
    desc: 'Built a full-funnel ad strategy for a high-ticket consulting firm — 8 figure pipeline in 60 days.',
    tags: ['LinkedIn Ads', 'Email Funnel', 'High Ticket'],
  },
]

export default function App() {
  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav>
        <div className="nav-logo">Hassan<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:hassanpk225@gmail.com" className="nav-email">Message Me</a>
      </nav>

      {/* ── HERO ── */}
      <div className="hero">
        <span className="hero-tag">✦ Media Buyer · Available</span>
        <h1>
          I Turn Ads Into{' '}
          <span className="accent">Real Revenue.</span>
        </h1>
        <p className="hero-desc">
          I'm Hassan — a performance media buyer who specializes in converting ad spend
          into measurable sales. I work with ambitious businessmen who want real ROI,
          not vanity metrics.
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn btn-primary">View My Work</a>
          <a href="mailto:hassanpk225@gmail.com" className="btn btn-ghost">Message Me →</a>
        </div>
      </div>

      {/* ── WORK ── */}
      <section id="work">
        <p className="section-label">Selected Results</p>
        <h2 className="section-title">Recent Campaigns</h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-image">{p.emoji}</div>
              <div className="project-body">
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services">
        <p className="section-label">What I Do</p>
        <h2 className="section-title">Services</h2>
        <div className="skills-grid">
          {[
            'Facebook & Instagram Ads',
            'Google Search & Display',
            'TikTok Ads',
            'LinkedIn Campaigns',
            'Conversion Rate Optimization',
            'Funnel Strategy',
            'Retargeting & Remarketing',
            'Campaign Analytics',
          ].map((s) => (
            <div key={s} className="skill-card">{s}</div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <p className="section-label">About Me</p>
        <h2 className="section-title">The Man Behind the Campaigns</h2>
        <div className="about-grid">
          <div className="about-avatar">H</div>
          <div className="about-text">
            <p>
              I'm a media buyer with a obsession for performance data. Every dollar
              you spend should work harder than the last. I don't do guesswork — I
              test, measure, iterate, and scale what actually converts.
            </p>
            <p>
              I specialize in working with businessmen who run serious operations and
              need a reliable partner to fill their pipeline with paying customers.
              Clean strategy, transparent reporting, zero fluff.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="contact-inner">
          <h2>Ready to scale?</h2>
          <p>
            Let's talk about your goals. Whether you're running cold traffic,
            scaling what's working, or starting from scratch — I can help.
          </p>
          <a href="mailto:hassanpk225@gmail.com" className="contact-email">Message Me →</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        &copy; {new Date().getFullYear()} Hassan. Converting Ad to Sales.
      </footer>
    </div>
  )
}
