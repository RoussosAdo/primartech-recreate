import { defineField, defineType } from "sanity";

export const cardsGrid = defineType({
  name: "cardsGrid",
  title: "Cards Grid",
  type: "object",

  preview: {
  select: { title: "title" },
  prepare({ title }) {
    return { title: `Cards Grid — ${title || "Untitled"}` };
  },
},
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text" }),
            defineField({ name: "icon", title: "Icon", type: "string" }),
          ],
        },
      ],
    }),
  ],
});