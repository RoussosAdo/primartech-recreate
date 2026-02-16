export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  slug,
  sections[]{
    ...,
    _type == "logoMarquee" => {
      title,
      logos[]{ name, "logoUrl": logo.asset->url }
    }
  }
}`;

import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    title,
    logoText,
    headerLinks[]{label, href, newTab},
    headerCta{label, href, newTab},
    footerColumns[]{
      title,
      links[]{label, href, newTab}
    },
    socialLinks[]{label, href, newTab},
    copyright
  }
`;

