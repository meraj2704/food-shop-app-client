import type { Metadata } from "next";
import { Inter, Playfair_Display, Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ThemeSwitcher from "@/components/darkmode/ThemeSwitcher";
import ReactQueryProvider from "./ReactQueryProvider";
import LayoutProvider from "./LayoutProvider";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Food Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-bgColor`}>
        <ReactQueryProvider>
          <LayoutProvider>{children}</LayoutProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
