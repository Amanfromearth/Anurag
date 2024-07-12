import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    image: "/naminggenie.webp",
    title: "NamingGenie",
    description:
      "Generates domain names which are available to register based on the description of the website.",
    websiteUrl: "https://naminggenie.com",
    blurUrl:"data:image/webp;base64,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",
    readMoreUrl: "/projects/naminggenie",
  },
  {
    image: "/remotion.webp",
    title: "Kineticx",
    description:
      "A tool for generating typography videos from descriptions in seconds, perfect for marketing, content creation, and presentations.",
    websiteUrl: "https://kineticx.vercel.app/dashboard",
    blurUrl:"data:image/webp;base64,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",
    readMoreUrl: "/projects/kineticx",
  },
  {
    image: "/varshaagro2.webp",
    title: "A Giveaway Website",
    description:
      "A website to help conduct giveaways in our family-run shop and also increase traffic to the shop's WhatsApp group and Facebook group.",
    websiteUrl: "https://varshaagro.vercel.app/",
    blurUrl:"data:image/webp;base64,UklGRmIJAABXRUJQVlA4WAoAAAAgAAAAiQIA5wEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggdAcAADB8AJ0BKooC6AE+7XSxVDozKiMisrqzQB2JaW7hXmoYm05ZGf2oyPBoFgnzbqd8na+nfwAqSKo9pfWC4hpoX01jloOMDhU8UPEuoJAtMJs8gKnBy4DK/RKDhtgSCE8ZyYdUBwAzAg0TgKqoAwnICqqBs87Uclt18p/iXVjAULNf/bo7HH1QBVVAFT6Vk8nlID9ITeQqsOP3S3DDZI5BBilkNlmQ67mjsTKjwEf59davgTD9k1EyDjR2CANAQ1kZJY/f6w8tpPjF7oT80Qq7C3kKrG+UcluiR2OITcytkCHc6RPpoxe6E/AmHxKsRh8So7M9THtsgKn00iqgCp6ynbHtRfbcK3kKrG+ViMPiVgePt9vSYb3bw1L3ulkCpNe8hV1uvIdIH2+298Ocn+dDj/vN1ezKAW3XwJhGS+TygQ7az/AxyuwvArepj25nvhx9v6xYAyUPKa2UPVAVhb2p2b5tDcd9OEuvDfzJWHH23qY9xkV2T4cD2j5cBTCljqczNatg8nLWdBGznJ/erfKxGSk0PYLut8vhJgMQJzKw6sdtyAYIdJIECJWJiRv9Upux4+9uleNm4m9FLfKxF5E0Palt17vITKviFd0qGJFkGfhr6CcaOYlMvo3XaaMFVwfyVY3cXkdpAreQkoeYpahePUemPjXh+iQf7itNJDy+Ecma1XwMcqxv32iHAt3/tIMCjUZYalVdMvhkQO/AmaNe7UoX1gIB+CWu41xajRd7QFmKkuDJ9gK9UPhi7x3fCohDxLqCDDKkJlYJ2nAmHtTKAPDIRwbvsRrn+AsenyKkPEuoIeJcjhk28L1btDllSdeJ/iXFijUmW9vu6VrRLqCHiXUEQwKUm9S7VPhoeAZgD8CZo1z6igHfgTNGufUUJazE4DTwcb8dbP6/IUafIo/GCDQs6gh4l1AxwRC0OPt3/LR+fotBVlAgKIQ8S6gh4pPGFkwLzQ9RWV4Elp0RHMEIsr5wRLqCHiXTYd2ZITKJ/aIVWHHo/kUAAmAvwJmjXPqKAd+BM0a59LAXvJmBT8rPCok4wrzNm9cdl/MvzF5TfD/cSKgyYjDb7b1GtlM5fJ/nQpKhCqCh42ceLvHd8KiEPEuoISSM7fkEuWQFNGK14d+gZFVonyKPxgg0LOoIeJU6QIhn+GjsTK16MMRcr3fAyOM/i74f7iRUGTEi26rq9GB4AqqfuOgtLuNveKoZ/q+FDxLqCHiXXGlL5txOA2NJ3MMJyAgmICfWiDNOXZ0biRUGTEioP39Gk9Iqhy2IO1nMnVPrm2e+GAYINCzqCHjDGA6EFzkFTIYDLAfKSch1qPYMAwQaFnUEK6v0AAD+9XzweXkegGUxJ1rettzA1kgsqQtrlMfGMGTgaObKvN2cTng7dyZijJEXH+Uhi3X7wtSYcLTY0r2jBo3dDyboFtlHbPoPDZ3xwlG/z2qTz93IRkgwAmFYADBdg3ZRrNSo7ewIaRqUFkmyYhngSqrNNNOG4bxIc14+IWVk3X+m04T+M92YQchCBkNciweew10A5B5q6r1JtQHLScwzsomGxdcm0cTA1nAnXLWY4r9Sdfpkf+BcO+rJw3vP9rGHwXh8BzchAomBI8I1xAz28jKkAOli8pIzgUgjFgoR20hZrMK1WbmLYlpUpVXRaUMuET7jgKYaEIkl3DflalpXMf/aegk+yvj93VRhSff5GU5+7g/ZX+0E3Oj8cIFLYAweUG/KAB4DARX2dt/o04mEJshdLEdGUdZVgsKTGLbySA0OiLwFafR/2MZoju58Te4R8M/WPDyTiKE+ghWaos51zOk9EB3Qx6q1K7DsoEi+VplpaJEACsNJEFUX/n7ivO4q46ocZU7NZBDBrVlnP3ACTuJTdHmoRyQPK1F8rYtMjzX3vHq/93VU5cJ9rAFpBJncEr7AAF0umWC40u3fD2P8fRZUA4cgMpXLHNmJSV1tTRDKPNswM2CKgACQs615WNGm2GFoWG7xj4t9yYrIbpaRJ6a47Wk8tIVpwlTp3IAIAQpBi3dscxkL+SxJOMwXWogKSqn5E94U2oSPFBxtYeXXidutYu8btmDu5JRAACBwGH0o1Anw8xyrgCMy2oXK6XRWFXiops8z2ALrHzEAGKiRgDMat3EnS6TX55dpvDPcKtEbsAABGA2LTZ1tkXXM05GjhyvJSyG8ZHgAAClIKXcIuql3ORMEhTAip0eNSgPIvZ9Y6RRRPYsjfKIHeYAAB0S/eiPhV8NDWu0ekwVaJqcqHNemnrPaGUarMHMwElzoiLL2LgAa97U5y9UuMSEDxfCdarAybSZqFwTS9gs1J1gEz4GSDHvwACJEIuaB3zwnqhqsezpddtuo1DukiF8Q1vpbnwAC0q9KOmhfOqf5siXGWX+i2lHnjFd7GeQADJdhLWCEPTuvYpchj3iE1LRRfWS8XQAMl2W2nriU286fpjMdyo3keLhGZCYuqYQAFpi2Gy9k3f+wrNC7jZslmcAGk6oMImnJWIkg8zDJwTEgLamALbR+JXNwz1/nHVmw3n4dgrfsEdF8QCMS3gYAAA==",
    readMoreUrl: "/projects/varshaagro",
  },
  {
    image: "/cryptokids.webp",
    title: "CryptoKids NFT",
    description:
      "An NFT project made when I didn't know coding, so the website was created in Wix.",
    websiteUrl: "/",
    blurUrl:"data:image/webp;base64,UklGRhQFAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJgMAADAgAJ0BKkUBtwA+7XSxUrOsqiKldPrKcB2JZW7gB5+Tdv+TUSsAbO7kAgnzvXUCFu+Jgb7X24Yy9bd1JsKGVzyEtuKCNE7GmhBq1m1Tkyy+h96Ae+Kmv6e6cyFUeHjigOYhnFWha0gbp3XT1uuEEtluHnOkHOS1pvSq50Ywygdy1Hlqzy+H/Rg7HCHxeaLvXPt0merF8nU/03LDL6nMYkVtvUHmW3yOPwYrJoTsqb0kvdNDCHNfEj+9jHMTZcjdwQydQhOs9Rt8TT1JRSOtC/RdrcpiJigRV7MpzjQwzrbIiPQV3TvDYtewMD6XfnSYXIhaDA080qqLFr5KVaC2aa8v8MzhCVVFi0wAAP7tcT/5n+B/gdZ+XUPEBB35qPkwJb5kWTG5SBrBepXXVDtIAxuKtKvC66Za++Ri0BNeab3l0gnfeEnvmC2x+Se/737Wi5Ui+KQsbIA1fqUZGVPeuDk/87kJy8AuRQ/J8sOpCkPhZO8xqb6z7kLtGT7ROR2iyb92XnIgKjLt/rAs3Oi2kAVU4kSxq77u8sV9PvXo5bU7wJdhdNpdIsubbFZqY9i7fC1YrGwIL8oQdzgk4dSWEBjJrLEc6RDRQiulZ/p+5vIYlmvY5QD6J2a7LRfsUR2VpDiwcWn7BADAaQvSOTOWnGK60TfmqV1QorrG9JcWm4w+R6qVQNS4Of4CXNtis1MXobJ/mbCTSzBJeZIOugW7bUuVj2r148u1LDfgrxYqJkdrh10Qj8ddITAgnkbfaDeFI9Jct0QKrBHzxlioz6ha51OT9fJjFvwpdp347FEDCXWH7WBoCPRmsXwzl8SttGPl1Ue2LnZQ1qHCtzpDAJvOJnxtGvyJC9dYuTXFRYGHW9I2o52KfbvwDH6SkTa4nwAyh6rLwAeUdTPwBdSlENx8xBq270Jkf4p1v0MsLp5ESsvcXke54ifUCPtyGAALE7nQvBSjvrZHOeymRUJ0YglWeUewJyyAKKHA0FE604qMLRvm/GlWYyuzJgAAXduoxN9kpgFGOql0p6BFqvanP5yOUAAAC/maCNNspC5aeHuLw1z6JqgAAAAA",
    readMoreUrl: "/projects/cryptokids",
  },
];


const ProjectCard = ({
  image,
  blurUrl,
  title,
  description,
  websiteUrl,
  readMoreUrl,
}) => (
  <div className="max-w-3xl grid grid-rows-2 md:grid-rows-none md:grid-cols-2 bg-[#FFFFFF08] border-dashed border-2 m-3 p-3 rounded-lg border-neutral-600">
    <Image
      width={500}
      height={500}
      src={image}
      placeholder="blur"
      blurDataURL={blurUrl}
      quality={75}
      alt={title}
      className="w-full brightness-90 border-2 border-neutral-300 rounded-lg"
    />
    <div className="py-3 px-5 w-full flex flex-col justify-between">
      <div className="w-full flex flex-col gap-3">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="w-[80%] text-neutral-400">{description}</p>
      </div>
      <div className="w-full flex justify-center gap-3 text-xs md:text-sm items-center">
        <a
          href={websiteUrl}
          target="_blank"
          className="group relative inline-flex h-12 items-center justify-center rounded-full bg-neutral-800 px-3 md:px-6 font-medium text-neutral-200"
        >
          <span>Visit Website</span>
          <div className="relative ml-1 h-5 w-5 overflow-hidden">
            <ArrowUpRight className="absolute transition-all ease-in-out duration-300 group-hover:rotate-45" />
          </div>
        </a>
        <a
          href={readMoreUrl}
          className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50"
        >
          <span className="z-10 pr-2 group-hover:text-black transition-colors ease-in-out duration-300">
            Read More
          </span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-greeen transition-[width] ease-in-out duration-300 group-hover:w-[calc(100%-8px)]">
            <ArrowRight className="mr-3.5 text-black" />
          </div>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div id="projects" className="w-full px-1 pt-16 md:px-10 flex flex-col gap-5">
    <h2 className="w-fit mx-4 sm:mx-0 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Featured Projects
    </h2>
    <div className="flex w-full items-center justify-center flex-col">
      {projectsData.map((project, index) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
