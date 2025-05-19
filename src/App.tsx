
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AllTemples from "./pages/AllTemples";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import TempleDetail from "./pages/TempleDetail";
import Astrology from "./pages/Astrology";
import PoojaBooking from "./pages/PoojaBooking";
import TripPlanner from "./pages/TripPlanner";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import JyotirlingaDetail from "./pages/JyotirlingaDetail";
import PujaTiming from "./pages/PujaTiming";
import Gallery from "./pages/Gallery";
import Donations from "./pages/Donations";
import Founder from "./pages/Founder";
import Index from "./pages/Index";
import PrasadBooking from "./pages/PrasadBooking";
import StayBookings from "./pages/StayBookings";
import TemplePositionTool from "./pages/TemplePositionTool"; // Add the new import
import TempleEditor from "./pages/TempleEditor";
import AI from "./pages/AI";

// Toast provider
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <Router>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/all-temples" element={<AllTemples />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/temple/:id" element={<TempleDetail />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/pooja-booking" element={<PoojaBooking />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/jyotirlingas/:id" element={<JyotirlingaDetail />} />
        <Route path="/puja-timing" element={<PujaTiming />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/prasad-booking" element={<PrasadBooking />} />
        <Route path="/stay-booking" element={<StayBookings />} />
        <Route path="/temple-position-tool" element={<TemplePositionTool />} /> {/* Add the new route */}
        <Route path="/temple-editor" element={<TempleEditor />} />
        <Route path="/ai" element={<AI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
