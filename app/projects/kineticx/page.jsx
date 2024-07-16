import { separator2 } from "@/lib/retiriver";
import "/public/css/blog.css";


async function getBlogData() {
  const filePath = './content/kineticx.md';
  const data = await separator2(filePath);
  return data;
}

export async function generateMetadata() {
  const data = await getBlogData();
  return {
    title: data.Metatitle,
    description: data.Metadescription,
    alternates: {
      canonical: "https://anurag.be/projects/kineticx",
    },
  };
}

export default async function BlogPage() {
  const data = await getBlogData();
  return (
    <section className="w-full h-full">
      <div className="px-5 md:mx-auto flex flex-col pt-24 max-w-3xl items-center justify-center">
        <article
          className="blog-content mb-8"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      </div>
    </section>
  );
}