import type { Metadata } from "next";
import "../app/globals.css"
import Navbar from "../app/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          <p>
            Made by Ayush · <span>2026</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
