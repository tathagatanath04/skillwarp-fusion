
import { useState } from "react";
import { Certification } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2, Plus } from "lucide-react";

interface CertificationsFormProps {
  data: Certification[];
  onChange: (data: Certification[]) => void;
}

const CertificationsForm = ({ data, onChange }: CertificationsFormProps) => {
  const [certifications, setCertifications] = useState<Certification[]>(data);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = {
      ...updatedCertifications[index],
      [name]: value,
    };
    setCertifications(updatedCertifications);
    onChange(updatedCertifications);
  };

  const addCertification = () => {
    const newCertification: Certification = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: "",
      url: "",
    };
    setCertifications([...certifications, newCertification]);
    onChange([...certifications, newCertification]);
  };

  const removeCertification = (index: number) => {
    if (certifications.length === 1) {
      // Reset the first certification instead of removing it
      const resetCertification: Certification = {
        id: certifications[0].id,
        name: "",
        issuer: "",
        date: "",
        url: "",
      };
      setCertifications([resetCertification]);
      onChange([resetCertification]);
      return;
    }
    
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCertifications);
    onChange(updatedCertifications);
  };

  return (
    <div className="space-y-6">
      {certifications.map((certification, index) => (
        <div
          key={certification.id}
          className="p-4 border rounded-md space-y-4 relative"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => removeCertification(index)}
          >
            <Trash2 size={16} />
          </Button>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`certName-${index}`}>Certification Name</Label>
              <Input
                id={`certName-${index}`}
                name="name"
                value={certification.name}
                onChange={(e) => handleChange(index, e)}
                placeholder="AWS Certified Solutions Architect"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`issuer-${index}`}>Issuing Organization</Label>
              <Input
                id={`issuer-${index}`}
                name="issuer"
                value={certification.issuer}
                onChange={(e) => handleChange(index, e)}
                placeholder="Amazon Web Services"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`date-${index}`}>Date</Label>
              <Input
                id={`date-${index}`}
                name="date"
                type="month"
                value={certification.date}
                onChange={(e) => handleChange(index, e)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`url-${index}`}>
                Certification URL (Optional)
              </Label>
              <Input
                id={`url-${index}`}
                name="url"
                value={certification.url}
                onChange={(e) => handleChange(index, e)}
                placeholder="https://example.com/certification"
              />
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={addCertification}
      >
        <Plus size={16} className="mr-2" /> Add Another Certification
      </Button>
    </div>
  );
};

export default CertificationsForm;
