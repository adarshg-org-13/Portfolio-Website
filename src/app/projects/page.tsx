import Link from "next/link";
import Image from "next/image";

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const projects = [
  {
    id: 1,
    name: "Car Washing Simulator",
    description: "A fun and interactive car washing simulation game built with the Godot engine. Players wash cars, earn coins, and drive vehicles in a satisfying gameplay loop.",
    tags: ["GDScript", "Godot Engine", "Game Dev", "Simulation"],
    icon: "/main menu _g.jpeg",
    bannerBg: "linear-gradient(135deg, #252323 0%, #70798C 100%)",
    link: "https://ayush-org-101.itch.io/car-washing-simulator-101",
    repo: "https://github.com/adarshg-org-13/Whispers-of-the-pertrified-path",
    ghost: false,
  },
  {
    id: 2,
    name: "RigZen",
    description: "A full-featured PC part picker web application that lets users browse, compare, and build their ideal PC configuration — with compatibility checks and live pricing.It also comes with some featured builds which is hand picked by pc build specialists and provides best bang for the buck performance for you tasks.",
    tags: ["TypeScript", "Next.js", "Web App", "Full-Stack"],
    icon: "/ayubimg.png",
    bannerBg: "linear-gradient(135deg, #70798C 0%, #A99985 100%)",
    link: "https://ayu-build-hub.vercel.app/",
    repo: "https://github.com/adarshg-org-13/AyuBuild-Hub",
    ghost: false,
  },
  {
    id:3,
    name:"ChronoType",
    description:"ChronoType is a typing website where you can practice your typing skills and imporve them. This website also comes with a analytics section where you can see your progress through graphs it comes with more than 5 themes and more than 10+ fonts and custome sounds for a vibrant experience and a virtual keyboard which shows the exact words typed by the user.",
    tags:["TypeScript","Next.js","Web App","Full-Stack"],
    icon:"/logo_chronotype.png",
    bannerBg:"linear-gradient(135deg, #70798C 0%, #A99985 100%)",
    link:"https://chrono-type.vercel.app/",
    repo:"https://github.com/adarshg-org-13/ChronoType",
    ghost:false,
  },
  {
    id: 4,
    name: "EqVision",
    description: "EqVision is a Graph Visualizer website which helps the users to visulaize the equations of maths by simple graphs this website comes with a simple ui which is very user friendly for a first time user. In this website a user can easily visualize the graphs by entering the equation and declaring variables.",
    tags: ["TypeScript","Next.js","Web App","Full-Stack"],
    icon: "/Eqvis.png",
    bannerBg: "linear-gradient(135deg, rgba(112,121,140,0.3) 0%, rgba(169,153,133,0.3) 100%)",
    link: "",
    repo: "https://github.com/adarshg-org-13/EqVision",
    ghost: false,
  },
  {
    id: 5,
    name: "",
    description: "",
    tags: [],
    icon: "/cmsoon.avif",
    bannerBg: "linear-gradient(135deg, rgba(37,35,35,0.2) 0%, rgba(112,121,140,0.25) 100%)",
    link: "",
    repo: "",
    ghost: true,
    ghostLabel: "In Development",
  },
  {
    id: 6,
    name: "",
    description: "",
    tags: [],
    icon: "/cmsoon.avif",
    bannerBg: "linear-gradient(135deg, rgba(169,153,133,0.25) 0%, rgba(218,210,188,0.4) 100%)",
    link: "",
    repo: "",
    ghost: true,
    ghostLabel: "In Development",
  },
];

export default function ProjectsPage() {
  return (
    <div className="page">
      <div className="section">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">Things I&apos;ve built and shipped</p>

        <div className="projects-grid">
          {projects.map((project, i) => {
            if (project.ghost) {
              return (
                <div
                  key={project.id}
                  className="project-card project-card-ghost"
                  style={{ animation: 'none' }}
                >
                  <div className="project-banner" style={{ background: project.bannerBg, overflow: 'hidden' }}>
                    <div className="project-banner-icon" style={{ opacity: 0.4, display: "flex", alignItems:"flex-start", justifyContent:"left" }}>
                       <Image src={project.icon} alt="icon" width={330} height={170} style={{ transform: 'none' }} />
                    </div>
                  </div>
                  <div className="project-body" style={{ alignItems: "center", justifyContent: "center", textAlign: "center", gap: "0.75rem" }}>
                    <span className="ghost-badge">
                      {project.ghostLabel === "Working..." ? (
                        <>
                          <span className="ghost-dot working" />
                          {project.ghostLabel}
                        </>
                      ) : (
                        <>
                          <span className="ghost-dot soon" />
                          {project.ghostLabel}
                        </>
                      )}
                    </span>
                    <p style={{ color: "var(--taupe)", fontSize: "0.82rem" }}>Details coming soon</p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="project-card"
                style={{ animation: 'none' }}
              >
                <div className="project-banner" style={{ 
                  background: project.bannerBg,
                  display:'flex',
                  justifyContent:'center',
                  alignItems: 'flex-start',
                  overflow: 'hidden' }}>
                  <div className="project-banner-icon">
                    <Image src={project.icon} alt={project.name} width={325} height={175} style={{ transform: 'none' }} />
                  </div>
                </div>
                <div className="project-body">
                  <h2 className="project-name">{project.name}</h2>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    <a
                      href={project.link || undefined}
                      className={`btn ${project.link ? "btn-primary" : "btn-disabled"}`}
                      style={{ fontSize: "0.82rem", padding: "0.6rem 1.1rem" }}
                    >
                      Visit
                      <ExternalIcon />
                    </a>
                    <a
                      href={project.repo || undefined}
                      className={`btn ${project.repo ? "btn-secondary" : "btn-disabled"}`}
                      style={{ fontSize: "0.82rem", padding: "0.6rem 1.1rem" }}
                    >
                      <GithubIcon />
                      Repo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--taupe)", marginBottom: "1rem", fontSize: "0.95rem" }}>
            More projects on the way — follow along on GitHub!
          </p>
          <Link href="/connect" className="btn btn-steel">
            Connect with me
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}