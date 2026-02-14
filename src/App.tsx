import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";

import Service from "./pages/Service";
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
import ServiceTemplate from "./pages/ServiceTemplate";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ImagePrefetch from "@/components/ui/ImagePrefetch";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ImagePrefetch />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Service />} />
            <Route path="/women-care" element={<Service />} />
            <Route path="/supportive-care" element={<Service />} />

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

            {/* Women Care Services */}
            <Route path="/women-care/wellness" element={<ServiceTemplate serviceId="wellness" />} />
            <Route path="/women-care/period-care" element={<ServiceTemplate serviceId="period-care" />} />
            <Route path="/women-care/hormone-balance" element={<ServiceTemplate serviceId="hormone-balance" />} />
            <Route path="/women-care/pcos-care" element={<ServiceTemplate serviceId="pcos-care" />} />
            <Route path="/women-care/pregnancy" element={<ServiceTemplate serviceId="pregnancy" />} />
            <Route path="/women-care/postnatal" element={<ServiceTemplate serviceId="postnatal" />} />
            <Route path="/women-care/anemia-thyroid" element={<ServiceTemplate serviceId="anemia-thyroid" />} />
            <Route path="/women-care/menopause" element={<ServiceTemplate serviceId="menopause" />} />
            <Route path="/women-care/breast-care" element={<ServiceTemplate serviceId="breast-care" />} />
            <Route path="/women-care/mental-wellness" element={<ServiceTemplate serviceId="mental-wellness" />} />

            {/* Supportive Care Services */}
            <Route path="/supportive-care/physician" element={<ServiceTemplate serviceId="physician" />} />
            <Route path="/supportive-care/dental" element={<ServiceTemplate serviceId="dental" />} />
            <Route path="/supportive-care/physiotherapy" element={<ServiceTemplate serviceId="physiotherapy" />} />
            <Route path="/supportive-care/ent" element={<ServiceTemplate serviceId="ent" />} />
            <Route path="/supportive-care/diabetes" element={<ServiceTemplate serviceId="diabetes" />} />
            <Route path="/supportive-care/nutrition" element={<ServiceTemplate serviceId="nutrition" />} />
            <Route path="/supportive-care/pain-management" element={<ServiceTemplate serviceId="pain-management" />} />
            <Route path="/supportive-care/preventive" element={<ServiceTemplate serviceId="preventive" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
