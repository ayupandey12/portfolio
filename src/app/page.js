"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Skill Categories & Badges from Ayush's Resume
const SKILLS_DATA = {
  tech: [
    "C++",
    "JavaScript",
    "TypeScript",
    "SQL",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Hono.js",
    "Prisma",
    "Recoil",
    "Zustand",
    "Tailwind CSS",
  ],
  devops: [
    "Turborepo",
    "Monorepos",
    "Microservices",
    "Docker",
    "CI/CD Pipelines",
    "Cloudflare Workers",
    "Git",
    "Vercel",
    "Netlify",
    "AWS",
  ],
  database: [
    "Redis (Caching)",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "JWT/OAuth",
    "Postman",
    "Cloud Deployment",
  ],
  "ai & ui/ux": [
    "Cursor AI",
    "GitHub Copilot",
    "Figma",
    "Shader UI",
    "Responsive Design",
    "VS Code",
  ],
  personal: [
    "Problem Solving",
    "Distributed Systems",
    "Adaptability",
    "Self-learning",
    "Collaboration",
    "Event Coordination",
    "Team Leadership",
  ],
};

const TESTIMONIALS = [
  {
    name: "Medantrik Lead",
    role: "Engineering Supervisor",
    text: "Ayush showed exceptional skills during his internship. He migrated and optimized our web systems, drastically improving our loading times, and was key in raising our Lighthouse scores above 90.",
    avatar: "M",
  },
  {
    name: "NiftyBull Client",
    role: "Product Owner",
    text: "Ayush engineered a highly responsive trading panel with live candlestick rendering. The performance is incredibly fast, achieving sub-millisecond execution times in local tests.",
    avatar: "NB",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("tech");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formName, setFormName] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const sliderRef = useRef(null);

  // Handle carousel dot indicator click
  const handleTestimonialScroll = (index) => {
    setTestimonialIndex(index);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Keep testimonial dot in sync when user swipes manually
  useEffect(() => {
    const handleScrollSync = () => {
      if (sliderRef.current) {
        const scrollPosition = sliderRef.current.scrollLeft;
        const cardWidth = sliderRef.current.offsetWidth;
        const index = Math.round(scrollPosition / cardWidth);
        if (index !== testimonialIndex && index < TESTIMONIALS.length) {
          setTestimonialIndex(index);
        }
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScrollSync);
    }
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScrollSync);
      }
    };
  }, [testimonialIndex]);

  // Contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formMessage) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    setFormStatus("Message sent successfully! (Demo)");
    setFormName("");
    setFormMessage("");
    setTimeout(() => setFormStatus(""), 4000);
  };

  return (
    <main className="portfolio-card">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="bracket-frame">
          <div className="hero-header">
            <div>
              <div className="hero-meta">ENGINEER // 2026</div>
              <h1 className="hero-title">
                AYUSH
                <br />
                PANDEY
              </h1>
            </div>
            
            {/* Polaroid Frame */}
            <div className="polaroid-container">
              <div className="polaroid">
                <div className="polaroid-img-wrapper">
                  <Image
                    src="/avatar_sketch.png"
                    alt="Ayush Pandey Sketch Avatar"
                    fill
                    sizes="96px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="polaroid-caption">me in a polaroid.png</div>
              </div>
            </div>
          </div>
          
          <p className="hero-bio">
            Full-Stack Engineer with expertise in distributed systems and scalable web architecture. Built real-time applications using Turborepo and Edge Computing, resulting in a 52% increase in system throughput. Engineered automated deployment pipelines using Docker and GitHub Actions on AWS infrastructure.
          </p>
        </div>
      </section>

      {/* SOCIALS GRID */}
      <div className="socials-grid">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="LeetCode"
        >
          {/* Custom Leetcode SVG Icon */}
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.75 9.75a1.37 1.37 0 0 0-.006 1.937l3.287 3.287a1.37 1.37 0 0 0 1.937-.006l9.748-9.75a1.375 1.375 0 0 0-.925-2.348h-3.33zm-.006 4.43h2.381l-7.393 7.393-1.19-1.19 6.202-6.203zM4.478 15.3l-2.054-2.054a1.37 1.37 0 0 0-1.937.006 1.37 1.37 0 0 0-.006 1.937l2.054 2.054a1.37 1.37 0 0 0 1.937-.006 1.37 1.37 0 0 0 .006-1.937zM16.645 13.064c-.37 0-.74-.141-1.022-.422a1.442 1.442 0 0 1 0-2.044l1.375-1.375a1.446 1.446 0 0 1 2.044 0c.563.564.563 1.48 0 2.044l-1.375 1.375c-.282.28-.65.422-1.022.422zM21.946 20.365a1.37 1.37 0 0 0-.006-1.937l-3.287-3.287a1.37 1.37 0 0 0-1.937.006 1.37 1.37 0 0 0 .006 1.937l3.287 3.287a1.37 1.37 0 0 0 1.937-.006z" />
          </svg>
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label="X / Twitter"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="mailto:ayushpandey8020@gmail.com"
          className="social-link"
          aria-label="Email"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

      {/* PROJECTS SECTION */}
      <section className="projects-container">
        {/* Project 1: Gupshup */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-row"
        >
          <div className="project-img-container">
            {/* SVG: Gupshup Chat Editor in dark theme */}
            <svg width="96" height="64" viewBox="0 0 96 64" fill="none">
              <rect width="96" height="64" fill="#0d0e12" />
              <rect x="8" y="8" width="80" height="48" rx="4" fill="#161822" />
              <circle cx="16" cy="16" r="2" fill="#10b981" />
              <rect x="22" y="14" width="24" height="4" rx="2" fill="#3b82f6" />
              {/* Chat bubbles */}
              <rect x="16" y="24" width="40" height="10" rx="3" fill="#1e293b" />
              <circle cx="22" cy="29" r="2" fill="#38bdf8" />
              <rect x="28" y="28" width="22" height="2" rx="1" fill="#94a3b8" />
              
              <rect x="40" y="38" width="40" height="10" rx="3" fill="#3b82f6" fillOpacity="0.4" />
              <circle cx="74" cy="43" r="2" fill="#60a5fa" />
              <rect x="46" y="42" width="22" height="2" rx="1" fill="#ffffff" />
            </svg>
          </div>
          <div className="project-details">
            <div className="project-header-row">
              <span className="project-title">Gupshup</span>
              <span className="project-tag">WebSockets</span>
            </div>
            <p className="project-desc">
              Real-time chat via Turborepo with 3 independent scaling microservices.
            </p>
          </div>
          <div className="project-arrow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </a>

        {/* Project 2: PayNow */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-row"
        >
          <div className="project-img-container">
            {/* SVG: PayNow card transaction in dark theme */}
            <svg width="96" height="64" viewBox="0 0 96 64" fill="none">
              <rect width="96" height="64" fill="#0c0a09" />
              {/* Bank card card structure */}
              <rect x="12" y="14" width="72" height="36" rx="4" fill="#292524" stroke="#44403c" strokeWidth="1" />
              {/* Card details */}
              <rect x="18" y="20" width="12" height="8" rx="1" fill="#f59e0b" />
              <rect x="18" y="38" width="30" height="2" rx="1" fill="#d6d3d1" />
              <circle cx="62" cy="32" r="6" fill="#ef4444" fillOpacity="0.8" />
              <circle cx="70" cy="32" r="6" fill="#eab308" fillOpacity="0.8" />
            </svg>
          </div>
          <div className="project-details">
            <div className="project-header-row">
              <span className="project-title">PayNow</span>
              <span className="project-tag">Fintech</span>
            </div>
            <p className="project-desc">
              Dockerized fintech wallet. Ensured transactional ACID compliance.
            </p>
          </div>
          <div className="project-arrow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </a>

        {/* Project 3: BlogBook */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-row"
        >
          <div className="project-img-container">
            {/* SVG: Serverless network for BlogBook */}
            <svg width="96" height="64" viewBox="0 0 96 64" fill="none">
              <rect width="96" height="64" fill="#0f172a" />
              {/* Edge servers cloud logo style */}
              <circle cx="48" cy="32" r="14" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="1.5" />
              <path d="M48 24 L48 40 M40 32 L56 32" stroke="#ea580c" strokeWidth="1.5" />
              {/* Surrounding nodes */}
              <circle cx="24" cy="18" r="3" fill="#38bdf8" />
              <line x1="24" y1="18" x2="38" y2="26" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              
              <circle cx="72" cy="18" r="3" fill="#38bdf8" />
              <line x1="72" y1="18" x2="58" y2="26" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
              
              <circle cx="24" cy="46" r="3" fill="#38bdf8" />
              <line x1="24" y1="46" x2="38" y2="38" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />

              <circle cx="72" cy="46" r="3" fill="#38bdf8" />
              <line x1="72" y1="46" x2="58" y2="38" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="project-details">
            <div className="project-header-row">
              <span className="project-title">BlogBook</span>
              <span className="project-tag">Edge Native</span>
            </div>
            <p className="project-desc">
              Serverless publishing platform using Hono.js and Cloudflare Workers.
            </p>
          </div>
          <div className="project-arrow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </a>

        {/* Project 4: NiftyBull */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-row"
        >
          <div className="project-img-container">
            {/* SVG: Candlestick chart for NiftyBull */}
            <svg width="96" height="64" viewBox="0 0 96 64" fill="none">
              <rect width="96" height="64" fill="#09050d" />
              <rect x="0" y="0" width="96" height="64" stroke="#1d122c" strokeWidth="2" />
              {/* Candlesticks */}
              {/* Box 1 */}
              <line x1="22" y1="20" x2="22" y2="50" stroke="#10b981" strokeWidth="1.5" />
              <rect x="18" y="28" width="8" height="14" rx="1" fill="#10b981" />
              
              {/* Box 2 */}
              <line x1="42" y1="10" x2="42" y2="40" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="38" y="16" width="8" height="18" rx="1" fill="#ef4444" />
              
              {/* Box 3 */}
              <line x1="62" y1="15" x2="62" y2="55" stroke="#10b981" strokeWidth="1.5" />
              <rect x="58" y="20" width="8" height="25" rx="1" fill="#10b981" />

              {/* Box 4 */}
              <line x1="82" y1="5" x2="82" y2="35" stroke="#ef4444" strokeWidth="1.5" />
              <rect x="78" y="12" width="8" height="15" rx="1" fill="#ef4444" />
            </svg>
          </div>
          <div className="project-details">
            <div className="project-header-row">
              <span className="project-title">NiftyBull</span>
              <span className="project-tag">Trading</span>
            </div>
            <p className="project-desc">
              Trading application with live candlestick charts and low-latency execution.
            </p>
          </div>
          <div className="project-arrow-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </a>
      </section>

      {/* TICKER MARQUEE */}
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="marquee-text">
            CHECK OUT MORE INTERESTING PROJECTS <span className="marquee-dot">•</span> CHECK OUT MORE INTERESTING PROJECTS <span className="marquee-dot">•</span> CHECK OUT MORE INTERESTING PROJECTS <span className="marquee-dot">•</span> CHECK OUT MORE INTERESTING PROJECTS <span className="marquee-dot">•</span> CHECK OUT MORE INTERESTING PROJECTS <span className="marquee-dot">•</span>
          </span>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <section className="section-wrapper">
        <div className="section-subtitle">Career</div>
        <h2 className="section-heading">Experience:</h2>

        <div className="experience-list">
          {/* Medantrik */}
          <div className="experience-item">
            <div className="experience-marker" />
            <div className="experience-header">
              <div className="experience-title-box">
                <span className="experience-role">Web Development Intern</span>
                <span className="experience-company">Medantrik (Startup)</span>
              </div>
              <div className="experience-meta">
                Jan 2023 - Oct 2023
                <br />
                IIT, Kanpur (Hybrid)
              </div>
            </div>
            <ul className="experience-bullets">
              <li className="experience-bullet">
                Spearheaded the design of a responsive company website from scratch, increasing organic traffic by 65% via SEO.
              </li>
              <li className="experience-bullet">
                Optimized Lighthouse scores from 62 to 94 and slashed page load times by 52% via advanced image compression.
              </li>
              <li className="experience-bullet">
                Maintained full Core Web Vitals compliance, ensuring First Contentful Paint (FCP) stayed under 1.8s.
              </li>
            </ul>
          </div>

          {/* Freelance */}
          <div className="experience-item">
            <div className="experience-marker" />
            <div className="experience-header">
              <div className="experience-title-box">
                <span className="experience-role">Freelance Web Developer</span>
                <span className="experience-company">Self Employed</span>
              </div>
              <div className="experience-meta">
                Dec 2024 - Feb 2026
                <br />
                Remote
              </div>
            </div>
            <ul className="experience-bullets">
              <li className="experience-bullet">
                <strong>NiftyBull:</strong> Engineered a trading app with live candle charts and ms-latency execution for 50+ test users.
              </li>
              <li className="experience-bullet">
                <strong>Kojoy Appliances:</strong> Executed the deployment of a business site resulting in a 30% boost in search traffic.
              </li>
              <li className="experience-bullet">
                <strong>SVM Inter College:</strong> Constructed an informational site for 1,000+ students, increasing digital engagement by 40%.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & ACHIEVEMENTS */}
      <section className="section-wrapper">
        <div className="section-subtitle">AWARDS //</div>
        <h2 className="section-heading">Leadership & Achievements:</h2>
        <ul className="experience-bullets">
          <li className="experience-bullet" style={{ fontSize: "0.82rem", marginBottom: "0.4rem" }}>
            <strong>DSA Excellence:</strong> Solved 600+ problems in C++; ranked as College Topper in ICPC preliminaries (Top 5% of university).
          </li>
          <li className="experience-bullet" style={{ fontSize: "0.82rem", marginBottom: "0.4rem" }}>
            <strong>Council Member:</strong> Directed a committee of 10+ members and coordinated 15+ large-scale college events.
          </li>
          <li className="experience-bullet" style={{ fontSize: "0.82rem" }}>
            <strong>Sports Captain:</strong> Orchestrated strategies leading teams to a 90% win rate; awarded &quot;Best Player&quot; twice.
          </li>
        </ul>
      </section>

      {/* EDUCATION SECTION (DARK BANNER) */}
      <section className="education-section">
        <div className="section-subtitle" style={{ color: "#777777" }}>
          Education:
        </div>

        {/* University */}
        <div className="education-item">
          <div className="education-title-row">
            <span>DEGREE</span>
            <span>Oct 2022 - Jun 2026</span>
          </div>
          <div className="education-degree">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            B.Tech in Computer Science (CGPA: 6.74/10)
          </div>
          <div className="education-school">Chhatrapati Shahu Ji Maharaj University</div>
        </div>

        {/* Inter College */}
        <div className="education-item">
          <div className="education-title-row">
            <span>INTERMEDIATE</span>
            <span>Apr 2019 - Jun 2020</span>
          </div>
          <div className="education-degree">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            Class XII Boards (Percentage: 75%)
          </div>
          <div className="education-school">SVM Inter College</div>
        </div>
      </section>

      {/* CAPABILITIES CONSOLE SECTION */}
      <section className="section-wrapper">
        <div className="section-subtitle">SKILLS //</div>
        <h2 className="section-heading">Capabilities Console</h2>
        <p className="capabilities-desc">A focused, tech-oriented list.</p>

        <div className="console-box">
          <div className="console-tabs">
            {Object.keys(SKILLS_DATA).map((tab) => (
              <button
                key={tab}
                className={`console-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="console-display">
            {SKILLS_DATA[activeTab].map((skill, index) => (
              <span
                key={skill}
                className="skill-pill"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section-wrapper">
        <div className="section-subtitle">TESTIMONIALS //</div>
        <h2 className="section-heading">WHAT THEY SAY</h2>
        <p className="contact-desc">
          Don&apos;t just take my word for it - here&apos;s what the people I&apos;ve worked
          with have to say. (Spoiler: It&apos;s mostly good things ;) )
        </p>

        <div className="testimonials-carousel">
          <div className="testimonials-slider" ref={sliderRef}>
            {TESTIMONIALS.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{item.avatar}</div>
                  <div className="testimonial-info">
                    <span className="testimonial-name">{item.name}</span>
                    <span className="testimonial-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-nav">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${
                  testimonialIndex === index ? "active" : ""
                }`}
                onClick={() => handleTestimonialScroll(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section-wrapper">
        <div className="section-subtitle">CONTACT //</div>
        <h2 className="section-heading">LET&apos;S MAKE IT HAPPEN</h2>
        <p className="contact-desc">
          Got a project, job opportunity or just want to chat? Shoot me an email at{" "}
          <a href="mailto:ayushpandey8020@gmail.com">ayushpandey8020@gmail.com</a>{" "}
          or drop a message below.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="YOUR NAME"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            className="form-input"
            required
          />
          <textarea
            placeholder="YOUR MESSAGE"
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
            className="form-textarea"
            required
          />
          <button type="submit" className="submit-btn">
            Send Message
          </button>
          {formStatus && <div className="form-status">{formStatus}</div>}
        </form>
      </section>
    </main>
  );
}
