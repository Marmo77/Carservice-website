/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy } from "react";
import Layout from "@/Layout/Layout";
import { TooltipProvider } from "@/components/ui/tooltip";

const Home = lazy(() => import("@/pages/Home"));
const ServiceDetailsPage = lazy(() => import("@/pages/ServiceDetailsPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const CarSales = lazy(() => import("@/pages/CarSales"));

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="uslugi" element={<Navigate to="/#oferta" replace />} />
            <Route path="uslugi/:id" element={<ServiceDetailsPage />} />
            <Route path="sprzedaz" element={<CarSales />} />
            <Route path="rezerwacja" element={<Navigate to="/#kontakt" replace />} />
            <Route path="kontakt" element={<Navigate to="/#kontakt" replace />} />
            <Route path="polityka-prywatnosci" element={<PrivacyPolicyPage />} />
            <Route path="regulamin" element={<TermsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </TooltipProvider>
    </Router>
  );
}
