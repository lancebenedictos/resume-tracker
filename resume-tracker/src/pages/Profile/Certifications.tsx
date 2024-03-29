import { Input } from "@/components/ui/input";

import { Certification } from "@/models/ResumeInfo";
import AddButton from "./common/AddButton";
import { HiOutlineXMark } from "react-icons/hi2";

function Certifications({
  updateCertifications,
  certifications,
}: {
  updateCertifications: (cert: [Certification]) => void;
  certifications: [Certification];
}) {
  return (
    <div>
      <h3>Certifications</h3>
      <div className="mt-4">
        {certifications &&
          certifications.map((cert, index) => (
            <div
              key={`cert-${index}`}
              className="flex gap-2 mt-2 hidden-delete"
            >
              <Input
                placeholder="Certification name"
                id="name"
                type="text"
                value={cert.name}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  cert.name = value;
                  certifications[index] = cert;
                  updateCertifications(certifications);
                }}
              />

              <Input
                placeholder="Title"
                id="year"
                type="number"
                min="1900"
                max="2100"
                value={cert.year}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  cert.year = value;
                  certifications[index] = cert;
                  updateCertifications(certifications);
                }}
              />

              <button
                className="hidden-delete-btn px-2"
                onClick={() => {
                  certifications.splice(index, 1);
                  updateCertifications(certifications);
                }}
              >
                <HiOutlineXMark />
              </button>
            </div>
          ))}
      </div>

      <AddButton
        title="Add certification"
        onClick={() => {
          certifications.push({ name: "", year: "2023" });

          updateCertifications(certifications);
        }}
      />
    </div>
  );
}

export default Certifications;
