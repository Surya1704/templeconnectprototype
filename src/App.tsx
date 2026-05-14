import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import AllTemples from "@/pages/AllTemples";
import TempleDetail from "@/pages/TempleDetail";
import Donations from "@/pages/Donations";
import AboutUs from "@/pages/AboutUs";
import OnboardTemple from "@/pages/OnboardTemple";
import ComingSoon from "@/pages/ComingSoon";
import NotFound from "@/pages/NotFound";

import { Toaster } from "@/components/ui/toaster";
import "@/App.css";

/**
 * FaithConnect — six canonical routes (master prompt §6).
 * Existing pages are mounted under the new paths; legacy URLs redirect
 * for compatibility. Astrology, Store, Stay, Trip, Pooja, Prasad,
 * Events, Founder, AI, Login are out of scope and routed to /coming-soon
 * or removed entirely.
 */
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Canonical */}
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<AllTemples />} />
          <Route path="/explore/:id" element={<TempleDetail />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/list-your-temple" element={<OnboardTemple />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Legacy → canonical redirects */}
          <Route path="/temples" element={<Navigate to="/explore" replace />} />
          <Route path="/temple/:id" element={<RedirectTemple />} />
          <Route path="/jyotirlingas" element={<Navigate to="/explore?tag=jyotirlinga" replace />} />
          <Route path="/donations" element={<Navigate to="/donate" replace />} />
          <Route path="/onboard-temple" element={<Navigate to="/list-your-temple" replace />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />

          {/* Out-of-scope routes */}
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/events" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/puja-timings" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/puja-booking" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/store" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/temple-offerings" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/gallery" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/astrology" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/stay-bookings" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="/founder" element={<Navigate to="/about" replace />} />
          <Route path="/trip-planner" element={<Navigate to="/coming-soon" replace />} />
          <Route path="/login" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

// Map /temple/:id → /explore/:id while preserving the param.
const RedirectTemple = () => {
  const id = window.location.pathname.split("/").pop();
  return <Navigate to={`/explore/${id ?? ""}`} replace />;
};

export default App;
