import type { Metadata } from "next";
import "@/app/globals.css";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NavbarComponent } from "@/components/layout/NavbarComponent";

export const metadata: Metadata = {
  title: "SSG App",
  description: "An app in which all the routes are SSG'd",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cloudflareContext = await getCloudflareContext({
    async: true,
  });

  return (
    <html lang="en">
      <body>
        <NavbarComponent/>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className="pt-[150px]">
        {children}
        </div>
        <footer data-testid="app-version">
          Website version: {cloudflareContext.env.APP_VERSION}
        </footer>
      </body>
    </html>
  );
}
