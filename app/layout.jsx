import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ModeToggle from "@/components/ui/modal-toggle";
import Nav from "@/components/self/Nav";
import Script from 'next/script'
import Footer from "@/components/self/Footer";
const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag's Portfolio",
  description: "Generated by create by Anurag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className="relative h-screen w-full overflow-auto">
              <main className="flex h-full w-full flex-col items-center justify-between lg:px-2 lg:py-24">
                <div className="absolute top-7 hidden md:block right-7">
                  <ModeToggle />
                </div>
                <section className="relative inline-flex w-full lg:w-[960px] flex-col items-center justify-center bg-neutral-200 dark:bg-dark-blue rounded border border-neutral-700">
                  <Nav />
                  {children}
                  <Footer/>
                </section>
              </main>
            </div>
          </div>
        </ThemeProvider>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
