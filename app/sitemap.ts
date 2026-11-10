import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const paths = [
  "/",
  "/entreprenad/",
  "/lokalvard-stugservice/",
  "/projekt/",
  "/referenser/",
  "/om-oss/",
  "/kontakt/",
  "/allmanna-villkor/",
  "/integritetspolicy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.includes("villkor") || p.includes("integritet") ? 0.2 : 0.7,
  }));
}
