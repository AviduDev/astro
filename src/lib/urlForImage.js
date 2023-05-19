import { useSanityClient } from "astro-sanity";
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(useSanityClient);

export function urlFor(source) {
  return builder.image(source);
}