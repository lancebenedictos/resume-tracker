import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

function Summary({
  summary,
  updateSummary,
}: {
  updateSummary: (summary: string) => void;
  summary: string;
}) {
  function change(e: React.ChangeEvent<HTMLTextAreaElement>) {
    updateSummary(e.target.value);
  }

  return (
    <>
      <Label htmlFor="summary">Summary</Label>
      <Textarea
        id="summary"
        placeholder="Summary"
        value={summary}
        onChange={change}
      ></Textarea>
    </>
  );
}

export default Summary;
