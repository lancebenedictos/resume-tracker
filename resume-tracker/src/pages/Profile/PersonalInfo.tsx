import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function PersonalInfo() {
  return (
    <div>
      <h3>Personal Info</h3>
      <span>
        <Label htmlFor="first_name">First name</Label>
        <Input placeholder="First name" id="first_name" type="text" />
      </span>

      <span>
        <Label htmlFor="first_name">Email</Label>
        <Input placeholder="First name" id="first_name" type="text" />
      </span>

      <span>
        <Label htmlFor="first_name">Portfolio Link</Label>
        <Input placeholder="First name" id="first_name" type="text" />
      </span>
    </div>
  );
}

export default PersonalInfo;
