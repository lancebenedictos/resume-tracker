import { Input } from "@/components/ui/input";
import AddButton from "./common/AddButton";
import { HiOutlineXMark } from "react-icons/hi2";

function Languages({
  languages,
  updateLanguages,
}: {
  updateLanguages: (languages: [string]) => void;
  languages: [string];
}) {
  return (
    <div>
      <h3>Languages</h3>
      <div className="flex gap-2 mt-4 flex-wrap">
        {languages.map((lang, index) => (
          <div key={`lang-${index}`} className="flex gap-2 hidden-delete">
            <Input
              value={lang}
              placeholder="New language"
              className="px-3 bg-slate-100 rounded-md w-fit"
              onChange={(e) => {
                languages[index] = e.target.value;
                updateLanguages(languages);
              }}
            />
            <button
              className="hidden-delete-btn px-2"
              onClick={() => {
                languages.splice(index, 1);
                updateLanguages(languages);
              }}
            >
              <HiOutlineXMark />
            </button>
          </div>
        ))}
      </div>
      <AddButton
        onClick={() => {
          languages.push("");
          updateLanguages(languages);
        }}
        title="Add Language"
      />
    </div>
  );
}

export default Languages;
