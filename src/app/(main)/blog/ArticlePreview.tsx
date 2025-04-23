import Link from "next/link";
import Image from "next/image";
type ArticleParams = {
  slug: string;
  image_src: string;
  title: string;
  description: string;
};

export async function ArticleContainer({ slug, image_src, title, description }: ArticleParams) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
    <Link href={`/blog/${slug}`}>
      <div className=" w-[450px] h-[350px] border-2 border-green-500 flex cursor-pointer flex-col gap-2 hover:opacity-95">
        <span className="block relative aspect-video rounded-md bg-muted">
          <Image src={`${image_src}`} alt="article image" fill />
        </span>
        <h1 className="lg:text-xl text-sm font-bold tracking-tight">
          {title}
        </h1>
        <p className="lg:text-base mt-[-6px] text-[13px] ">
          {description}
        </p>
      </div>
    </Link>
  );
}
