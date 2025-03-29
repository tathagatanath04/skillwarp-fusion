
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LearningPathsSection from "@/components/LearningPathsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/resume-builder">
          <Button className="bg-eduforge-600 hover:bg-eduforge-700 shadow-lg">
            <FileText className="mr-2" />
            Resume Builder
          </Button>
        </Link>
      </div>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <LearningPathsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
