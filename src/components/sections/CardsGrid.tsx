import Container from "@/components/Container";

export default function CardsGrid({ eyebrow, title, subtitle, cards }: any) {
  if (!title && !(cards || []).length) return null;

  return (
    <section className="py-18 sm:py-22">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
              {eyebrow.toUpperCase()}
            </p>
          )}

          {title && (
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-4 text-base text-slate-600">{subtitle}</p>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {(cards || []).map((c: any, i: number) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_30px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(15,23,42,0.04),0_14px_40px_rgba(15,23,42,0.10)] transition"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {c?.title}
              </h3>
              {c?.text && (
                <p className="mt-2 text-sm text-slate-600">{c?.text}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}