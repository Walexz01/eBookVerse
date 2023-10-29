import type { Metadata } from "next";
import NavBar from "./_components/_in_resuable/NavBar";
import "./_styles/landingPage.css";
import { inter, noto_Sans, poppins, roboto_mono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "eBookVerse",
  description: "Where Stories Unfold Digitally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${noto_Sans.variable} ${poppins.variable} ${roboto_mono.variable} landing_page`}
      >
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
