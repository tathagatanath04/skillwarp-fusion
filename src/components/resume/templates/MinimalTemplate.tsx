
import { ResumeData } from "@/types/resume";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe
} from "lucide-react";

interface MinimalTemplateProps {
  resumeData: ResumeData;
}

const MinimalTemplate = ({ resumeData }: MinimalTemplateProps) => {
  const { personal, education, experience, skills, certifications, projects, hobbies } = resumeData;

  const formatDate = (dateString: string) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className="bg-white p-12 min-h-[11in] flex flex-col">
      {/* Header - Simple and Clean */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          {personal.name || "Your Name"}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
          {personal.email && (
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>{personal.phone}</span>
            </div>
          )}
          {personal.location && (
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{personal.location}</span>
            </div>
          )}
          {personal.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={14} />
              <span>{personal.linkedin.replace("https://", "")}</span>
            </div>
          )}
          {personal.github && (
            <div className="flex items-center gap-1">
              <Github size={14} />
              <span>{personal.github.replace("https://", "")}</span>
            </div>
          )}
          {personal.portfolio && (
            <div className="flex items-center gap-1">
              <Globe size={14} />
              <span>{personal.portfolio.replace("https://", "")}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary - Simple Text */}
      {personal.summary && (
        <section className="mb-8 max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-700">{personal.summary}</p>
        </section>
      )}

      {/* Main Content */}
      <div className="space-y-6">
        {/* Skills - Simple Inline List */}
        {(skills.technical.some(s => s) || skills.languages.some(s => s) || 
          skills.tools.some(s => s) || skills.soft.some(s => s)) && (
          <section>
            <h2 className="text-lg font-medium mb-3 pb-1 border-b border-gray-200">Skills</h2>
            
            {skills.technical.filter(s => s).length > 0 && (
              <div className="mb-2">
                <h3 className="text-sm font-medium mb-1">Technical Skills:</h3>
                <p className="text-sm text-gray-700">
                  {skills.technical.filter(s => s).join(", ")}
                </p>
              </div>
            )}
            
            {skills.languages.filter(s => s).length > 0 && (
              <div className="mb-2">
                <h3 className="text-sm font-medium mb-1">Programming Languages:</h3>
                <p className="text-sm text-gray-700">
                  {skills.languages.filter(s => s).join(", ")}
                </p>
              </div>
            )}
            
            {skills.tools.filter(s => s).length > 0 && (
              <div className="mb-2">
                <h3 className="text-sm font-medium mb-1">Tools & Frameworks:</h3>
                <p className="text-sm text-gray-700">
                  {skills.tools.filter(s => s).join(", ")}
                </p>
              </div>
            )}
            
            {skills.soft.filter(s => s).length > 0 && (
              <div className="mb-2">
                <h3 className="text-sm font-medium mb-1">Soft Skills:</h3>
                <p className="text-sm text-gray-700">
                  {skills.soft.filter(s => s).join(", ")}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Experience */}
        {experience.some(exp => exp.company || exp.position) && (
          <section>
            <h2 className="text-lg font-medium mb-3 pb-1 border-b border-gray-200">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                exp.company || exp.position ? (
                  <div key={exp.id || index} className="text-sm">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium">{exp.position} {exp.company ? `at ${exp.company}` : ''}</h3>
                      <div className="text-xs text-gray-500">
                        <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                        {exp.location && <span> | {exp.location}</span>}
                      </div>
                    </div>
                    {exp.description && <p className="text-sm text-gray-700 mt-1">{exp.description}</p>}
                    {exp.achievements.filter(a => a).length > 0 && (
                      <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-0.5">
                        {exp.achievements
                          .filter(achievement => achievement.trim())
                          .map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                      </ul>
                    )}
                  </div>
                ) : null
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.some(edu => edu.institution || edu.degree) && (
          <section>
            <h2 className="text-lg font-medium mb-3 pb-1 border-b border-gray-200">Education</h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                (edu.institution || edu.degree) ? (
                  <div key={edu.id || index} className="text-sm">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium">
                        {edu.degree}{edu.field ? ` in ${edu.field}` : ''} {edu.institution ? `at ${edu.institution}` : ''}
                      </h3>
                      <div className="text-xs text-gray-500">
                        <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                        {edu.location && <span> | {edu.location}</span>}
                      </div>
                    </div>
                    {edu.gpa && <p className="text-sm text-gray-700 mt-1">GPA: {edu.gpa}</p>}
                    {edu.achievements && <p className="text-sm text-gray-700 mt-1">{edu.achievements}</p>}
                  </div>
                ) : null
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.some(proj => proj.name) && (
          <section>
            <h2 className="text-lg font-medium mb-3 pb-1 border-b border-gray-200">Projects</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                project.name ? (
                  <div key={project.id || index} className="text-sm">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium">
                        {project.name}
                        {project.url && (
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 text-xs ml-2 font-normal hover:underline"
                          >
                            (View)
                          </a>
                        )}
                      </h3>
                      {(project.startDate || project.endDate) && (
                        <span className="text-xs text-gray-500">
                          {formatDate(project.startDate)} - {formatDate(project.endDate)}
                        </span>
                      )}
                    </div>
                    {project.description && <p className="text-sm text-gray-700 mt-1">{project.description}</p>}
                    {project.technologies.filter(t => t).length > 0 && (
                      <p className="text-xs text-gray-600 mt-1">
                        <span className="font-medium">Technologies: </span>
                        {project.technologies.filter(t => t).join(", ")}
                      </p>
                    )}
                  </div>
                ) : null
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.some(cert => cert.name) && (
          <section>
            <h2 className="text-lg font-medium mb-3 pb-1 border-b border-gray-200">Certifications</h2>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                cert.name ? (
                  <div key={cert.id || index} className="text-sm">
                    <span className="font-medium">{cert.name}</span>
                    <span className="text-gray-700"> - {cert.issuer}</span>
                    {cert.date && <span className="text-xs text-gray-500 ml-2">({formatDate(cert.date)})</span>}
                  </div>
                ) : null
              ))}
            </div>
          </section>
        )}

        {/* Hobbies */}
        {hobbies.filter(h => h).length > 0 && (
          <section>
            <h2 className="text-lg font-medium mb-3 pb-1 border-b border-gray-200">Hobbies & Interests</h2>
            <p className="text-sm text-gray-700">
              {hobbies.filter(h => h).join(", ")}
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;
