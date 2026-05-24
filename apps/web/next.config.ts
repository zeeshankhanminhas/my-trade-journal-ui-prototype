import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/my-trade-journal-ui-prototype" : "",
  assetPrefix: isGithubPages ? "/my-trade-journal-ui-prototype/" : "",
};

export default nextConfig;
