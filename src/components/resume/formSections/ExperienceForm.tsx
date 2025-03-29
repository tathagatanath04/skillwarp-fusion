
import { useState } from "react";
import { Experience } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, X } from "lucide-react";

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

const ExperienceForm = ({ data, onChange }: ExperienceFormProps) => {
  const [experiences, setExperiences] = useState<Experience[]>(data);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value,
    };
    setExperiences(updatedExperiences);
    onChange(updatedExperiences);
  };

  const handleAchievementChange = (
    expIndex: number,
    achievementIndex: number,
    value: string
  ) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[expIndex].achievements[achievementIndex] = value;
    setExperiences(updatedExperiences);
    onChange(updatedExperiences);
  };

  const addAchievement = (expIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[expIndex].achievements.push("");
    setExperiences(updatedExperiences);
    onChange(updatedExperiences);
  };

  const removeAchievement = (expIndex: number, achievementIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[expIndex].achievements = updatedExperiences[
      expIndex
    ].achievements.filter((_, i) => i !== achievementIndex);
    setExperiences(updatedExperiences);
    onChange(updatedExperiences);
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      achievements: [""],
    };
    setExperiences([...experiences, newExperience]);
    onChange([...experiences, newExperience]);
  };

  const removeExperience = (index: number) => {
    if (experiences.length === 1) return;
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
    onChange(updatedExperiences);
  };

  return (
    <div className="space-y-6">
      {experiences.map((experience, expIndex) => (
        <div
          key={experience.id}
          className="p-4 border rounded-md space-y-4 relative"
        >
          {experiences.length > 1 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={() => removeExperience(expIndex)}
            >
              <Trash2 size={16} />
            </Button>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`company-${expIndex}`}>Company</Label>
              <Input
                id={`company-${expIndex}`}
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(expIndex, e)}
                placeholder="Example Inc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`position-${expIndex}`}>Position</Label>
              <Input
                id={`position-${expIndex}`}
                name="position"
                value={experience.position}
                onChange={(e) => handleChange(expIndex, e)}
                placeholder="Software Engineer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${expIndex}`}>Location</Label>
              <Input
                id={`location-${expIndex}`}
                name="location"
                value={experience.location}
                onChange={(e) => handleChange(expIndex, e)}
                placeholder="New York, NY"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${expIndex}`}>Start Date</Label>
              <Input
                id={`startDate-${expIndex}`}
                name="startDate"
                type="month"
                value={experience.startDate}
                onChange={(e) => handleChange(expIndex, e)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${expIndex}`}>
                End Date (leave blank for present)
              </Label>
              <Input
                id={`endDate-${expIndex}`}
                name="endDate"
                type="month"
                value={experience.endDate}
                onChange={(e) => handleChange(expIndex, e)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${expIndex}`}>Description</Label>
            <Textarea
              id={`description-${expIndex}`}
              name="description"
              value={experience.description}
              onChange={(e) => handleChange(expIndex, e)}
              placeholder="Brief description of your role and responsibilities"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label>Key Achievements</Label>
            <div className="space-y-2">
              {experience.achievements.map((achievement, achIndex) => (
                <div key={achIndex} className="flex gap-2">
                  <Input
                    value={achievement}
                    onChange={(e) =>
                      handleAchievementChange(
                        expIndex,
                        achIndex,
                        e.target.value
                      )
                    }
                    placeholder="Implemented a feature that improved performance by 30%"
                  />
                  {experience.achievements.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() =>
                        removeAchievement(expIndex, achIndex)
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
                onClick={() => addAchievement(expIndex)}
              >
                <Plus size={16} className="mr-2" /> Add Achievement
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addExperience}
      >
        <Plus size={16} className="mr-2" /> Add Another Experience
      </Button>
    </div>
  );
};

export default ExperienceForm;
