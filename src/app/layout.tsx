import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ElderGuard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body
        className="bg-primary relative"
      >
        {children}
      </body>
    </html>
  );
}
