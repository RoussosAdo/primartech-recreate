import { defineField, defineType } from "sanity";

export const logoMarquee = defineType({
  name: "logoMarquee",
  title: "Logo Marquee",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "name", media: "logo" } },
        },
      ],
      validation: (Rule) => Rule.min(3),
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Logo Marquee" };
    },
  },
});