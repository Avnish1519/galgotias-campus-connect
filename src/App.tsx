
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Campus from "./pages/Campus";
import Events from "./pages/Events";
import StudentLife from "./pages/StudentLife";
import Updates from "./pages/Updates";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import GalgotiasOne from "./pages/GalgotiasOne";
import Explore from "./pages/Explore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/galgotiasone" replace />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/events" element={<Events />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/galgotiasone" element={<GalgotiasOne />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
