
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PersonalInfoForm from "./formSections/PersonalInfoForm";
import EducationForm from "./formSections/EducationForm";
import ExperienceForm from "./formSections/ExperienceForm";
import SkillsForm from "./formSections/SkillsForm";
import CertificationsForm from "./formSections/CertificationsForm";
import ProjectsForm from "./formSections/ProjectsForm";
import HobbiesForm from "./formSections/HobbiesForm";
import { ResumeData } from "@/types/resume";

interface ResumeFormProps {
  resumeData: ResumeData;
  onChange: (data: Partial<ResumeData>) => void;
}

const ResumeForm = ({ resumeData, onChange }: ResumeFormProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["personal"]);

  const handleSectionComplete = (section: string) => {
    // Auto collapse current section and expand next when a section is completed
    const sectionOrder = ["personal", "education", "experience", "skills", "certifications", "projects", "hobbies"];
    const currentIndex = sectionOrder.indexOf(section);
    
    if (currentIndex < sectionOrder.length - 1) {
      const nextSection = sectionOrder[currentIndex + 1];
      setExpandedSections([nextSection]);
    }
  };

  return (
    <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
      <Accordion type="multiple" value={expandedSections} onValueChange={setExpandedSections} className="space-y-4">
        <AccordionItem value="personal" className="border rounded-lg p-2">
          <AccordionTrigger className="px-4">Personal Information</AccordionTrigger>
          <AccordionContent className="px-4 pt-4">
            <PersonalInfoForm 
              data={resumeData.personal} 
              onChange={(personal) => {
                onChange({ personal });
                handleSectionComplete("personal");
              }} 
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education" className="border rounded-lg p-2">
          <AccordionTrigger className="px-4">Education</AccordionTrigger>
          <AccordionContent className="px-4 pt-4">
            <EducationForm 
              data={resumeData.education} 
              onChange={(education) => {
                onChange({ education });
                handleSectionComplete("education");
              }} 
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience" className="border rounded-lg p-2">
          <AccordionTrigger className="px-4">Experience</AccordionTrigger>
          <AccordionContent className="px-4 pt-4">
            <ExperienceForm 
              data={resumeData.experience} 
              onChange={(experience) => {
                onChange({ experience });
                handleSectionComplete("experience");
              }} 
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills" className="border rounded-lg p-2">
          <AccordionTrigger className="px-4">Skills</AccordionTrigger>
          <AccordionContent className="px-4 pt-4">
            <SkillsForm 
              data={resumeData.skills} 
              onChange={(skills) => {
                onChange({ skills });
                handleSectionComplete("skills");
              }} 
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="certifications" className="border rounded-lg p-2">
          <AccordionTrigger className="px-4">Certifications</AccordionTrigger>
          <AccordionContent className="px-4 pt-4">
            <CertificationsForm 
              data={resumeData.certifications} 
              onChange={(certifications) => {
                onChange({ certifications });
                handleSectionComplete("certifications");
              }} 
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="projects" className="border rounded-lg p-2">
          <AccordionTrigger className="px-4">Projects</AccordionTrigger>
          <AccordionContent className="px-4 pt-4">
            <ProjectsForm 
              data={resumeData.projects} 
              onChange={(projects) => {
                onChange({ projects });
                handleSectionComplete("projects");
              }} 
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="hobbies" className="border rounded-lg p-2">
          <AccordionTrigger className="px-4">Hobbies & Interests</AccordionTrigger>
          <AccordionContent className="px-4 pt-4">
            <HobbiesForm 
              data={resumeData.hobbies} 
              onChange={(hobbies) => {
                onChange({ hobbies });
                handleSectionComplete("hobbies");
              }} 
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ResumeForm;
