import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",

  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare({ title, slug }) {
      return { title: title || "Page", subtitle: slug ? `/${slug}` : "" };
    },
  },

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "hero" }, { type: "logoMarquee" }, { type: "heroImage" }, { type: "cardsGrid" }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});