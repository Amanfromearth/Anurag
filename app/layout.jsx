import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ModeToggle from "@/components/ui/modal-toggle";
import Nav from "@/components/self/Nav";
import Script from "next/script";
import Footer from "@/components/self/Footer";
import DrawerComponent from "@/components/self/DrawerComponent";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag's Portfolio",
  description: "Made by Anurag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} relative`}>
        <div className="fixed inset-0 h-[100dvh] -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        <div id="scrollable-content" className="h-[100dvh] overflow-y-auto">
          <main className="relative text-white mx-auto w-full lg:w-[960px] md:mt-28 bg-dark-blue rounded border border-neutral-700">
            <Nav />
            {children}
            <Footer/>
          </main>
        </div>
        <DrawerComponent />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}