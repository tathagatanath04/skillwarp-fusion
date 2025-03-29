
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";

interface HobbiesFormProps {
  data: string[];
  onChange: (data: string[]) => void;
}

const HobbiesForm = ({ data, onChange }: HobbiesFormProps) => {
  const [hobbies, setHobbies] = useState<string[]>(data);

  const handleAddHobby = () => {
    setHobbies([...hobbies, ""]);
    onChange([...hobbies, ""]);
  };

  const handleRemoveHobby = (index: number) => {
    const updatedHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(updatedHobbies);
    onChange(updatedHobbies);
  };

  const handleChangeHobby = (index: number, value: string) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = value;
    setHobbies(updatedHobbies);
    onChange(updatedHobbies);
  };

  return (
    <div className="space-y-4">
      <Label>Hobbies & Interests</Label>
      <div className="space-y-2">
        {hobbies.map((hobby, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={hobby}
              onChange={(e) => handleChangeHobby(index, e.target.value)}
              placeholder="Photography"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0 text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={() => handleRemoveHobby(index)}
            >
              <X size={16} />
            </Button>
          </div>
        ))}
      </div>
      
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={handleAddHobby}
      >
        <Plus size={16} className="mr-2" /> Add Hobby
      </Button>
      
      <div className="text-sm text-muted-foreground">
        <p>Adding hobbies is optional but can add a personal touch to your resume.</p>
      </div>
    </div>
  );
};

export default HobbiesForm;
