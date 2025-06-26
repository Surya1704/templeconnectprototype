
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import AllTemples from "@/pages/AllTemples";
import TempleDetail from "@/pages/TempleDetail";
import Events from "@/pages/Events";
import PoojaBooking from "@/pages/PoojaBooking";
import PrasadBooking from "@/pages/PrasadBooking";
import Gallery from "@/pages/Gallery";
import Astrology from "@/pages/Astrology";
import StayBookings from "@/pages/StayBookings";
import Donations from "@/pages/Donations";
import Contact from "@/pages/Contact";
import Founder from "@/pages/Founder";
import AboutUs from "@/pages/AboutUs";
import PujaTiming from "@/pages/PujaTiming";
import NotFound from "@/pages/NotFound";
import TripPlanner from "@/pages/TripPlanner";
import Jyotirlingas from "@/pages/Jyotirlingas";
import TempleStore from "@/pages/TempleStore";

import { Toaster } from "@/components/ui/toaster";
import "@/App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/temples" element={<AllTemples />} />
          <Route path="/temple/:id" element={<TempleDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/puja-timings" element={<PujaTiming />} />
          <Route path="/puja-booking" element={<PoojaBooking />} />
          <Route path="/store" element={<TempleStore />} />
          <Route path="/temple-offerings" element={<PrasadBooking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/stay-bookings" element={<StayBookings />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/jyotirlingas" element={<Jyotirlingas />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Routes outside the main layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
