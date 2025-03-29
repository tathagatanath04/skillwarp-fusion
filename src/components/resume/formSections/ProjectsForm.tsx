
import { useState } from "react";
import { Project } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, X } from "lucide-react";

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

const ProjectsForm = ({ data, onChange }: ProjectsFormProps) => {
  const [projects, setProjects] = useState<Project[]>(data);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedProjects = [...projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value,
    };
    setProjects(updatedProjects);
    onChange(updatedProjects);
  };

  const handleTechChange = (
    projIndex: number,
    techIndex: number,
    value: string
  ) => {
    const updatedProjects = [...projects];
    updatedProjects[projIndex].technologies[techIndex] = value;
    setProjects(updatedProjects);
    onChange(updatedProjects);
  };

  const addTech = (projIndex: number) => {
    const updatedProjects = [...projects];
    updatedProjects[projIndex].technologies.push("");
    setProjects(updatedProjects);
    onChange(updatedProjects);
  };

  const removeTech = (projIndex: number, techIndex: number) => {
    const updatedProjects = [...projects];
    updatedProjects[projIndex].technologies = updatedProjects[
      projIndex
    ].technologies.filter((_, i) => i !== techIndex);
    setProjects(updatedProjects);
    onChange(updatedProjects);
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [""],
      url: "",
      startDate: "",
      endDate: "",
    };
    setProjects([...projects, newProject]);
    onChange([...projects, newProject]);
  };

  const removeProject = (index: number) => {
    if (projects.length === 1) {
      // Reset the first project instead of removing it
      const resetProject: Project = {
        id: projects[0].id,
        name: "",
        description: "",
        technologies: [""],
        url: "",
        startDate: "",
        endDate: "",
      };
      setProjects([resetProject]);
      onChange([resetProject]);
      return;
    }
    
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    onChange(updatedProjects);
  };

  return (
    <div className="space-y-6">
      {projects.map((project, projIndex) => (
        <div
          key={project.id}
          className="p-4 border rounded-md space-y-4 relative"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => removeProject(projIndex)}
          >
            <Trash2 size={16} />
          </Button>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`projectName-${projIndex}`}>Project Name</Label>
              <Input
                id={`projectName-${projIndex}`}
                name="name"
                value={project.name}
                onChange={(e) => handleChange(projIndex, e)}
                placeholder="E-commerce Website"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`url-${projIndex}`}>Project URL (Optional)</Label>
              <Input
                id={`url-${projIndex}`}
                name="url"
                value={project.url}
                onChange={(e) => handleChange(projIndex, e)}
                placeholder="https://github.com/username/project"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${projIndex}`}>Start Date</Label>
              <Input
                id={`startDate-${projIndex}`}
                name="startDate"
                type="month"
                value={project.startDate}
                onChange={(e) => handleChange(projIndex, e)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${projIndex}`}>
                End Date (leave blank for present)
              </Label>
              <Input
                id={`endDate-${projIndex}`}
                name="endDate"
                type="month"
                value={project.endDate}
                onChange={(e) => handleChange(projIndex, e)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${projIndex}`}>Description</Label>
            <Textarea
              id={`description-${projIndex}`}
              name="description"
              value={project.description}
              onChange={(e) => handleChange(projIndex, e)}
              placeholder="A brief description of your project and your role in it"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label>Technologies Used</Label>
            <div className="space-y-2">
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex gap-2">
                  <Input
                    value={tech}
                    onChange={(e) =>
                      handleTechChange(
                        projIndex,
                        techIndex,
                        e.target.value
                      )
                    }
                    placeholder="React.js"
                  />
                  {project.technologies.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() =>
                        removeTech(projIndex, techIndex)
                      }
                    >
                      <X size={16} />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addTech(projIndex)}
              >
                <Plus size={16} className="mr-2" /> Add Technology
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addProject}
      >
        <Plus size={16} className="mr-2" /> Add Another Project
      </Button>
    </div>
  );
};

export default ProjectsForm;
