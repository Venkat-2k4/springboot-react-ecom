import type { Metadata } from "next";
import { Varela_Round , M_PLUS_Rounded_1c,  Bowlby_One_SC} from "next/font/google";
import "./globals.css";


const varelaRound = Varela_Round({
  variable:"--font-varela-round",
  weight:["400"],
  display:"swap",
  subsets: ["latin"],
})
const roundedC = M_PLUS_Rounded_1c({
  weight:["100" ,"900"] ,
  variable:"--font-rounded-c",
  display:"swap",
  subsets: ["latin"],

})

const bowlby = Bowlby_One_SC({
  variable: "--font-bowlby-sc",
  subsets: ["latin"],
  display:'swap',
  weight:"400"
});

export const metadata: Metadata = {
  title: "ECOM",
  description: "Ecom project ",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${varelaRound.variable} ${bowlby.variable} ${roundedC.variable} antialiased`}
      >
      <main>
        
    
        {children}
      </main>
        


      </body>
    </html>
  );
}
