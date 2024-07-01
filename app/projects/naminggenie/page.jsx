import Image from "next/image";

const Page = () => (
  <section className="flex flex-col items-center gap-10 p-10 w-full">
    <div className="max-w-3xl mt-10 flex flex-col gap-5">
      <h1 className="text-left font-bold text-4xl">How I built naminggenie.com</h1>
      <p className="leading-7 text-neutral-300 text-lg">
        This project taught me a great deal during its development. The website underwent four iterations, starting as an HTML, CSS, and JavaScript project, and has now evolved into a Next.js project (all screenshots will be attached below).
      </p>
    </div>
    <div className="max-w-lg w-full">
      <Image
        src="/naminggenie.png"
        alt="NamingGenie website"
        width={500}
        height={500}
        className="w-full brightness-75 border-2 border-white rounded-lg"
      />
    </div>
    <div className="max-w-3xl mt-5 flex flex-col gap-5">
      <p className="leading-7 text-neutral-300 text-lg">
        It started as a simple static one-page website. I only knew HTML and CSS at that time. My friend helped me set up a backend Express server that handles interactions with the API.
      </p>
    </div>
    <div className="max-w-lg w-full">
      <Image
        src="/dominator.png"
        alt="First version of NamingGenie"
        width={500}
        height={500}
        className="w-full brightness-75 border-2 border-white rounded-lg"
      />
    </div>
    <div className="max-w-3xl mt-3 flex flex-col gap-5">
      <p className="leading-7 text-neutral-300 text-lg">
        This was the first working copy and design of the website, built using only HTML and CSS with an Express server.
      </p>
    </div>
  </section>
);

export default Page;