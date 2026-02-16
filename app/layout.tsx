import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { client } from "@/lib/sanity";
import { siteSettingsQuery } from "@/lib/queries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Primartech",
  description: "Primartech website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(siteSettingsQuery);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header
          logoText={settings?.logoText}
          links={settings?.headerLinks}
          cta={settings?.headerCta}
        />

        {children}

        <Footer
          columns={settings?.footerColumns}
          socials={settings?.socialLinks}
          copyright={settings?.copyright}
        />
      </body>
    </html>
  );
}