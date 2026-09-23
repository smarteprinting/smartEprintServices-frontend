"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "./CartContext";
import CartDrawer from "./CartDrawer";
import { AuthProvider } from "./AuthContext";

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    // Admin pages have their own layout — skip site navbar/footer
    return <AuthProvider><CartProvider>{children}</CartProvider></AuthProvider>;
  }

  return (
    <AuthProvider>
      <CartProvider>
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
      <CartDrawer />
      </CartProvider>
    </AuthProvider>
  );
}
