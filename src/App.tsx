
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import AllTemples from "@/pages/AllTemples";
import Jyotirlingas from "@/pages/Jyotirlingas";
import Events from "@/pages/Events";
import PujaTiming from "@/pages/PujaTiming";
import Donations from "@/pages/Donations";
import Contact from "@/pages/Contact";
import AboutUs from "@/pages/AboutUs";
import NotFound from "@/pages/NotFound";

import { Toaster } from "@/components/ui/toaster";
import "@/App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/temples" element={<AllTemples />} />
          <Route path="/jyotirlingas" element={<Jyotirlingas />} />
          <Route path="/events" element={<Events />} />
          <Route path="/puja-timings" element={<PujaTiming />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
