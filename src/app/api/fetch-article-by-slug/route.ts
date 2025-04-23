import { dbFetchArticleBySlug } from "@/db/fetch-by-slug/dbFetchArticleBySlug";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Missing slug" });
    }
    const { data } = await dbFetchArticleBySlug(slug);
/*     if (error) {
      return NextResponse.json(
        { error: `Error fetching article: ${error}` }
      );
    }
 */
    return Response.json({ data: JSON.parse(JSON.stringify(data)) });
    //eslint-disable-next-line
  } catch (error:any) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(Error)
       }
    );
  }
}
