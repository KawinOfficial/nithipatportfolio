import { META_DESC, META_NAME } from "@/constants/metadata";
import MainNav from "@/components/layout/main-nav";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import cn from "classnames";

import "@/assets/globals.css";

export const metadata: Metadata = {
  title: META_NAME,
  description: META_DESC,
};

const mavenPro = Maven_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{META_NAME}</title>
      </head>
      <body>
        <main
          className={cn(
            "min-h-screen flex flex-col h-full bg-white",
            mavenPro.className
          )}
        >
          <MainNav />
          <div className="flex-grow h-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
