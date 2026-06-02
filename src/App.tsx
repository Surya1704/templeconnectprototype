import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import AllTemples from "@/pages/AllTemples";
import TempleDetail from "@/pages/TempleDetail";
import Donations from "@/pages/Donations";
import OnboardTemple from "@/pages/OnboardTemple";
import AboutUs from "@/pages/AboutUs";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import Astrology from "@/pages/Astrology";
import ComingSoon from "@/pages/ComingSoon";
import NotFound from "@/pages/NotFound";

function LegacyTempleRedirect() {
  const { id } = useParams();
  return <Navigate to={`/explore/${id ?? ""}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<AllTemples />} />
          <Route path="/explore/:slug" element={<TempleDetail />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/list-your-temple" element={<OnboardTemple />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route
            path="/festivals"
            element={
              <ComingSoon
                title="Festival calendar"
                subline="Seasonal festival listings and utsav schedules from verified temple boards are on the way."
              />
            }
          />
          <Route path="/astrology" element={<Astrology />} />

          <Route path="/temples" element={<Navigate to="/explore" replace />} />
          <Route path="/temple/:id" element={<LegacyTempleRedirect />} />
          <Route path="/donations" element={<Navigate to="/donate" replace />} />
          <Route path="/onboard-temple" element={<Navigate to="/list-your-temple" replace />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/jyotirlingas" element={<Navigate to="/explore?tag=jyotirlinga" replace />} />
          <Route path="/contact" element={<Navigate to="/about#contact" replace />} />
          <Route path="/founder" element={<Navigate to="/about#contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
