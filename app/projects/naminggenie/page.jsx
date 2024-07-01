import Image from "next/image";

const Page = () => (
  <section className="flex flex-col items-center gap-10 p-10 w-full">
    <div className="max-w-3xl mt-10 flex flex-col gap-5">
      <h1 className="text-left font-bold text-4xl">How I built naminggenie.com</h1>
      <p className="leading-7 text-neutral-300 text-lg">
        This is the project from which I learned a great deal during its
        development. The website underwent four iterations, starting as an HTML,
        CSS, and JavaScript project, and has now evolved into a Next.js project
        (all screenshots will be attached below).
      </p>
    </div>
    <div className="max-w-lg w-full">
      <Image
        src="/naminggenie.png"
        alt="naminggenie"
        width={500}
        height={500}
        className="w-full brightness-75 border-4 border-neutral-100 rounded-lg"
      />
    </div>

    
  </section>
);

export default Page;