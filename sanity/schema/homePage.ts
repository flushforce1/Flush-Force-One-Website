import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Hero tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA label",
      type: "string",
      initialValue: "Call for Service",
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA label",
      type: "string",
      initialValue: "Request a Quote",
    }),
    defineField({
      name: "heroBullets",
      title: "Hero bullets",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "heroLead",
      title: "Hero supporting text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "servicesHeading",
      title: "Services section heading",
      type: "string",
      initialValue: "Core services",
    }),
    defineField({
      name: "servicesIntro",
      title: "Services section intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: "whyHeading",
      title: "Why Us section heading",
      type: "string",
      initialValue: "Why homeowners choose us",
    }),
    defineField({
      name: "whyIntro",
      title: "Why Us section intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whyPoints",
      title: "Why Us points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "whyNoteTitle",
      title: "Why Us note title",
      type: "string",
    }),
    defineField({
      name: "whyNoteBody",
      title: "Why Us note body",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "processHeading",
      title: "Process section heading",
      type: "string",
      initialValue: "How it works",
    }),
    defineField({
      name: "processIntro",
      title: "Process section intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "processSteps",
      title: "Process steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: "serviceAreaHeading",
      title: "Service area section heading",
      type: "string",
      initialValue: "Service area",
    }),
    defineField({
      name: "serviceAreaIntro",
      title: "Service area section intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "serviceAreaNeighborhoodsTitle",
      title: "Neighborhoods card title",
      type: "string",
      initialValue: "Nearby neighborhoods",
    }),
    defineField({
      name: "serviceAreaNeighborhoodsBody",
      title: "Neighborhoods card body",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "serviceAreaHoursTitle",
      title: "Hours card title",
      type: "string",
      initialValue: "Typical hours",
    }),
    defineField({
      name: "serviceAreaHoursBody",
      title: "Hours card body",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "contactHeading",
      title: "Contact section heading",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "contactIntro",
      title: "Contact section intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "contactCallCardTitle",
      title: "Contact call card title",
      type: "string",
      initialValue: "Call",
    }),
    defineField({
      name: "contactCallCardBody",
      title: "Contact call card body",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "contactQuoteCardTitle",
      title: "Contact quote card title",
      type: "string",
      initialValue: "Request a quote",
    }),
    defineField({
      name: "contactQuoteCardBody",
      title: "Contact quote card body",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "footerColumns",
      title: "Footer columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string", title: "Label" },
                    { name: "href", type: "string", title: "URL" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "nav",
      title: "Navigation",
      type: "object",
      fields: [
        {
          name: "servicesLabel",
          title: "Services link label",
          type: "string",
          initialValue: "Services",
        },
        {
          name: "whyLabel",
          title: "Why Us link label",
          type: "string",
          initialValue: "Why Us",
        },
        {
          name: "processLabel",
          title: "Process link label",
          type: "string",
          initialValue: "Process",
        },
        {
          name: "contactLabel",
          title: "Contact link label",
          type: "string",
          initialValue: "Contact",
        },
      ],
    }),
    defineField({
      name: "heroMetaCards",
      title: "Hero meta cards",
      type: "array",
      description: "The two small cards under the hero CTAs.",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text", rows: 2 },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer description (blurb)",
      type: "text",
      rows: 3,
    }),
  ],
});
