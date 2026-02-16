import type { Metadata } from "next";
import SectionRenderer from "@/components/SectionRenderer";
import { client } from "@/lib/sanity";
import { pageQuery } from "@/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(pageQuery, { slug: "home" });

  return {
    title: page?.seoTitle || page?.title || "Primartech",
    description: page?.seoDescription || "Primartech rebuild",
    openGraph: {
      title: page?.seoTitle || page?.title || "Primartech",
      description: page?.seoDescription || "Primartech rebuild",
    },
  };
}

export default async function Page() {
  const page = await client.fetch(pageQuery, { slug: "home" });

  return (
    <main>
      <SectionRenderer sections={page?.sections} />
    </main>
  );
}