import Hero from "./sections/Hero";
import LogoMarquee from "./sections/LogoMarquee";
import HeroImage from "./sections/HeroImage";
import CardsGrid from "./sections/CardsGrid";

type Section = {
  _type: string;
  _key?: string;
  [key: string]: unknown;
};

type Props = {
  sections?: Section[];
};

export default function SectionRenderer({ sections }: Props) {
  if (!sections?.length) return <div>No sections configured</div>;

  return (
    <>
      {sections.map((section, i) => {
        const key = section._key ?? `${section._type}-${i}`;

        switch (section._type) {
          case "hero":
            return <Hero key={key} {...(section as any)} />;
          case "logoMarquee":
            return <LogoMarquee key={key} {...(section as any)} />;
          case "heroImage":
            return <HeroImage key={section._key} {...(section as any)} />;
          case "cardsGrid":
            return <CardsGrid key={key} {...(section as any)} />;
          default:
            return null;
        }
      })}
    </>
  );
}
