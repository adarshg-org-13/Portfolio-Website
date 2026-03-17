import Link from "next/link";

const languages = [
  { name: "Python",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "GDScript",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" },
  { name: "HTML",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Next.js",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

export default function HomePage() {
  return (
    <div className="page">
      <div className="section">
        <div className="hero">

          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-avatar">AG</div>
            <div className="profile-name">Adarsh Gusain</div>
            <div className="profile-role">Full-Stack Developer &amp; Game Dev</div>
            <hr className="profile-divider" />

            <div className="profile-info">
              <div className="profile-info-row">
                <div className="profile-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span className="profile-info-label">Location and country</span>
                  <span className="profile-info-value">Delhi-96, India</span>
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span className="profile-info-label">Email</span>
                  <span className="profile-info-value">axbns5e55101@gmail.com</span>
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div>
                  <span className="profile-info-label">Focus</span>
                  <span className="profile-info-value">Web &amp; Game Development</span>
                </div>
              </div>
              <div className="profile-info-row">
                <div className="profile-info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="profile-info-label">Status</span>
                  <span className="profile-info-value">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* GitHub + LinkedIn quick-visit */}
            <hr className="profile-divider" style={{ marginTop: "1.5rem" }} />
            <div className="profile-socials">
              <a href="https://github.com/adarshg-org-13?tab=repositories" className="social-pill">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="15" height="15" alt="GitHub" style={{ filter: "invert(1)" }} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/adarsh-gusain-065aaa3b7/" className="social-pill">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Hero Right */}
          <div className="hero-right">
            <p className="hero-greeting">Hello there!</p>
            <h1 className="hero-heading">
              Building things<br />
              for the <span>web</span> &amp;<br />
              beyond.
            </h1>
            <p className="hero-bio">
              I&apos;m a developer who loves crafting clean, thoughtful digital
              experiences — from interactive web apps to immersive games. Always
              learning, always building.
            </p>

            <div className="btn-group">
              <Link href="/projects" className="btn btn-primary">
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/connect" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>

            {/* Languages */}
            <div className="languages-section">
              <p style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--taupe)", marginBottom: "0.85rem" }}>
                Languages &amp; Frameworks
              </p>
              <div className="languages-grid">
                {languages.map(({ name, logo }) => (
                  <div key={name} className="lang-chip">
                    <img src={logo} width="18" height="18" alt={name} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
