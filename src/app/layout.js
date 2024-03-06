import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "./customCursor";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deep Image Verification Engine",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <div id="main">
          <video autoPlay muted loop width="320" height="240" id="bgVideo" >
            <source src="https://static.videezy.com/system/resources/previews/000/012/743/original/Particles_7_-_48s_-_4k_res.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="blur"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
