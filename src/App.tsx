
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import PujaTiming from "./pages/PujaTiming";
import StayBookings from "./pages/StayBookings";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import TempleDetail from "./pages/TempleDetail";
import PrasadBooking from "./pages/PrasadBooking";
import AllTemples from "./pages/AllTemples";
import PoojaBooking from "./pages/PoojaBooking";
import Astrology from "./pages/Astrology";
import Donations from "./pages/Donations";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

// Create a client for React Query
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="puja-timings" element={<PujaTiming />} />
            <Route path="stay-bookings" element={<StayBookings />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="prasad-booking" element={<PrasadBooking />} />
            <Route path="pooja-booking" element={<PoojaBooking />} />
            <Route path="donations" element={<Donations />} />
            <Route path="contact" element={<Contact />} />
            <Route path="temple/:id" element={<TempleDetail />} />
            <Route path="temples" element={<AllTemples />} />
            <Route path="astrology" element={<Astrology />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
