import { Suspense } from "react";
import { ArticleContainer } from "./ArticlePreview";

export const dynamicParams = false;
export const dynamic = "force-static";
//revalidate every 1h
export const revalidate = 3600;

export async function generateMetadata() {
  return {
    metadataBase: new URL(
      "https://templates.dashcruisedev.com/opennextjs-cloudflare-ssg-simple"
    ),
    title: "Title that Appears in Google Search Result",
    description: "Desrciption that Appears in Google Search Result",
    keywords: "Place page keywords here",
  };
}

export default async function BlogPage() {
  return (
    <div>
        <ArticleContainer
          slug="seo-introduction"
          image_src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/767eb82b-aa2e-4a09-52a8-0286834e1b00/card600x400"
          title="Exploring Danish Coast"
          description="Exploring Danish Coast Article Text"
        />
    </div>
  );
}
