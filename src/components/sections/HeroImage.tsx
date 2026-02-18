import Image from "next/image";
import Container from "@/components/Container";

type Props = {
  src?: string; // αν θες από Sanity αργότερα
  alt?: string;
};

export default function HeroImage({ src, alt }: Props) {
  // Default local image (από public/)
  const imageSrc = src || "/images/hero-dashboard.png";
  const imageAlt = alt || "Dashboard preview";

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1600}
                height={900}
                className="h-auto w-full"
                //  αυτό βοηθάει LCP/CLS
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 900px, 1000px"
                // ΔΕΝ είναι hero πλέον → όχι priority
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
