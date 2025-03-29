
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-eduforge-600 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="bg-grid-white/5 p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to accelerate your learning journey?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl">
                  Join thousands of students who are mastering new skills faster with
                  AI-powered personalized learning paths and expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-white text-eduforge-600 hover:bg-slate-100 font-medium px-8"
                  >
                    <Link to="/signup">
                      Start Learning for Free
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 font-medium px-8"
                  >
                    <Link to="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3 max-w-[320px]">
                <div className="relative w-full aspect-square">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/10 rounded-full animate-pulse duration-4000"></div>
                  <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-white/20 rounded-full animate-pulse duration-3000 delay-1000"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M12 22v-5.5" />
                      <path d="m9 8 3-4 3 4" />
                      <path d="M9.27 12a2 2 0 0 0-1.5 3.3l4.5 4.5a2 2 0 0 0 2.83 0l4.5-4.5a2 2 0 0 0-1.5-3.3H9.27Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
