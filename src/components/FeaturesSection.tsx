
import { 
  Lightbulb, 
  Users, 
  MessageSquare, 
  Briefcase, 
  BarChart,
  Sparkles
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Learning Paths",
    description: "Personalized roadmaps tailored to your skills, goals, and learning style, dynamically updated as you progress.",
    icon: <Lightbulb className="h-6 w-6" />,
  },
  {
    title: "Real-Time Collaboration",
    description: "Code together with peers in real-time, with built-in voice and video chat for seamless team projects.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Smart AI Tutor",
    description: "Get instant help with concepts, debugging, and personalized explanations powered by advanced AI.",
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    title: "Portfolio Generator",
    description: "Automatically create a stunning portfolio showcasing your skills, certifications, and projects.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Smart Analytics",
    description: "Track your progress with detailed insights and personalized improvement suggestions.",
    icon: <BarChart className="h-6 w-6" />,
  },
  {
    title: "AR/VR Learning",
    description: "Immersive 3D learning modules for complex concepts, making abstract ideas concrete and interactive.",
    icon: <Sparkles className="h-6 w-6" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supercharge Your Learning Journey</h2>
          <p className="text-lg text-muted-foreground">
            EduForge combines cutting-edge AI with powerful collaboration tools to help you master new skills faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="feature-icon bg-eduforge-100 dark:bg-eduforge-900/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
