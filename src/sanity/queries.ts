export const HOME_PAGE_QUERY = `
{
  "settings": *[_type == "siteSettings"][0]{
    businessName,
    phoneDisplay,
    phoneE164,
    serviceArea,
    "logo": logo.asset->url,
    footerLegalLinks[]{label, href}
  },
  "home": *[_type == "homePage"][0]{
    tagline,
    heroLead,
    primaryCtaLabel,
    secondaryCtaLabel,
    heroBullets,

    nav{
      servicesLabel,
      whyLabel,
      processLabel,
      contactLabel
    },
    heroMetaCards[]{title, body},
    footerBlurb,

    servicesHeading,
    servicesIntro,
    services[]{title, body},

    whyHeading,
    whyIntro,
    whyPoints,
    whyNoteTitle,
    whyNoteBody,

    processHeading,
    processIntro,
    processSteps[]{title, body},

    serviceAreaHeading,
    serviceAreaIntro,
    serviceAreaNeighborhoodsTitle,
    serviceAreaNeighborhoodsBody,
    serviceAreaHoursTitle,
    serviceAreaHoursBody,

    contactHeading,
    contactIntro,
    contactCallCardTitle,
    contactCallCardBody,
    contactQuoteCardTitle,
    contactQuoteCardBody,

    footerColumns[]{
      title,
      links[]{label, href}
    }
  }
}
`;
