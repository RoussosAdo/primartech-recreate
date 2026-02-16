import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  // “singleton” behavior: πάντα ένα doc
  groups: [
    { name: "header", title: "Header" },
    { name: "footer", title: "Footer" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logoText",
      title: "Logo Text",
      type: "string",
      group: "header",
      initialValue: "Primartech",
    }),

    defineField({
      name: "headerLinks",
      title: "Header Links",
      type: "array",
      of: [{ type: "navLink" }],
      group: "header",
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: "headerCta",
      title: "Header CTA",
      type: "object",
      group: "header",
      fields: [
        defineField({ name: "label", title: "Label", type: "string" }),
        defineField({ name: "href", title: "Href", type: "string" }),
        defineField({ name: "newTab", title: "Open in new tab", type: "boolean", initialValue: false }),
      ],
    }),

    defineField({
      name: "footerColumns",
      title: "Footer Columns",
      type: "array",
      group: "footer",
      of: [
        {
          type: "object",
          name: "footerColumn",
          title: "Footer Column",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "array",
              of: [{ type: "navLink" }],
              validation: (Rule) => Rule.min(1),
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      group: "footer",
      of: [{ type: "navLink" }],
    }),

    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
      group: "footer",
      initialValue: "© Primartech. All rights reserved.",
    }),
  ],

  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});