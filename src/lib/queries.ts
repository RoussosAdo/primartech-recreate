export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,

  sections[]{
    ...,

    _type == "hero" => {
      eyebrow,
      headline,
      highlight,
      subheadline,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref,

      image{
        ...,
        asset->{
          _id,
          url,
          metadata{ dimensions{ width, height } }
        },
        alt
      }
    },

    _type == "logoMarquee" => {
      title,
      logos[]{
        name,
        "logoUrl": logo.asset->url
      }
    },

    _type == "cardsGrid" => {
      eyebrow,
      title,
      subtitle,
      cards[]{
        title,
        text
      }
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



