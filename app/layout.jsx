import { DM_Sans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Nav from "@/components/self/Nav";
import Footer from "@/components/self/Footer";
import DrawerComponent from "@/components/self/DrawerComponent";
import Cta from "@/components/self/cta";
import { SoundProvider } from "@/components/hooks/SoundContext";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag's Portfolio",
  author: "Anurag",
  keywords: "full-stack developer, Anurag bevinal's portfolio, web applications, portfolio, front-end developer",
  openGraph: {
    type: "website",
    url: "https://anurag.be",
    title: "Anurag's Portfolio",
    description: "Full-stack developer portfolio showcasing projects and skills",
    image: "/header.webp",
  },
  twitter: {
    card: "summary_large_image",
    site: "@amanfromearth_",
    title: "Anurag's Portfolio",
    description: "Full-stack developer portfolio showcasing projects and skills",
    image: "/header.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
     
      <body className={`${dmsans.className} relative`}>
        <SoundProvider>
          <div className="fixed inset-0 hidden md:block h-screen -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
          <div id="scrollable-content" className="h-screen overflow-y-auto">
            <main className="relative text-white mx-auto w-full lg:w-[940px] lg:mt-28 bg-dark-blue rounded border border-neutral-700">
              <Nav />
              {children}
              <Cta />
              <Footer />
            </main>
          </div>
          <DrawerComponent />
        </SoundProvider>
      </body>
      <GoogleAnalytics gaId="G-E0FKVBGVHZ" />
    </html>
  );
}
