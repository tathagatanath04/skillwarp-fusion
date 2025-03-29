
import { ResumeData } from "@/types/resume";
import { 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  Linkedin, 
  Github,
  Award,
  Briefcase,
  GraduationCap,
  Code
} from "lucide-react";

interface CreativeTemplateProps {
  resumeData: ResumeData;
}

const CreativeTemplate = ({ resumeData }: CreativeTemplateProps) => {
  const { personal, education, experience, skills, certifications, projects, hobbies } = resumeData;

  const formatDate = (dateString: string) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className="bg-white min-h-[11in] flex flex-col">
      {/* Header with Accent Background */}
      <header className="bg-gradient-to-r from-eduforge-700 to-eduforge-500 text-white p-8">
        <h1 className="text-3xl font-bold mb-2">
          {personal.name || "Your Name"}
        </h1>
        
        {personal.summary && (
          <p className="text-sm mb-4 text-white/90 max-w-3xl">
            {personal.summary}
          </p>
        )}
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
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

      {/* Main Content */}
      <main className="flex flex-row p-8 gap-8">
        {/* Left Column */}
        <div className="w-1/3 space-y-6">
          {/* Skills */}
          <section>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-eduforge-100 flex items-center justify-center mr-2">
                <Code size={16} className="text-eduforge-600" />
              </div>
              <h2 className="text-lg font-semibold text-eduforge-600">Skills</h2>
            </div>
            
            {skills.technical.filter(s => s).length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Technical Skills</h3>
                <div className="space-y-1">
                  {skills.technical
                    .filter(skill => skill.trim())
                    .map((skill, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1 h-1 rounded-full bg-eduforge-500 mr-2"></div>
                        {skill}
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {skills.languages.filter(s => s).length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Programming Languages</h3>
                <div className="space-y-1">
                  {skills.languages
                    .filter(lang => lang.trim())
                    .map((lang, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1 h-1 rounded-full bg-eduforge-500 mr-2"></div>
                        {lang}
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {skills.tools.filter(s => s).length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Tools & Frameworks</h3>
                <div className="space-y-1">
                  {skills.tools
                    .filter(tool => tool.trim())
                    .map((tool, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1 h-1 rounded-full bg-eduforge-500 mr-2"></div>
                        {tool}
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {skills.soft.filter(s => s).length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Soft Skills</h3>
                <div className="space-y-1">
                  {skills.soft
                    .filter(soft => soft.trim())
                    .map((soft, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-1 h-1 rounded-full bg-eduforge-500 mr-2"></div>
                        {soft}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </section>

          {/* Certifications */}
          {certifications.some(cert => cert.name) && (
            <section>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-eduforge-100 flex items-center justify-center mr-2">
                  <Award size={16} className="text-eduforge-600" />
                </div>
                <h2 className="text-lg font-semibold text-eduforge-600">Certifications</h2>
              </div>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  cert.name ? (
                    <div key={cert.id || index} className="text-sm border-l-2 border-eduforge-200 pl-3 py-1">
                      <h3 className="font-medium text-gray-800">{cert.name}</h3>
                      <div className="text-gray-600 text-xs">
                        <span>{cert.issuer}</span>
                        {cert.date && <span className="block">{formatDate(cert.date)}</span>}
                      </div>
                      {cert.url && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-eduforge-600 text-xs hover:underline"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  ) : null
                ))}
              </div>
            </section>
          )}

          {/* Hobbies */}
          {hobbies.filter(h => h).length > 0 && (
            <section>
              <div className="flex items-center mb-3">
                <h2 className="text-lg font-semibold text-eduforge-600">Hobbies & Interests</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {hobbies
                  .filter(hobby => hobby.trim())
                  .map((hobby, index) => (
                    <span key={index} className="bg-eduforge-50 text-eduforge-600 px-3 py-1 rounded-full text-xs">
                      {hobby}
                    </span>
                  ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="w-2/3 space-y-6">
          {/* Experience */}
          {experience.some(exp => exp.company || exp.position) && (
            <section>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-eduforge-100 flex items-center justify-center mr-2">
                  <Briefcase size={16} className="text-eduforge-600" />
                </div>
                <h2 className="text-lg font-semibold text-eduforge-600">Work Experience</h2>
              </div>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  exp.company || exp.position ? (
                    <div key={exp.id || index} className="relative pl-6 pb-4 border-l-2 border-eduforge-200">
                      <div className="absolute w-3 h-3 bg-eduforge-500 rounded-full -left-[7px] top-1"></div>
                      <div className="mb-1">
                        <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                        <div className="text-sm text-gray-700">{exp.company}</div>
                        <div className="text-xs text-gray-600 flex items-center gap-2 mt-1">
                          {exp.location && (
                            <span className="flex items-center">
                              <MapPin size={12} className="mr-1" />
                              {exp.location}
                            </span>
                          )}
                          {(exp.startDate || exp.endDate) && (
                            <span className="flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                            </span>
                          )}
                        </div>
                      </div>
                      {exp.description && <p className="text-sm text-gray-700 mb-2">{exp.description}</p>}
                      {exp.achievements.filter(a => a).length > 0 && (
                        <ul className="text-sm text-gray-700 space-y-1">
                          {exp.achievements
                            .filter(achievement => achievement.trim())
                            .map((achievement, i) => (
                              <li key={i} className="flex items-baseline">
                                <div className="w-1.5 h-1.5 rounded-full bg-eduforge-300 mr-2 mt-1.5"></div>
                                <span>{achievement}</span>
                              </li>
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
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-eduforge-100 flex items-center justify-center mr-2">
                  <GraduationCap size={16} className="text-eduforge-600" />
                </div>
                <h2 className="text-lg font-semibold text-eduforge-600">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  (edu.institution || edu.degree) ? (
                    <div key={edu.id || index} className="relative pl-6 pb-4 border-l-2 border-eduforge-200">
                      <div className="absolute w-3 h-3 bg-eduforge-500 rounded-full -left-[7px] top-1"></div>
                      <div className="mb-1">
                        <h3 className="font-semibold text-gray-800">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</h3>
                        <div className="text-sm text-gray-700">{edu.institution}</div>
                        <div className="text-xs text-gray-600 flex items-center gap-2 mt-1">
                          {edu.location && (
                            <span className="flex items-center">
                              <MapPin size={12} className="mr-1" />
                              {edu.location}
                            </span>
                          )}
                          {(edu.startDate || edu.endDate) && (
                            <span className="flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                            </span>
                          )}
                        </div>
                      </div>
                      {edu.gpa && <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>}
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
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-eduforge-100 flex items-center justify-center mr-2">
                  <Code size={16} className="text-eduforge-600" />
                </div>
                <h2 className="text-lg font-semibold text-eduforge-600">Projects</h2>
              </div>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  project.name ? (
                    <div key={project.id || index} className="relative pl-6 pb-4 border-l-2 border-eduforge-200">
                      <div className="absolute w-3 h-3 bg-eduforge-500 rounded-full -left-[7px] top-1"></div>
                      <div className="mb-1">
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
                        <div className="text-xs text-gray-600 flex items-center mt-1">
                          {(project.startDate || project.endDate) && (
                            <span className="flex items-center">
                              <Calendar size={12} className="mr-1" />
                              {formatDate(project.startDate)} - {formatDate(project.endDate)}
                            </span>
                          )}
                        </div>
                      </div>
                      {project.description && <p className="text-sm text-gray-700 mb-2">{project.description}</p>}
                      {project.technologies.filter(t => t).length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.technologies
                            .filter(tech => tech.trim())
                            .map((tech, i) => (
                              <span key={i} className="bg-eduforge-50 text-eduforge-600 px-2 py-0.5 rounded-full text-xs">
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
        </div>
      </main>
    </div>
  );
};

export default CreativeTemplate;
