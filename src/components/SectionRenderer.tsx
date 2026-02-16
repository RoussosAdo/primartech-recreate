import Hero from "./sections/Hero";
import LogoMarquee from "./sections/LogoMarquee";
import CardsGrid from "./sections/CardsGrid";

type Section = {
  _type: string;
  [key: string]: unknown;
};

type Props = {
  sections?: Section[];
};

export default function SectionRenderer({ sections }: Props) {
  if (!sections?.length) {
    return <div>No sections configured</div>;
  }

  return (
    <>
      {sections.map((section, i) => {
        switch (section._type) {
          case "hero":
            return <Hero key={section._key} {...(section as any)} />;
          case "logoMarquee":
            return <LogoMarquee key={section._key} {...(section as any)} />;
          case "cardsGrid":
            return <CardsGrid key={section._key} {...(section as any)} />;
          default:
            return null;
        }
      })}
    </>
  );
}