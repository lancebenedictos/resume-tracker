import { Input } from "@/components/ui/input";
import { PersonalInfo as PersonalInfoType } from "@/models/ResumeInfo";

import { Label } from "@radix-ui/react-label";
import React from "react";
import AddButton from "./common/AddButton";

type social = {
  name?: string;
  link?: string;
};
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

  function changeSocial(social: social, index: number) {
    const socials = info.socials;
    if (!socials) return;
    socials[index] = social;
    updateInfo({ ...info, socials });
  }

  return (
    <div className="flex flex-col gap-3">
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
        <Input
          placeholder="Last name"
          id="last_name"
          type="text"
          value={info.last_name}
          onChange={change}
        />
      </span>
      <span>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Email address"
          id="email"
          type="email"
          value={info.email}
          onChange={change}
        />
      </span>

      <span>
        <Label htmlFor="email">Phone number</Label>
        <Input
          placeholder="(647)818-5209"
          id="phone_number"
          type="text"
          value={info.phone_number}
          onChange={change}
        />
      </span>

      <span>
        <Label htmlFor="email">Location</Label>
        <Input
          placeholder="Mississauga, ON"
          id="location"
          type="text"
          value={info.location}
          onChange={change}
        />
      </span>

      <span className="flex flex-col">
        <h2>Social links</h2>
        {info.socials?.map((social, index) => (
          <span key={`social-${index}`} className="flex gap-2  rounded-md">
            <Input
              placeholder="Social"
              id={`social_name-${index}`}
              type="text"
              value={social.name}
              onChange={(e) => {
                social.name = e.target.value;
                changeSocial(social, index);
              }}
            />

            <Input
              placeholder="Social link"
              id={`social-link-${index}`}
              type="text"
              value={social.link}
              onChange={(e) => {
                social.link = e.target.value;
                changeSocial(social, index);
              }}
            />
          </span>
        ))}

        <AddButton
          title="Add Social"
          onClick={() => {
            const socials = info.socials;
            socials?.push({
              name: undefined,
              link: undefined,
            });

            updateInfo({ ...info, socials });
          }}
        />
      </span>
    </div>
  );
}

export default PersonalInfo;
