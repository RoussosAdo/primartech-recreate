import Container from "@/components/Container";

type Props = {
  eyebrow?: string;
  headline?: string;
  highlight?: string; // optional (π.χ. "that convert")
  subheadline?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export default function Hero({
  eyebrow,
  headline,
  highlight,
  subheadline,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: Props) {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      {/* background layer for hero only */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute right-[-200px] top-[-120px] h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <Container className="text-center">
        {eyebrow && (
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          {headline}{" "}
          {highlight ? (
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_1px_0_rgba(0,0,0,0.06)]">
  {highlight}
</span>
          ) : null}
        </h1>

        {subheadline && (
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
            {subheadline}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {primaryCtaLabel && (
            <a
              href={primaryCtaHref || "#"}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
            >
              {primaryCtaLabel}
              <span className="ml-2">→</span>
            </a>
          )}

          {secondaryCtaLabel && (
            <a
              href={secondaryCtaHref || "#"}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-500/10"
            >
              {secondaryCtaLabel}
            </a>
          )}
        </div>

        {/* spacer to match the “hero rhythm” */}
        <div className="h-14 sm:h-18" />
      </Container>
    </section>
  );
}