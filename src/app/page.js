import Image from "next/image";
import styles from "./page.module.css";

import { sanityClient } from "../sanity/client";
import { HOME_PAGE_QUERY } from "../sanity/queries";

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

// Replace this with Sanity fetches.
async function getHomePageData() {
  try {
    const res = await sanityClient.fetch(HOME_PAGE_QUERY);

    const settings = res?.settings;
    const home = res?.home;

    if (!settings || !home) {
      return {
        ...SITE_FALLBACK,
        nav: {
          servicesLabel: "Services",
          whyLabel: "Why Us",
          processLabel: "Process",
          contactLabel: "Contact",
        },
      };
    }

    return {
      businessName: settings.businessName ?? SITE_FALLBACK.businessName,
      tagline: home.tagline ?? SITE_FALLBACK.tagline,
      phoneDisplay: settings.phoneDisplay ?? SITE_FALLBACK.phoneDisplay,
      phoneE164: settings.phoneE164 ?? SITE_FALLBACK.phoneE164,
      serviceArea: settings.serviceArea ?? SITE_FALLBACK.serviceArea,
      logoUrl: settings.logo ?? null,
      ctas: {
        primaryLabel: home.primaryCtaLabel ?? SITE_FALLBACK.ctas.primaryLabel,
        secondaryLabel:
          home.secondaryCtaLabel ?? SITE_FALLBACK.ctas.secondaryLabel,
      },
      nav: {
        servicesLabel: home?.nav?.servicesLabel ?? "Services",
        whyLabel: home?.nav?.whyLabel ?? "Why Us",
        processLabel: home?.nav?.processLabel ?? "Process",
        contactLabel: home?.nav?.contactLabel ?? "Contact",
      },
      heroMetaCards:
        home.heroMetaCards?.length
          ? home.heroMetaCards
          : [
              {
                title: "Fast response",
                body: "We’ll confirm scheduling by text/call, and keep you updated.",
              },
              {
                title: "Upfront pricing",
                body: "Options explained clearly before work begins.",
              },
            ],
      heroLead: home.heroLead ?? null,
      heroBullets: home.heroBullets?.length
        ? home.heroBullets
        : SITE_FALLBACK.heroBullets,
      servicesHeading: home.servicesHeading ?? "Core services",
      servicesIntro: home.servicesIntro ?? null,
      services: home.services?.length ? home.services : SITE_FALLBACK.services,
      why: {
        heading: home.whyHeading ?? "Why homeowners choose us",
        intro: home.whyIntro ?? null,
        points: home.whyPoints?.length
          ? home.whyPoints
          : SITE_FALLBACK.whyUs.points,
        noteTitle: home.whyNoteTitle ?? SITE_FALLBACK.whyUs.noteTitle,
        noteBody: home.whyNoteBody ?? SITE_FALLBACK.whyUs.noteBody,
      },
      process: {
        heading: home.processHeading ?? "How it works",
        intro: home.processIntro ?? null,
        steps: home.processSteps?.length
          ? home.processSteps
          : SITE_FALLBACK.process.steps,
      },
      serviceAreaSection: {
        heading: home.serviceAreaHeading ?? "Service area",
        intro: home.serviceAreaIntro ?? null,
        neighborhoodsTitle:
          home.serviceAreaNeighborhoodsTitle ?? "Nearby neighborhoods",
        neighborhoodsBody: home.serviceAreaNeighborhoodsBody ?? null,
        hoursTitle: home.serviceAreaHoursTitle ?? "Typical hours",
        hoursBody: home.serviceAreaHoursBody ?? null,
      },
      contact: {
        heading: home.contactHeading ?? "Contact",
        intro: home.contactIntro ?? null,
        callTitle: home.contactCallCardTitle ?? "Call",
        callBody: home.contactCallCardBody ?? null,
        quoteTitle: home.contactQuoteCardTitle ?? "Request a quote",
        quoteBody: home.contactQuoteCardBody ?? null,
      },
      footer: {
        blurb:
          home.footerBlurb ??
          "Plumbing repairs, drain cleaning, and water heater service. Serving local homeowners with upfront pricing.",
        columns: home.footerColumns?.length
          ? home.footerColumns
          : SITE_FALLBACK.footer.columns,
        legalLinks: settings.footerLegalLinks?.length
          ? settings.footerLegalLinks
          : SITE_FALLBACK.footer.legalLinks,
      },
    };
  } catch {
    return {
      ...SITE_FALLBACK,
      nav: {
        servicesLabel: "Services",
        whyLabel: "Why Us",
        processLabel: "Process",
        contactLabel: "Contact",
      },
    };
  }
}

export default async function Home() {
  const data = await getHomePageData();

  const heroMetaCards = Array.isArray(data?.heroMetaCards)
    ? data.heroMetaCards
    : [];

  const why = data?.why ?? { heading: "Why homeowners choose us", intro: null, points: [], noteTitle: "", noteBody: "" };
  const process = data?.process ?? { heading: "How it works", intro: null, steps: [] };
  const serviceAreaSection = data?.serviceAreaSection ?? { heading: "Service area" };
  const contact = data?.contact ?? { heading: "Contact" };
  const footer = data?.footer ?? { blurb: "", columns: [], legalLinks: [] };

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
                src={data.logoUrl || "FFOLogo.PNG"}
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
                <a href="#services">{data.nav.servicesLabel}</a>
              </li>
              <li>
                <a href="#why">{data.nav.whyLabel}</a>
              </li>
              <li>
                <a href="#process">{data.nav.processLabel}</a>
              </li>
              <li>
                <a href="#contact">{data.nav.contactLabel}</a>
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
                  {data.heroLead ||
                    "Same-day availability when possible. Clear options. Respectful technicians. Quality parts."}
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
                  {heroMetaCards.slice(0, 2).map((c) => (
                    <li key={c.title} className={styles.metaCard}>
                      <p className={styles.metaTitle}>{c.title}</p>
                      <p className={styles.metaBody}>{c.body}</p>
                    </li>
                  ))}
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
              <h2>{data.servicesHeading || "Core services"}</h2>
              <p>
                {data.servicesIntro ||
                  "Simple, transparent help for the most common (and most urgent) plumbing problems."}
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
              <h2>{why.heading}</h2>
              {why.intro ? <p className={styles.lede}>{why.intro}</p> : null}
            </div>

            <div className={styles.split}>
              <ul className={styles.list}>
                {(why.points || []).map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className={styles.callout}>
                <p className={styles.noteTitle}>{why.noteTitle}</p>
                <p className={styles.noteBody}>{why.noteBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{process.heading}</h2>
              {process.intro ? <p className={styles.lede}>{process.intro}</p> : null}
            </div>

            <div className={styles.cards}>
              {(process.steps || []).map((s, idx) => (
                <article key={s.title || idx} className={styles.card}>
                  <h3>
                    {idx + 1}. {s.title}
                  </h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="service-area"
          className={`${styles.section} ${styles.sectionAlt}`}
        >
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{serviceAreaSection.heading}</h2>
              <p>
                {serviceAreaSection.intro ||
                  "Add neighborhoods and cities you cover. This will be CMS-driven when Sanity is connected."}
              </p>
            </div>

            <div className={styles.split}>
              <div className={styles.card}>
                <h3>{serviceAreaSection.neighborhoodsTitle}</h3>
                <p>
                  {serviceAreaSection.neighborhoodsBody ||
                    "List the towns/areas you serve. (CMS editable)"}
                </p>
              </div>

              <div className={styles.card}>
                <h3>{serviceAreaSection.hoursTitle}</h3>
                <p>
                  {serviceAreaSection.hoursBody ||
                    "Add your normal hours and your after-hours policy. (CMS editable)"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>{contact.heading}</h2>
              <p>
                {contact.intro ||
                  "For fastest service, call or text. For estimates, tell us what’s happening and share photos if you can."}
              </p>
            </div>

            <div className={styles.split}>
              <div className={styles.card}>
                <h3>{contact.callTitle}</h3>
                <p>
                  <a href={`tel:${data.phoneE164}`}>{data.phoneDisplay}</a>
                  <br />
                  <span style={{ color: "var(--muted)" }}>
                    {contact.callBody || "Tap to call on mobile."}
                  </span>
                </p>
              </div>

              <div className={styles.card}>
                <h3>{contact.quoteTitle}</h3>
                <p>
                  {contact.quoteBody ||
                    "Hook up a free-tier form provider (or a simple email link) and store submissions in Sanity if desired."}
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
                  src={data.logoUrl || "FFOLogo.PNG"}
                  alt="Flush Force One Plumbing logo"
                  width={220}
                  height={140}
                />
                <span>{data.businessName}</span>
              </span>
            </div>
            <p className={styles.footerBlurb}>{footer.blurb}</p>
          </div>

          <div className={styles.footerCols}>
            {(footer.columns || []).map((col) => (
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
            {(footer.legalLinks || []).map((l) => (
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
