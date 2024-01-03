import { Input } from "@/components/ui/input";
import { PersonalInfo as PersonalInfoType } from "@/models/ResumeInfo";

import { Label } from "@radix-ui/react-label";
import React from "react";

function PersonalInfo({
  updateInfo,
  info,
}: {
  updateInfo: (info: PersonalInfoType) => void;
  info: PersonalInfoType;
}) {
  function change(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.currentTarget;
    updateInfo({ ...info, [id]: value });
  }

  return (
    <div>
      <h3>Personal Info</h3>
      <span>
        <Label htmlFor="first_name">First name</Label>
        <Input
          placeholder="First name"
          id="first_name"
          type="text"
          value={info.first_name}
          onChange={change}
        />
      </span>
      <span>
        <Label htmlFor="last_name">Last name</Label>
        <Input placeholder="Last name" id="last_name" type="text" />
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
