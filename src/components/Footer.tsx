import Container from "@/components/Container";

type NavLink = { label: string; href: string; newTab?: boolean };
type FooterColumn = { title: string; links: NavLink[] };

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Footer({
  columns,
  socials,
  copyright,
}: {
  columns?: FooterColumn[];
  socials?: NavLink[];
  copyright?: string;
}) {
  return (
    <footer className="mt-16 border-t border-black/10 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {(columns ?? []).map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold text-slate-900">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {(col.links ?? []).map((l) => (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      target={isExternal(l.href) && l.newTab ? "_blank" : undefined}
                      rel={isExternal(l.href) && l.newTab ? "noreferrer" : undefined}
                      className="text-sm text-slate-600 hover:text-slate-900"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-3 text-sm font-semibold text-slate-900">Social</h3>
            <ul className="space-y-2">
              {(socials ?? []).map((l) => (
                <li key={l.href + l.label}>
                  <a
                    href={l.href}
                    target={isExternal(l.href) && l.newTab ? "_blank" : undefined}
                    rel={isExternal(l.href) && l.newTab ? "noreferrer" : undefined}
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-500">
          {copyright ?? "© Primartech. All rights reserved."}
        </div>
      </Container>
    </footer>
  );
}