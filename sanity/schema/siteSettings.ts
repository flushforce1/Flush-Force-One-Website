import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "businessName",
      title: "Business name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneDisplay",
      title: "Phone (display)",
      type: "string",
      description: "Example: (555) 123-4567",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneE164",
      title: "Phone (E.164)",
      type: "string",
      description: "Example: +15551234567",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "serviceArea",
      title: "Service area line",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "footerLegalLinks",
      title: "Footer legal links",
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
    }),
  ],
});
