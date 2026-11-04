
const siteUrl = "https://hipercheck.com.br";

export default function sitemap() {
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      path: "/sobre-nos",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/trabalhe-conosco",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    {
      path: "/politica-de-cookies",
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
