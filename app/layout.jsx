import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import ModeToggle from "@/components/ui/modal-toggle";
import Nav from "@/components/self/Nav";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anurag's Portfolio",
  description: "Created by Anurag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
          <div className="relative min-h-screen w-full overflow-x-hidden">
            <main className="flex min-h-screen w-full flex-col items-center justify-between px-4 sm:px-6 py-16 sm:py-24">
              <div className="fixed top-4 right-4 sm:top-7 sm:right-7 z-50">
                <ModeToggle />
              </div>
              <section className="relative w-full max-w-[960px] flex flex-col items-center justify-center bg-neutral-200 dark:bg-dark-blue rounded border border-neutral-700">
                <Nav />
                {children}
              </section>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}