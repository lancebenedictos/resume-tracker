import { Input } from "@/components/ui/input";
import AddButton from "./common/AddButton";

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
          <Input
            value={lang}
            key={`lang-${index}`}
            placeholder="New language"
            className="px-3 bg-slate-100 rounded-md w-fit"
            onChange={(e) => {
              languages[index] = e.target.value;
              updateLanguages(languages);
            }}
          />
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
