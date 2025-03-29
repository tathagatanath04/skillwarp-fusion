
import { useState } from "react";
import { Education } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

const EducationForm = ({ data, onChange }: EducationFormProps) => {
  const [educations, setEducations] = useState<Education[]>(data);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedEducations = [...educations];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [name]: value,
    };
    setEducations(updatedEducations);
    onChange(updatedEducations);
  };

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      gpa: "",
      location: "",
      achievements: "",
    };
    setEducations([...educations, newEducation]);
    onChange([...educations, newEducation]);
  };

  const removeEducation = (index: number) => {
    if (educations.length === 1) return;
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
    onChange(updatedEducations);
  };

  return (
    <div className="space-y-6">
      {educations.map((education, index) => (
        <div key={education.id} className="p-4 border rounded-md space-y-4 relative">
          {educations.length > 1 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={() => removeEducation(index)}
            >
              <Trash2 size={16} />
            </Button>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`institution-${index}`}>Institution</Label>
              <Input
                id={`institution-${index}`}
                name="institution"
                value={education.institution}
                onChange={(e) => handleChange(index, e)}
                placeholder="University of Example"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`degree-${index}`}>Degree</Label>
              <Input
                id={`degree-${index}`}
                name="degree"
                value={education.degree}
                onChange={(e) => handleChange(index, e)}
                placeholder="Bachelor of Science"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`field-${index}`}>Field of Study</Label>
              <Input
                id={`field-${index}`}
                name="field"
                value={education.field}
                onChange={(e) => handleChange(index, e)}
                placeholder="Computer Science"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`location-${index}`}>Location</Label>
              <Input
                id={`location-${index}`}
                name="location"
                value={education.location}
                onChange={(e) => handleChange(index, e)}
                placeholder="New York, NY"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${index}`}>Start Date</Label>
              <Input
                id={`startDate-${index}`}
                name="startDate"
                type="month"
                value={education.startDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${index}`}>End Date</Label>
              <Input
                id={`endDate-${index}`}
                name="endDate"
                type="month"
                value={education.endDate}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`gpa-${index}`}>GPA</Label>
              <Input
                id={`gpa-${index}`}
                name="gpa"
                value={education.gpa}
                onChange={(e) => handleChange(index, e)}
                placeholder="3.8/4.0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`achievements-${index}`}>Achievements</Label>
            <Textarea
              id={`achievements-${index}`}
              name="achievements"
              value={education.achievements}
              onChange={(e) => handleChange(index, e)}
              placeholder="Dean's List, Scholarships, Honors, etc."
              rows={2}
            />
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addEducation}
      >
        <Plus size={16} className="mr-2" /> Add Another Education
      </Button>
    </div>
  );
};

export default EducationForm;
