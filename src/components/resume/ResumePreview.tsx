
import { useRef } from "react";
import { ResumeData, Template } from "@/types/resume";
import ModernTemplate from "./templates/ModernTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: Template;
}

const ResumePreview = ({ resumeData, template }: ResumePreviewProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate resumeData={resumeData} />;
      case "creative":
        return <CreativeTemplate resumeData={resumeData} />;
      case "minimal":
        return <MinimalTemplate resumeData={resumeData} />;
      default:
        return <ModernTemplate resumeData={resumeData} />;
    }
  };

  return (
    <div ref={resumeRef} className="bg-white scale-[0.65] origin-top-left w-[8.5in] min-h-[11in] shadow-lg transform -ml-[30%] -mr-[30%] overflow-hidden">
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;
