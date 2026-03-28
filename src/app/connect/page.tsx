const contacts = [
  {
    platform: "GitHub",
    handle: "adarshg-org-13",
    description: "Check out my open-source projects, game dev experiments, and web apps — all on GitHub.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    logoInvert: true,
    href: "https://github.com/adarshg-org-13?tab=repositories",
  },
  {
    platform: "LinkedIn",
    handle: "Adarsh Gusain",
    description: "Let's connect professionally. I'm open to collaborations, business opportunities, and networking.",
    logo: null,
    logoInvert: false,
    href: "https://www.linkedin.com/in/adarsh-gusain-065aaa3b7",
  },
];

export default function ConnectPage() {
  return (
    <div className="page">
      <div className="section">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">Hello, I am <strong>Adarsh Gusain</strong> , a software programmer and a game developer currently pursuing my PCM studies at <strong>St Marys's Sr Sec School Mayur Vihar Phase-3</strong>.
          My journey in technical problem-solving and disciplined competition began early, notably achieving <strong>4th runner-up at the 2018 UCMAS Delhi State Level competition</strong>, and has more recently
          led me to participate in <strong>Campfire Delhi hackathon which was hosted in IIT Delhi</strong>. In the realm of game development, I have focused on the Godot Engine to build projects like The Last Offering on itch.io,
          where I specialized in 2D physcis and immersive environment design. Beyond gaming, I have expanded into web development by creating AyuBuild Hub, a platform that enables users to compare and select
          Pc components efficently. Wether I am managing Minecraft Server infrastrucutre or desiging functional web interfaces, I am commited to bridging the gap between complex engineering and user-centric design. I am also into content creation
          and have been creating content since 4 years and i love to play competitive games like Valorant CS2 and some horror games like Resident Evil Granny etc and some adventurous games like Minecraft.</p>
        <h2 className="section-title">Connect</h2>
        <p className="section-subtitle"><strong>Lets' Collaborate-find me on Github, LinkedIn, or reach out via Email.</strong></p>

        {/* Social Cards */}
        <div className="connect-grid">
          {contacts.map((c, i) => (
            <div
              key={c.platform}
              className="connect-card"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="connect-icon">
                {c.logo ? (
                  <img
                    src={c.logo}
                    width="26"
                    height="26"
                    alt={c.platform}
                    style={c.logoInvert ? { filter: "invert(1)" } : undefined}
                  />
                ) : (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#F5F1ED">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
              </div>
              <div>
                <p className="connect-platform">{c.platform}</p>
                <p className="connect-handle">{c.handle}</p>
              </div>
              <p className="connect-desc">{c.description}</p>

              {/* Visit button */}
              <div style={{ marginTop: "auto" }}>
                <a
                  href={c.href || undefined}
                  className={`btn ${c.href ? "btn-outline-cream" : "btn-disabled"}`}
                  style={{
                    fontSize: "0.82rem",
                    padding: "0.55rem 1.1rem",
                    ...(c.href ? {} : { background: "rgba(245,241,237,0.06)", color: "rgba(245,241,237,0.35)", borderColor: "rgba(245,241,237,0.15)" }),
                  }}
                >
                  Visit {c.platform}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "white",
            border: "1.5px solid var(--sand)",
            borderRadius: "20px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            animation: "fadeUp 0.6s 0.25s ease both",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "44px", height: "44px", background: "var(--charcoal)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5F1ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--taupe)" }}>Email</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--charcoal)" }}>axbns5e55101@gmail.com</p>
            </div>
          </div>
          <p style={{ color: "var(--taupe)", fontSize: "0.88rem", lineHeight: 1.65 }}>
            Have a project idea, want to collaborate, or just want to say hi? My inbox is always open!,feel free to contact me!
          </p>
          <a href="https://mail.google.com" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
            Send an Email
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
