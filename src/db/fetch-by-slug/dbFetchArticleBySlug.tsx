// This services Simulates DB fetch call 
import FetchArticleBySlugResponse from "@/db/fetch-by-slug/FetchArticleBySlugResponse.json";

//eslint-disable-next-line
export async function dbFetchArticleBySlug(slug: string){
    return FetchArticleBySlugResponse;
}