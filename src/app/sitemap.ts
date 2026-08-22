import { MetadataRoute } from "next";
import { getAllPosts, getAllCategories } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pritamchatterjee.com";

  // Static routes
  const routes = [
    "",
    "/seo-expert-in-kolkata",
    "/portfolio",
    "/blogs",
    "/services",
    "/services/seo",
    "/services/seo/kolkata",
    "/services/ppc",
    "/services/web-development",
    "/website-audit",
    "/contact-us",
    "/about-us",
    "/privacy-policy",
    "/terms-condition",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  try {
    const [posts, categories] = await Promise.all([
      getAllPosts(),
      getAllCategories(),
    ]);

    // Blog post routes
    const postRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    // Category routes
    const categoryRoutes = categories.map((cat) => ({
      url: `${baseUrl}/blog/category/${cat.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));

    // Author routes
    const authorRoutes = Array.from(new Set(posts.map((p) => p.author.slug))).map((authorSlug) => ({
      url: `${baseUrl}/blog/author/${authorSlug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

    return [...routes, ...postRoutes, ...categoryRoutes, ...authorRoutes];
  } catch (error) {
    console.error("Failed to generate dynamic sitemap:", error);
    return routes;
  }
}
