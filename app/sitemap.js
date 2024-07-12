export default async function generateSitemap() {
  let sitemapEntries = [
    {
      url: "https://anurag.be/",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://anurag.be/about",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://anurag.be/projects/naminggenie",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://anurag.be/projects/varshaagro",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://anurag.be/projects/kineticx",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: "https://anurag.be/projects/cryptokids",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },

  ];

  return sitemapEntries;
}
