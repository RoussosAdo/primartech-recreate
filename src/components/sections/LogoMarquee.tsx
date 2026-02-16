import Container from "@/components/Container";

export default function LogoMarquee({ title, logos = [] }: any) {
  if (!logos?.length) return null;

  // Duplicate array for seamless loop
  const items = [...logos, ...logos];

  return (
    <section className="pb-14">
      <Container className="text-center">
        {title && (
          <p className="mx-auto inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {title.toUpperCase()}
          </p>
        )}

        <div className="relative mt-6 overflow-hidden">
          {/* soft edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />

          <div className="marquee flex w-max items-center gap-x-10 py-2">
            {items.map((l: any, i: number) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-semibold text-slate-400 hover:text-slate-600 transition"
              >
                {typeof l === "string" ? l : l?.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}