'use client'
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { LoaderProvider, useLoader } from "@/context/LoaderContext";


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
        <LoaderProvider>
          {children}
        </LoaderProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
