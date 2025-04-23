// This services Simulates DB fetch call 
import FetchSlugsResponse from "@/db/fetch-slugs/FetchSlugsResponse.json";

export async function dbFetchSlugs(){
    return FetchSlugsResponse;
}