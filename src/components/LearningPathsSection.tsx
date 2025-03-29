
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Cpu, ShieldCheck, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    title: "Full-Stack Web Development",
    description: "Master modern web development from front-end to back-end technologies.",
    icon: <Globe className="h-6 w-6" />,
    level: "Beginner to Advanced",
    duration: "16 weeks",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Build a strong foundation in computer science fundamentals and problem-solving.",
    icon: <Code className="h-6 w-6" />,
    level: "Intermediate",
    duration: "12 weeks",
    skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"],
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    title: "Database Engineering",
    description: "Learn to design, implement and optimize database systems at scale.",
    icon: <Database className="h-6 w-6" />,
    level: "Intermediate to Advanced",
    duration: "10 weeks",
    skills: ["SQL", "NoSQL", "Data Modeling", "Query Optimization", "Indexing"],
    color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    title: "Machine Learning & AI",
    description: "Build intelligent systems that can learn from data and make predictions.",
    icon: <Cpu className="h-6 w-6" />,
    level: "Advanced",
    duration: "14 weeks",
    skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning", "NLP"],
    color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn to protect systems, networks, and programs from digital attacks.",
    icon: <ShieldCheck className="h-6 w-6" />,
    level: "Beginner to Intermediate",
    duration: "12 weeks",
    skills: ["Network Security", "Cryptography", "Ethical Hacking", "Security Auditing"],
    color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
    iconBg: "bg-red-100 dark:bg-red-900/30",
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful, intuitive interfaces with modern design principles.",
    icon: <Lightbulb className="h-6 w-6" />,
    level: "Beginner to Intermediate",
    duration: "8 weeks",
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Figma"],
    color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
  },
];

const LearningPathsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Learning Paths</h2>
          <p className="text-lg text-muted-foreground">
            Discover AI-curated learning journeys designed to help you master new skills efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div 
              key={index} 
              className="learning-card group"
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${path.iconBg} mb-4`}>
                {path.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
              <p className="text-muted-foreground mb-4">{path.description}</p>
              
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="outline" className="text-xs">
                    {path.level}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{path.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {path.skills.map((skill, i) => (
                    <Badge key={i} className={`${path.color}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full group-hover:bg-eduforge-50 group-hover:text-eduforge-600 group-hover:border-eduforge-200 dark:group-hover:bg-eduforge-900/20 dark:group-hover:border-eduforge-800 transition-colors"
                >
                  <Link to="/learning-paths">
                    Explore Path
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            className="bg-eduforge-600 hover:bg-eduforge-700"
          >
            <Link to="/learning-paths">
              View All Learning Paths
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningPathsSection;
