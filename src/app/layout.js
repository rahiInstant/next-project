import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <NavigationBar/>
        {children}
        <div>This is footer</div>
      </body>
    </html>
  );
}
