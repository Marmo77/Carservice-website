import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageSkeleton from "@/components/PageSkeleton";
import CookieConsent from "@/components/CookieConsent";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
        {/* <WaterMarkBanner /> */}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
