import { defineField, defineType } from "sanity";

export const navLink = defineType({
  name: "navLink",
  title: "Navigation Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
      description: "Internal (/about) or external (https://...)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "newTab",
      title: "Open in new tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
});