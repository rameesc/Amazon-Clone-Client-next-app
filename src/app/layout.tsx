import type { Metadata } from "next";
import "@/styles/globals.css"
import {Poppins} from "next/font/google"
import { TanstackQueryProvider } from "@/provaider/TanstackQueryProvider";
import { ToastProvider } from "@/provaider/ToastProvider";
import { SessionProviderData } from "@/provaider/SessionProvider";
import Header from "./layout/Header/Header";
import { Footer } from "./layout/Footer/Footer";


export const metadata: Metadata = {
  title: "Shoping",
  description: "Generated by create next app",
};

const roboto=Poppins({
  subsets:["latin"],
  weight:["400","700","900"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   <TanstackQueryProvider>
      <body className={roboto.className}>
      <SessionProviderData>
        <Header/>
        
          {children}
         <ToastProvider/>
        
         <Footer/>
      </SessionProviderData>
      </body>
      </TanstackQueryProvider>
    </html>
  );
}
