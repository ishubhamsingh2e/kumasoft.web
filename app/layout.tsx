import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { grift } from "./font";
import { Footer } from "@/components/footer";



export const metadata: Metadata = {
  title: "KumaSoft - Next Gen Softwares",
  description: "KumaSoft is a software development company that specializes in building cutting-edge web and mobile applications using the latest technologies. Our team of experienced developers, designers, and project managers work closely with clients to deliver high-quality solutions that meet their unique needs and exceed their expectations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icon-light.png" type="image/x-icon" />
      </head>
      <body
        className={`${grift.variable}  antialiased  bg-contain` }
      >
        <Navigation/>
        {children}
        <Footer/>
      
      </body>
    </html>
  );
}
