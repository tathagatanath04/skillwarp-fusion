
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";
import { ResumeData, Template } from "@/types/resume";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialResumeData: ResumeData = {
  personal: {
    name: "",
    email: "",
    phone: "",
    location: "",
    profilePicture: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
  },
  education: [
    {
      id: "1",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
      location: "",
      achievements: "",
    },
  ],
  experience: [
    {
      id: "1",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      achievements: [""],
    },
  ],
  skills: {
    technical: [""],
    languages: [""],
    tools: [""],
    soft: [""],
  },
  certifications: [
    {
      id: "1",
      name: "",
      issuer: "",
      date: "",
      url: "",
    },
  ],
  projects: [
    {
      id: "1",
      name: "",
      description: "",
      technologies: [""],
      url: "",
      startDate: "",
      endDate: "",
    },
  ],
  hobbies: [""],
};

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTemplate, setActiveTemplate] = useState<Template>("modern");
  const [activeTab, setActiveTab] = useState("edit");

  const handleResumeDataChange = (newData: Partial<ResumeData>) => {
    setResumeData({ ...resumeData, ...newData });
  };

  const handleTemplateChange = (template: Template) => {
    setActiveTemplate(template);
    toast.success(`Template changed to ${template.charAt(0).toUpperCase() + template.slice(1)}`);
  };

  const handleDownloadPDF = async () => {
    toast.success("Resume downloaded successfully!");
    // We'll implement the actual PDF generation in the preview component
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Resume Builder
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create a professional resume in minutes. Fill in your details, choose a template, 
            and export your resume as a PDF.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="edit">Edit Content</TabsTrigger>
                <TabsTrigger value="template">Choose Template</TabsTrigger>
              </TabsList>
              
              <TabsContent value="edit" className="space-y-4">
                <ResumeForm 
                  resumeData={resumeData} 
                  onChange={handleResumeDataChange} 
                />
              </TabsContent>
              
              <TabsContent value="template">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">Select a Template</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className={`border-2 rounded-md cursor-pointer p-4 transition-all ${
                        activeTemplate === "modern" 
                          ? "border-eduforge-500 bg-eduforge-50 dark:bg-eduforge-950/30" 
                          : "border-gray-200 hover:border-eduforge-300"
                      }`}
                      onClick={() => handleTemplateChange("modern")}
                    >
                      <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
                        <span className="text-sm font-medium">Modern</span>
                      </div>
                      <p className="text-sm text-center">Clean and professional design</p>
                    </div>
                    
                    <div
                      className={`border-2 rounded-md cursor-pointer p-4 transition-all ${
                        activeTemplate === "creative" 
                          ? "border-eduforge-500 bg-eduforge-50 dark:bg-eduforge-950/30" 
                          : "border-gray-200 hover:border-eduforge-300"
                      }`}
                      onClick={() => handleTemplateChange("creative")}
                    >
                      <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
                        <span className="text-sm font-medium">Creative</span>
                      </div>
                      <p className="text-sm text-center">Eye-catching, modern aesthetics</p>
                    </div>
                    
                    <div
                      className={`border-2 rounded-md cursor-pointer p-4 transition-all ${
                        activeTemplate === "minimal" 
                          ? "border-eduforge-500 bg-eduforge-50 dark:bg-eduforge-950/30" 
                          : "border-gray-200 hover:border-eduforge-300"
                      }`}
                      onClick={() => handleTemplateChange("minimal")}
                    >
                      <div className="aspect-[8.5/11] bg-gray-100 dark:bg-gray-700 rounded mb-2 flex items-center justify-center">
                        <span className="text-sm font-medium">Minimal</span>
                      </div>
                      <p className="text-sm text-center">Simple, elegant and focused</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <div className="sticky top-24">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg font-medium">Live Preview</h3>
                <button
                  onClick={handleDownloadPDF}
                  className="bg-eduforge-600 hover:bg-eduforge-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Download PDF
                </button>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                <ResumePreview 
                  resumeData={resumeData} 
                  template={activeTemplate} 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
