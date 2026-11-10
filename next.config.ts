import type { NextConfig } from "next";

/**
 * Hostas på GitHub Pages = statisk export.
 *
 * Två lägen styrs av miljövariabler (sätts i .github/workflows/deploy.yml):
 *  - Förhandsvisning: NEXT_PUBLIC_SITE_URL saknas → sidan ligger under
 *    /lhls på github.io, med noindex så Google inte indexerar den.
 *  - Produktion: NEXT_PUBLIC_SITE_URL=https://www.lhls.se → rotdomän, indexerbar.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /kontakt/ → kontakt/index.html (fungerar utan serverregler)
  basePath,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [480, 960, 1440, 1920, 2560],
    imageSizes: [240],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
