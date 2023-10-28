import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div >
          <NavBar />         
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
