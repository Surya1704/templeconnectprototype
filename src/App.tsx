import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import TempleDetail from "@/pages/TempleDetail";
import Booking from "@/pages/Booking";
import Reels from "@/pages/Reels";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import "@/App.css";

const App = () => (
  <AuthProvider>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/temple/:id" element={<TempleDetail />} />
        <Route path="/book/:templeId" element={<Booking />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    <Toaster />
  </AuthProvider>
);

export default App;
