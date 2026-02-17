/** @type {import('next').NextConfig} */
const repo = "Flush-Force-One-Website";

// Explicit flag: only set this when deploying to https://<org>.github.io/<repo>/
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isGitHubPages ? `/${repo}` : "",
  assetPrefix: isGitHubPages ? `/${repo}/` : "",
};

export default nextConfig;
