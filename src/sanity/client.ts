import { createClient } from "next-sanity";

// In GitHub Pages/static export builds, we want the site to build even if Sanity
// env vars aren't present. The page code already has content fallbacks.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5mlpmkfw";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "base_dataset";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // For public, read-only content this is fine; can be overridden via env.
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN
    ? process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true"
    : true,
});
