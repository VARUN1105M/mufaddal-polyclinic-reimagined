import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";

import SupportiveCare from "./pages/Service";
import Doctors from "./pages/Doctors.tsx";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Servicedetail from "./pages/Servicedetail";
import Appointment from "./pages/Appointment";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/Blogdetail";
import FaqPage from "./pages/Faqpage";
import Error from "./pages/Error";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<SupportiveCare />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/detail" element={<Servicedetail />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/detail" element={<BlogDetail />} />
          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/404" element={<Error />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
