import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from '@/app/login/AuthContext';

export const metadata = {
  title: "Beauty Parlor App",
  description: "Pragathi Beauty Parlor app is to manage beauty parlor operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <AuthProvider >
          <NavBar />         
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
