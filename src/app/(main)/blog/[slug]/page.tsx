import { ArticleData } from "@/types/blog_types";
import { notFound } from "next/navigation";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { Source_Serif_4 } from "next/font/google";

//you can replace baseUrl with your api and call your DB from the page
const baseUrl = "http://dashcruisedev.com";

const source_serif_4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  //swap to improve performance
  display: "swap",
});

async function fetchArticleBySlug(slug: string) {
  const response = await fetch(
    `${baseUrl}/api/fetch-post-by-slug?slug=${slug}`
  );
  const { data, error } = await response.json();
  if (!response.ok || error)
    throw new Error(`Failed to fetch article ${slug} : ${error}`);
  return data[0];
}

//pre-render pages for each slug that comes from DB
export async function generateStaticParams() {
  const response = await fetch(`${baseUrl}/api/fetch-slugs-with-locale`);

  console.log("Response:", response);

  if (!response.ok) throw new Error(`Failed to fetch slugs: ${response.text()}`);

  const { data, error } = await response.json();

  //generateStaticParams expects an array of objects to be returned
  const listMap = data.map((item: { slug: string }) => ({ slug: item.slug }))
  console.log("List Map:", listMap)
  return listMap;
}

//generate metadata based on individual article data
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article: ArticleData | null = await fetchArticleBySlug(slug);
  if (!article) notFound();

  return {
    title: article.title,
    description: article.introduction,
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  //since params are Promise, we have to await them
  const { slug } = await params;

  //render notFound if there is no slug
  if (!slug) {
    notFound();
  }

  //now we have to fetch a single article based on our slug
  const article: ArticleData | null = await fetchArticleBySlug(slug);
  console.log("article data:", article);
  if (!article) notFound();

  return (
    <div
      className={`${source_serif_4.className} mx-auto text-gray-700 lg:w-1/2 font-normal text-medium-body leading-medium-body w-full text-base`}
    >
      <h1 className="text-5xl font-semibold text-center">
        {article.introduction} article introduction
      </h1>
      <div className="mt-10 relative w-full aspect-video">
        <Image
          alt="main-image"
          src="https://imagedelivery.net/Ap_RIQMnvK_LYOq1vIFisQ/767eb82b-aa2e-4a09-52a8-0286834e1b00/hd1920x1080"
          fill
          priority
          fetchPriority="high"
          loading="eager"
        />
      </div>
      {/* Sanitize data if it comes from CMS */}
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(article.body),
        }}
        className="mb-50"
      ></div>
    </div>
  );
}
