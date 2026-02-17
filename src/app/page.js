import Image from "next/image";
import styles from "./page.module.css";

const SITE_FALLBACK = {
  businessName: "Flush Force One Plumbing",
  tagline: "Fast, friendly plumbing—done right the first time.",
  phoneDisplay: "(555) 123-4567",
  phoneE164: "+15551234567",
  serviceArea: "Serving Metro Area & Surrounding Neighborhoods",
  ctas: {
    primaryLabel: "Call for Service",
    secondaryLabel: "Request a Quote",
  },
  heroBullets: [
    "Upfront pricing and clear communication",
    "Drain clogs, leaks, toilets, faucets, disposals",
    "Water heaters (tank & tankless) and replacements",
    "Emergency availability (after-hours by request)",
  ],
  services: [
    {
      title: "Drain Cleaning",
      body: "From slow sinks to main line backups—safe, professional clearing with options explained before work begins.",
    },
    {
      title: "Leak Detection & Repair",
      body: "Fix dripping faucets, running toilets, pipe leaks, and pressure issues. We aim for a durable repair, not a temporary patch.",
    },
    {
      title: "Water Heaters",
      body: "Diagnosis, repair, and replacement for gas/electric models. Ask about efficient upgrades and warranty options.",
    },
  ],
  whyUs: {
    points: [
      "Licensed & insured",
      "Clean work area (shoe covers, drop cloths)",
      "Text/email updates if you want them",
      "Respectful technicians and clear estimates",
    ],
    noteTitle: "Free estimate checks",
    noteBody:
      "We can often quote simple jobs from photos/video. For complex issues, we’ll schedule an on-site assessment.",
  },
  process: {
    steps: [
      {
        title: "Tell us what’s going on",
        body: "Call or request a quote. Share photos/video if possible to speed things up.",
      },
      {
        title: "We arrive with a plan",
        body: "We confirm the issue, explain options, and provide upfront pricing before starting.",
      },
      {
        title: "Repair + cleanup",
        body: "We complete the work, validate the fix, and leave the space tidy.",
      },
    ],
  },
  footer: {
    columns: [
      {
        title: "Services",
        links: [
          { label: "Drain Cleaning", href: "#services" },
          { label: "Leak Repairs", href: "#services" },
          { label: "Water Heaters", href: "#services" },
          { label: "Emergency Service", href: "#contact" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Why Us", href: "#why" },
          { label: "How It Works", href: "#process" },
          { label: "Service Area", href: "#service-area" },
        ],
      },
      {
        title: "Get Help",
        links: [
          { label: "Call Now", href: "#contact" },
          { label: "Request a Quote", href: "#contact" },
          { label: "Hours & Policies", href: "#contact" },
        ],
      },
    ],
    legalLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
};

// Later, replace this with Sanity fetches (see notes below).
async function getHomePageData() {
  return SITE_FALLBACK;
}

export default async function Home() {
  const data = await getHomePageData();

  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <a className={styles.brand} href="#top" aria-label={data.businessName}>
            <span className={styles.logoWrap}>
              <Image
                className={styles.logo}
                src="FFOLogo.PNG"
                alt="Flush Force One Plumbing logo"
                width={220}
                height={140}
                priority
              />
              <span>{data.businessName}</span>
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className={styles.navLinks}>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#why">Why Us</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className={styles.navActions}>
            <a className={`${styles.pill} ${styles.pillSecondary}`} href="#contact">
              {data.ctas.secondaryLabel}
            </a>
            <a
              className={`${styles.pill} ${styles.pillPrimary}`}
              href={`tel:${data.phoneE164}`}
            >
              {data.ctas.primaryLabel}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div>
                <div className={styles.kicker}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>{data.serviceArea}</span>
                </div>

                <h1 className={styles.h1}>{data.tagline}</h1>
                <p className={styles.lead}>
                  Same-day availability when possible. Clear options. Respectful
                  technicians. Quality parts.
                </p>

                <div className={styles.heroCtas}>
                  <a className={styles.primaryCta} href={`tel:${data.phoneE164}`}>
                    {data.ctas.primaryLabel}
                    <span aria-hidden="true">→</span>
                  </a>
                  <a className={styles.secondaryCta} href="#contact">
                    {data.ctas.secondaryLabel}
                  </a>
                </div>

                <div className={styles.metaRow}>
                  <div className={styles.metaCard}>
                    <div className={styles.metaCardTitle}>Fast response</div>
                    <div className={styles.metaCardText}>
                      We’ll confirm scheduling by text/call, and keep you updated.
                    </div>
                  </div>
                  <div className={styles.metaCard}>
                    <div className={styles.metaCardTitle}>Upfront pricing</div>
                    <div className={styles.metaCardText}>
                      Options explained clearly before work begins.
                    </div>
                  </div>
                </div>
              </div>

              <aside className={styles.heroAside} aria-label="Highlights">
                <h2>What we handle</h2>
                <ul>
                  {data.heroBullets.map((t) => (
                    <li key={t}>
                      <span className={styles.icon} aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Core services</h2>
              <p>
                Simple, transparent help for the most common (and most urgent)
                plumbing problems.
              </p>
            </div>

            <div className={styles.cards}>
              {data.services.map((s) => (
                <article key={s.title} className={styles.card}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Why homeowners choose us</h2>
              <p>
                We focus on clear communication, clean work, and durable repairs.
              </p>
            </div>

            <div className={styles.split}>
              <ul className={styles.list}>
                {data.whyUs.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className={styles.callout}>
                <strong>{data.whyUs.noteTitle}</strong>
                <p>{data.whyUs.noteBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>How it works</h2>
              <p>
                A straightforward process that keeps you in control from first
                call to final cleanup.
              </p>
            </div>

            <div className={styles.cards}>
              {data.process.steps.map((step, idx) => (
                <article key={step.title} className={styles.card}>
                  <h3>
                    {idx + 1}. {step.title}
                  </h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="service-area" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Service area</h2>
              <p>
                Add neighborhoods and cities you cover. This will be CMS-driven
                when Sanity is connected.
              </p>
            </div>

            <div className={styles.split}>
              <div className={styles.card}>
                <h3>Nearby neighborhoods</h3>
                <p>
                  Downtown • Riverside • Northside • West End • Lakeside •
                  Hillcrest
                </p>
              </div>
              <div className={styles.card}>
                <h3>Typical hours</h3>
                <p>
                  Mon–Fri 8am–6pm • Sat 9am–2pm • Emergency after-hours by
                  request
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Contact</h2>
              <p>
                For fastest service, call or text. For estimates, tell us what’s
                happening and share photos if you can.
              </p>
            </div>

            <div className={styles.split}>
              <div className={styles.card}>
                <h3>Call</h3>
                <p>
                  <a href={`tel:${data.phoneE164}`}>{data.phoneDisplay}</a>
                  <br />
                  <span style={{ color: "var(--muted)" }}>
                    Tap to call on mobile.
                  </span>
                </p>
              </div>

              <div className={styles.card}>
                <h3>Request a quote</h3>
                <p>
                  Hook up a free-tier form provider (or a simple email link) and
                  store submissions in Sanity if desired.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerGrid}`}>
          <div className={styles.footerTop}>
            <div className={styles.brand}>
              <span className={styles.logoWrap}>
                <Image
                  className={styles.logo}
                  src="FFOLogo.PNG"
                  alt="Flush Force One Plumbing logo"
                  width={220}
                  height={140}
                />
                <span>{data.businessName}</span>
              </span>
            </div>
            <p>
              Plumbing repairs, drain cleaning, and water heater service. Serving
              local homeowners with upfront pricing.
            </p>
          </div>

          <div className={styles.footerCols}>
            {data.footer.columns.map((col) => (
              <div key={col.title}>
                <h3>{col.title}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={`container ${styles.footerBottom}`}>
          <span>
            © {new Date().getFullYear()} {data.businessName}. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {data.footer.legalLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
