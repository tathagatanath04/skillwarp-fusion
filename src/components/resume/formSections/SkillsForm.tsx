
import { useState } from "react";
import { Skills } from "@/types/resume";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";

interface SkillsFormProps {
  data: Skills;
  onChange: (data: Skills) => void;
}

const SkillsForm = ({ data, onChange }: SkillsFormProps) => {
  const [skills, setSkills] = useState<Skills>(data);

  const handleAddSkill = (
    category: keyof Skills,
    value: string = ""
  ) => {
    if (value.trim() === "" && !value) return;
    const updatedSkills = {
      ...skills,
      [category]: [...skills[category], value],
    };
    setSkills(updatedSkills);
    onChange(updatedSkills);
  };

  const handleRemoveSkill = (
    category: keyof Skills,
    index: number
  ) => {
    const updatedSkills = {
      ...skills,
      [category]: skills[category].filter((_, i) => i !== index),
    };
    setSkills(updatedSkills);
    onChange(updatedSkills);
  };

  const handleChangeSkill = (
    category: keyof Skills,
    index: number,
    value: string
  ) => {
    const updatedSkills = { ...skills };
    updatedSkills[category][index] = value;
    setSkills(updatedSkills);
    onChange(updatedSkills);
  };

  const renderSkillCategory = (
    category: keyof Skills,
    label: string
  ) => {
    return (
      <div className="space-y-2">
        <Label>{label}</Label>
        <div className="flex flex-wrap gap-2 mb-2">
          {skills[category].map((skill, index) => (
            <div
              key={index}
              className="flex items-center bg-muted rounded-md overflow-hidden pr-1"
            >
              <Input
                value={skill}
                onChange={(e) =>
                  handleChangeSkill(category, index, e.target.value)
                }
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 h-8"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-6 w-6"
                onClick={() => handleRemoveSkill(category, index)}
              >
                <X size={14} />
              </Button>
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => handleAddSkill(category)}
        >
          <Plus size={16} className="mr-2" /> Add {label.replace("Skills", "Skill")}
        </Button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {renderSkillCategory("technical", "Technical Skills")}
      {renderSkillCategory("languages", "Programming Languages")}
      {renderSkillCategory("tools", "Tools & Frameworks")}
      {renderSkillCategory("soft", "Soft Skills")}
    </div>
  );
};

export default SkillsForm;
