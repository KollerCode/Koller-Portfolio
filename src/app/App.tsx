import { useState, useEffect } from "react";
import { motion } from "motion/react";
import portraitImg from "../assets/illustration.svg";
import name from "../assets/name.svg";
import nklogo from "../assets/logos.svg";


const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    symbol: "⬡",
    title: "UI/UX Engineering",
    desc: "From wireframe to production in React and Angular. Design systems, accessibility, and pixel-perfect implementation — no handoff lag.",
    tags: ["React", "Angular", "TypeScript", "Design Systems", "a11y"],
  },
  {
    symbol: "◈",
    title: "AI-Assisted Design",
    desc: "I use Claude for design critique and heuristic review, and Figma Make to generate and stress-test UI variations at speed.",
    tags: ["Claude", "Figma Make", "Prompt Engineering", "Rapid Iteration"],
  },
  {
    symbol: "◇",
    title: "Branding & Identity",
    desc: "Freelance logo design, brand systems, and visual identity work — building marks that tell stories and scale across touchpoints.",
    tags: ["Logo Design", "Brand Systems", "Typography", "Print & Digital"],
  },
  {
    symbol: "◎",
    title: "Project Management",
    desc: "Leading cross-functional teams from discovery to delivery with clarity and momentum. DEI-forward, stakeholder-savvy, deadline-conscious.",
    tags: ["Agile", "Roadmapping", "Stakeholder Mgmt", "DEI"],
  },
];

const PROJECTS = [
  {
    title: "Hive Wright Apiary Services Startup",
    category: "Branding & Identity · Product Design · UI/UX Engineering",
    year: "2026",
    desc: "Full brand identity for an Apiary Service catered to the luxury hotel market. Logo, type system, color palette, brand guidelines, and print collateral including labels for the honey samples. Currently working on web development target GTM December 2026",
    tags: ["React", "Figma Make", "Logo", "Branding", "Typography"],
    img: "/src/assets/HW-promo.png",
  },
  {
    title: "Tideturners Redesign",
    category: "UI/UX Engineering · Branding & Identity",
    year: "2025",
    desc: "Developed foundational design system components in 2024 and enhanced the Available Games experience by implementing a toggle that allows users to easily switch between this company’s latest releases and featured game titles.",
    tags: ["Figma", "ChatGPT", "React"],
    img: "/src/assets/tideturners.png",
  },
  {
    title: "SaaS FinTech Corporate Website Design & Development",
    category: "UI/UX Engineering · AI Design · Angular",
    year: "2022 - 2026",
    desc: "Led UX/UI design and front-end implementation for key marketing and product-focused web experiences, including solution pages, AI-focused content, and platform feature presentations.",
    tags: ["Marketing Collateral", "Wireframe Designing", "Angular", "Brand Identity"],
    img: "/src/assets/rp.png",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Research the problem space — competitive audits, user interviews, heuristic reviews. No assumptions carried forward untested.",
  },
  {
    num: "02",
    title: "Define",
    desc: "Synthesize findings into clear problem statements, user flows, and measurable success criteria before design begins.",
  },
  {
    num: "03",
    title: "Iterate with AI",
    desc: "Claude for design critique and accessibility reasoning. Figma Make to generate and test variations. Days of iteration become hours.",
  },
  {
    num: "04",
    title: "Design & Code",
    desc: "High-fidelity Figma shipped directly to React or Angular — no handoff friction. Responsive and accessible by default.",
  },
  {
    num: "05",
    title: "Ship & Learn",
    desc: "Monitor, measure, refine. Products aren't launched — they're evolved. I stay engaged past delivery.",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 } as object,
    viewport: { once: true },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  };
}

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* ─── Nav ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("#hero")} className="hover:opacity-75 transition-opacity">
            <img
                  src={nklogo}
                  alt="Problem → Process → Solution"
                  className="w-full max-w-[200px] opacity-90"
                />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans tracking-wide"
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="mailto:natasha@nkdesign.io"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Let's talk →
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => { scrollTo(l.href); setMenuOpen(false); }}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {l.label}
              </button>
            ))}
            <a
              href="mailto:natasha@nkdesign.io"
              className="block text-sm text-primary py-2"
            >
              natasha@nkdesign.io
            </a>
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section id="hero" className="min-h-screen pt-16 grid md:grid-cols-2 overflow-hidden">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 md:py-32">
          <motion.p
            {...fadeUp(0)}
            className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-8"
          >
            Sr. UI/UX Engineer · Tampa, FL
          </motion.p>

          <motion.div {...fadeUp(0.08)} className="mb-8">
             <img
                  src={name}
                  alt="Problem → Process → Solution"
                  className="w-full max-w-[200px] opacity-90"
                />
          </motion.div>

          <motion.p
            {...fadeUp(0.22)}
            className="text-muted-foreground text-lg max-w-md leading-relaxed"
          >
            Designing interfaces that just make sense — and building the code that brings them to life.
            Generalist: UI/UX, branding, AI-driven iteration, and project management.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mt-10">
            <button
              onClick={() => scrollTo("#work")}
              className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              View my work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-3 border border-border text-foreground text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Get in touch
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
            {[
              ["6+", "Years experience"],
              ["40+", "Projects shipped"],
              ["React · Angular", "Engineering stack"],
              ["Claude · Figma Make", "AI in workflow"],
            ].map(([val, label]) => (
              <div key={label} className="space-y-1">
                <div className="font-mono text-sm text-primary">{val}</div>
                <div className="font-mono text-xs text-muted-foreground leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — portrait */}
        <div className="relative flex items-stretch min-h-[60vh] md:min-h-0 overflow-hidden bg-[#f5f3ef]">
          {/* Sketch portrait — shows naturally on light background */}
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src={portraitImg}
              alt="Natasha Koller — sketch portrait"
              className="w-full h-full object-contain object-bottom"
            />
          </div>
          {/* Pink top-left accent */}
          <div
            className="absolute top-0 left-0 w-1 h-full pointer-events-none"
            style={{ background: "#DB268D" }}
          />
          {/* Corner label */}
          <div className="absolute bottom-6 right-6 z-20">
            <span className="font-mono text-xs text-muted-foreground tracking-widest">
              GENERALIST · 2024
            </span>
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
          <div className="md:sticky md:top-24">
            <motion.p {...fadeUp()} className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
              About
            </motion.p>
            <motion.div {...fadeUp(0.06)} className="w-8 h-px bg-primary" />
          </div>

          <div>
            <motion.h2
              {...fadeUp()}
              className="font-display leading-tight text-foreground mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Designer who brings ideas to life.<br />
              <em style={{ color: "var(--primary)" }}>With AI as my co-pilot.</em>
            </motion.h2>

            <motion.div {...fadeUp(0.1)} className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I'm Natasha — a Senior UI/UX Engineer based in Tampa, FL with a background that spans
                product design, front-end engineering, brand identity, and team leadership. I don't fit
                neatly in one box, and I've stopped trying.
              </p>
              <p>
                My edge is the overlap. I prototype in Figma, critique with Claude, iterate with Figma Make,
                and ship in React or Angular — often in the same sprint. I bring structure to ambiguous
                problems and craft to final pixels.
              </p>
              <p>
                I also freelance brand and logo design, and I've led cross-functional teams through full
                product cycles with a DEI-forward approach. If you need someone who can do it all and
                keep it cohesive — that's me.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="grid sm:grid-cols-3 gap-px bg-border mt-16">
              {[
                { label: "Based in", value: "Tampa, FL" },
                { label: "Availability", value: "Open to work" },
                { label: "Focus", value: "Generalist / IC" },
              ].map((item) => (
                <div key={item.label} className="bg-background p-6">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    {item.label}
                  </div>
                  <div className="text-foreground">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.p {...fadeUp()} className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-14">
            What I do
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.title}
                {...fadeUp(i * 0.07)}
                className="bg-card p-8 hover:bg-secondary transition-colors duration-300 group cursor-default"
              >
                <div
                  className="text-3xl mb-6 font-mono group-hover:scale-110 transition-transform duration-300 inline-block"
                  style={{ color: "var(--primary)" }}
                >
                  {skill.symbol}
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{skill.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 border"
                      style={{ color: "var(--primary)", borderColor: "rgba(219,38,141,0.25)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p {...fadeUp()} className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
              Selected work
            </motion.p>
            <motion.h2
              {...fadeUp(0.06)}
              className="font-display text-foreground"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Projects
            </motion.h2>
          </div>
          <motion.span {...fadeUp(0.1)} className="font-mono text-xs text-muted-foreground hidden sm:block">
            2021–2026
          </motion.span>
        </div>

        <div className="space-y-px bg-border">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              {...fadeUp(i * 0.09)}
              className="bg-background group overflow-hidden"
            >
              <div className="grid md:grid-cols-[1fr_380px]">
                <div className="p-8 md:p-12 flex flex-col justify-between min-h-[280px]">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="font-mono text-xs" style={{ color: "var(--primary)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
                      <span className="font-mono text-xs text-muted-foreground ml-auto">{project.year}</span>
                    </div>
                    <h3
                      className="font-display text-foreground mb-4 transition-colors duration-300 group-hover:text-primary"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-muted-foreground border border-border px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative h-56 md:h-auto overflow-hidden bg-secondary">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ─── Process ─── */}
      <section id="process" className="py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.p {...fadeUp()} className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
            How I work
          </motion.p>
          <motion.h2
            {...fadeUp(0.06)}
            className="font-display text-foreground mb-20"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            My Process
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border mb-px">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i * 0.07)}
                className="bg-card p-8 hover:bg-secondary transition-colors duration-300 group cursor-default"
              >
                <div
                  className="font-mono mb-6 leading-none group-hover:text-primary transition-colors duration-300"
                  style={{ fontSize: "2.5rem", color: "rgba(219,38,141,0.2)" }}
                >
                  {step.num}
                </div>
                <h3 className="font-display text-foreground mb-3 text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.2)}
            className="p-8 md:p-10 border bg-background"
            style={{ borderColor: "rgba(219,38,141,0.25)" }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              <div className="shrink-0 md:w-56">
                <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
                  AI in my workflow
                </p>
                <img
                  src={portraitImg}
                  alt="Problem → Process → Solution"
                  className="w-full max-w-[200px] opacity-90"
                />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I use{" "}
                <strong className="text-foreground">Claude</strong> as a design thinking partner — for heuristic evaluation,
                accessibility auditing, and rapid ideation. I use{" "}
                <strong className="text-foreground">Figma Make</strong> to generate and stress-test UI variations in real time.
                Together, they compress my iteration cycle from days to hours without sacrificing quality.
                AI doesn't replace the thinking — it amplifies it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-40 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p {...fadeUp()} className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-8">
            Get in touch
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="font-display text-foreground leading-tight mb-8"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Let's build<br />
            <em style={{ color: "var(--primary)" }}>something great</em>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="text-muted-foreground text-lg max-w-md mx-auto mb-12 leading-relaxed">
            Open to UI/UX Design and Engineering roles, freelance design and branding, and consulting engagements. Tampa-based, remote-preferred.
          </motion.p>
          <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kollernatasha@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              kollernatasha@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/natashakoller"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-border text-foreground tracking-wide text-sm hover:border-primary hover:text-primary transition-colors"
            >
              LinkedIn →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm text-muted-foreground">
            Natasha Koller — Sr. UI/UX Engineer & Designer
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Tampa, FL · © 2024
          </span>
        </div>
      </footer>
    </div>
  );
}
