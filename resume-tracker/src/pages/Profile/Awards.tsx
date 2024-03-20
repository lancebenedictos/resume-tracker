import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Award } from "@/models/ResumeInfo";
import { Label } from "@radix-ui/react-label";
import AddButton from "./common/AddButton";
import { HiOutlineXMark } from "react-icons/hi2";

function Awards({
  updateAwards,
  awards,
}: {
  updateAwards: (award: [Award]) => void;
  awards: [Award];
}) {
  return (
    <div>
      <h3>Awards</h3>
      {awards.map((award, index) => (
        <div key={`award-${index}`} className="section mt-4 hidden-delete ">
          <div className="flex gap-4 items-center">
            <span className="flex-grow">
              <Label htmlFor="title">Title</Label>
              <Input
                placeholder="Award title"
                id="title"
                type="text"
                value={award.title}
                onChange={(e) => {
                  const { value } = e.currentTarget;
                  const award = awards[index];
                  award.title = value;
                  awards[index] = award;
                  updateAwards(awards);
                }}
              />
            </span>
            <button
              className="hidden-delete-btn px-2"
              onClick={() => {
                awards.splice(index, 1);
                updateAwards(awards);
              }}
            >
              <HiOutlineXMark />
            </button>
          </div>
          <span>
            <Label htmlFor="year">Year</Label>
            <Input
              placeholder="year"
              id="year"
              type="number"
              min="1900"
              max="2100"
              value={award.year}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const award = awards[index];
                award.year = value;
                awards[index] = award;
                updateAwards(awards);
              }}
            />
          </span>

          <span>
            <Label htmlFor="description">Description</Label>
            <Textarea
              placeholder="Description"
              id="description"
              value={award.description}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const award = awards[index];
                award.description = value;
                awards[index] = award;
                updateAwards(awards);
              }}
            />
          </span>
          <hr />
        </div>
      ))}
      <AddButton
        onClick={() => {
          awards.push({ title: "", year: "2023", description: "" });

          updateAwards(awards);
        }}
        title="Add Awards"
      />
    </div>
  );
}

export default Awards;
