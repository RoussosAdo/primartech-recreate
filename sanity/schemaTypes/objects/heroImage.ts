import { defineField, defineType } from "sanity";

export const heroImage = defineType({
  name: "heroImage",
  title: "Hero Image",
  type: "object",
  fields: [
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (Rule) =>
        Rule.required().warning("Alt text is required for accessibility/SEO."),
    }),
  ],
  preview: {
    select: { title: "alt" },
    prepare({ title }) {
      return { title: title || "Hero Image" };
    },
  },
});
