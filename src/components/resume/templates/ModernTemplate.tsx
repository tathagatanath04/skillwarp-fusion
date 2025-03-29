
import { ResumeData } from "@/types/resume";
import { 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  Linkedin, 
  Github 
} from "lucide-react";

interface ModernTemplateProps {
  resumeData: ResumeData;
}

const ModernTemplate = ({ resumeData }: ModernTemplateProps) => {
  const { personal, education, experience, skills, certifications, projects, hobbies } = resumeData;

  const formatDate = (dateString: string) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className="bg-white p-10 min-h-[11in] flex flex-col">
      {/* Header */}
      <header className="mb-6 border-b-2 border-eduforge-500 pb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {personal.name || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
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

      {/* Summary */}
      {personal.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-eduforge-600 mb-2">Professional Summary</h2>
          <p className="text-sm text-gray-700">{personal.summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="flex flex-row gap-6">
        {/* Main Column */}
        <div className="flex-grow-[2] space-y-6">
          {/* Experience */}
          {experience.some(exp => exp.company || exp.position) && (
            <section>
              <h2 className="text-lg font-semibold text-eduforge-600 mb-3 border-b border-gray-200 pb-1">Work Experience</h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  exp.company || exp.position ? (
                    <div key={exp.id || index} className="text-sm">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                        {exp.location && <span className="text-gray-600 text-xs">{exp.location}</span>}
                      </div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-gray-700">{exp.company}</span>
                        {(exp.startDate || exp.endDate) && (
                          <span className="text-gray-600 text-xs flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                          </span>
                        )}
                      </div>
                      {exp.description && <p className="text-gray-700 mb-1">{exp.description}</p>}
                      {exp.achievements.filter(a => a).length > 0 && (
                        <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
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

          {/* Projects */}
          {projects.some(proj => proj.name) && (
            <section>
              <h2 className="text-lg font-semibold text-eduforge-600 mb-3 border-b border-gray-200 pb-1">Projects</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  project.name ? (
                    <div key={project.id || index} className="text-sm">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-gray-800">
                          {project.name}
                          {project.url && (
                            <a 
                              href={project.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-eduforge-600 text-xs ml-2 font-normal hover:underline"
                            >
                              (View Project)
                            </a>
                          )}
                        </h3>
                        {(project.startDate || project.endDate) && (
                          <span className="text-gray-600 text-xs flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {formatDate(project.startDate)} - {formatDate(project.endDate)}
                          </span>
                        )}
                      </div>
                      {project.description && <p className="text-gray-700 mb-1">{project.description}</p>}
                      {project.technologies.filter(t => t).length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.technologies
                            .filter(tech => tech.trim())
                            .map((tech, i) => (
                              <span key={i} className="bg-eduforge-50 text-eduforge-700 px-2 py-0.5 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                        </div>
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
              <h2 className="text-lg font-semibold text-eduforge-600 mb-3 border-b border-gray-200 pb-1">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  (edu.institution || edu.degree) ? (
                    <div key={edu.id || index} className="text-sm">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold text-gray-800">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</h3>
                        {edu.location && <span className="text-gray-600 text-xs">{edu.location}</span>}
                      </div>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-gray-700">{edu.institution}</span>
                        {(edu.startDate || edu.endDate) && (
                          <span className="text-gray-600 text-xs flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                          </span>
                        )}
                      </div>
                      {edu.gpa && <p className="text-gray-700 text-xs">GPA: {edu.gpa}</p>}
                      {edu.achievements && <p className="text-gray-700 mt-1">{edu.achievements}</p>}
                    </div>
                  ) : null
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Column */}
        <div className="flex-grow-[1] space-y-6">
          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold text-eduforge-600 mb-3 border-b border-gray-200 pb-1">Skills</h2>
            
            {skills.technical.filter(s => s).length > 0 && (
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-800 mb-1">Technical Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {skills.technical
                    .filter(skill => skill.trim())
                    .map((skill, index) => (
                      <span key={index} className="bg-eduforge-50 text-eduforge-700 px-2 py-0.5 rounded-sm text-xs">
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            )}
            
            {skills.languages.filter(s => s).length > 0 && (
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-800 mb-1">Programming Languages</h3>
                <div className="flex flex-wrap gap-1">
                  {skills.languages
                    .filter(lang => lang.trim())
                    .map((lang, index) => (
                      <span key={index} className="bg-eduforge-50 text-eduforge-700 px-2 py-0.5 rounded-sm text-xs">
                        {lang}
                      </span>
                    ))}
                </div>
              </div>
            )}
            
            {skills.tools.filter(s => s).length > 0 && (
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-800 mb-1">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-1">
                  {skills.tools
                    .filter(tool => tool.trim())
                    .map((tool, index) => (
                      <span key={index} className="bg-eduforge-50 text-eduforge-700 px-2 py-0.5 rounded-sm text-xs">
                        {tool}
                      </span>
                    ))}
                </div>
              </div>
            )}
            
            {skills.soft.filter(s => s).length > 0 && (
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-800 mb-1">Soft Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {skills.soft
                    .filter(soft => soft.trim())
                    .map((soft, index) => (
                      <span key={index} className="bg-eduforge-50 text-eduforge-700 px-2 py-0.5 rounded-sm text-xs">
                        {soft}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </section>

          {/* Certifications */}
          {certifications.some(cert => cert.name) && (
            <section>
              <h2 className="text-lg font-semibold text-eduforge-600 mb-3 border-b border-gray-200 pb-1">Certifications</h2>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  cert.name ? (
                    <div key={cert.id || index} className="text-sm">
                      <h3 className="font-medium text-gray-800">
                        {cert.name}
                        {cert.url && (
                          <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-eduforge-600 text-xs ml-2 font-normal hover:underline"
                          >
                            (View)
                          </a>
                        )}
                      </h3>
                      <div className="text-gray-700 text-xs flex justify-between">
                        <span>{cert.issuer}</span>
                        {cert.date && <span>{formatDate(cert.date)}</span>}
                      </div>
                    </div>
                  ) : null
                ))}
              </div>
            </section>
          )}

          {/* Hobbies */}
          {hobbies.filter(h => h).length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-eduforge-600 mb-3 border-b border-gray-200 pb-1">Hobbies & Interests</h2>
              <div className="flex flex-wrap gap-1">
                {hobbies
                  .filter(hobby => hobby.trim())
                  .map((hobby, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-sm text-xs">
                      {hobby}
                    </span>
                  ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
