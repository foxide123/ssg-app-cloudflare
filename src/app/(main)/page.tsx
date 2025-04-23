import { Metadata } from "next";
import styles from "./page.module.css";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import HomeData from "@/data/en/HomeData.json"

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://templates.dashcruisedev.com/opennextjs-cloudflare-ssg-simple"),
  title: "Title that Appears in Google Search Result",
  description: "Desrciption that Appears in Google Search Result",
  keywords: "Place page keywords here",
};

export default async function Home() {
  const cloudflareContext = await getCloudflareContext({
    async: true,
  });
  
  const HeroData  = HomeData.Hero;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="text-4xl">{HeroData.Header}</h1>
        <p data-testid="my-secret">{cloudflareContext.env.MY_SECRET}</p>
      </main>
    </div>
  );
}
