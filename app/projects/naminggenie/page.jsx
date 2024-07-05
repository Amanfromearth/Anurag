import { separator2 } from "@/lib/retiriver";
import "/public/css/blog.css";
import Cta from "@/components/self/cta";

async function getBlogData() {
  const filePath = './content/naminggenie.md';
  const data = await separator2(filePath);
 
  return {
    props: { data },
  };
}

export default async function BlogPage() {
  const { props } = await getBlogData();


  return (
    <div className=" px-5  md:mx-auto flex flex-col pt-24 max-w-3xl items-center justify-center">
      <div className="blog-content mb-8" dangerouslySetInnerHTML={{ __html: props.data.text }} />
      <Cta/>
    </div>
  );
}