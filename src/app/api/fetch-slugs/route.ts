import { dbFetchSlugs } from "@/db/fetch-slugs/dbFetchSlugs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    //Replace with your DB implementation
    const { data } = await dbFetchSlugs();

   /*  if (error) {
      return NextResponse.json({ error: error.message || error });
    } */

    return NextResponse.json({data: JSON.parse(JSON.stringify(data))});
  } catch (error) {
    return NextResponse.json({
      error: `Error while fetching slugs: ${error}`,
    });
  }
}
