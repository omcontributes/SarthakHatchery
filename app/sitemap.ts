import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://sarthak-hatchery-web.vercel.app", lastModified: new Date() }];
}