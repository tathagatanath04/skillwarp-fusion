
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
      <div className="spotlight animate-spotlight"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">AI-Powered</span> Personalized Learning Platform
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Accelerate your learning journey with personalized roadmaps, real-time collaboration, 
              and AI-powered feedback for rapid skill development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg" 
                className="bg-eduforge-600 hover:bg-eduforge-700 text-white font-medium px-8"
              >
                <Link to="/signup">
                  Start Learning Now
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="font-medium px-8"
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-background"
                    style={{
                      backgroundColor: `hsl(${240 + i * 25}, 70%, 75%)`,
                      zIndex: 4 - i,
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join 5,000+ learners building their skills
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-eduforge-100/30 to-blue-100/30 dark:from-eduforge-950/10 dark:to-blue-950/10 rounded-2xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="rounded-lg overflow-hidden">
                <div className="h-10 bg-gray-100 dark:bg-gray-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-2 text-xs text-gray-500 dark:text-gray-400">AI Learning Assistant</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-eduforge-100 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-eduforge-600"><path d="M21 15c0-4.625-3.51-8.45-8-8.95M3 15a9 9 0 0 1 18 0Z" /><path d="M3 15h18" /><path d="M13 11.01V.01" /><path d="M5 17.01V11" /><path d="M19 17.01V11" /><path d="M21 21v-6" /><path d="M3 21v-6" /></svg>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-sm">
                      I want to learn full-stack web development. Where should I start?
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10" /><path d="m9 16 3-8 3 8" /><path d="M12 12h.01" /></svg>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-sm">
                      <p className="font-medium mb-2">Here's your personalized learning path:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>HTML/CSS fundamentals (2 weeks)</li>
                        <li>JavaScript basics (3 weeks)</li>
                        <li>React framework (4 weeks)</li>
                        <li>Node.js & Express (3 weeks)</li>
                        <li>Database fundamentals (2 weeks)</li>
                      </ol>
                      <p className="mt-2">I'll generate practice exercises and project ideas tailored to your goals.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 animate-float">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-sm">Current Progress</h3>
                    <span className="text-xs text-eduforge-600 bg-eduforge-50 dark:bg-eduforge-900/20 px-2 py-1 rounded-full">42% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-eduforge-500 to-blue-500 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Skills</div>
                      <div className="font-semibold text-sm">8</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Projects</div>
                      <div className="font-semibold text-sm">3</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Hours</div>
                      <div className="font-semibold text-sm">24</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
