import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";

type props = {
  searchJobs: (query: string) => void;
  setRadius: (radius: number) => void;
  setQuery: (query: string) => void;
  radius: number;
};

function SearchBar({ searchJobs, radius, setRadius, setQuery }: props) {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const locationRef = useRef<HTMLInputElement | null>(null);
  const radiusRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className=" w-[80%] mx-auto flex flex-col gap-2">
      <div>
        <Label htmlFor="position">Position</Label>
        <Input
          placeholder="Python developer"
          ref={searchRef}
          id="position"
          required
        />
      </div>
      <div className="flex w-full gap-3">
        <div className="w-full">
          <Label htmlFor="radius">Radius</Label>
          <Input
            placeholder="Radius"
            ref={radiusRef}
            defaultValue={70}
            value={radius}
            required
          />
        </div>

        <div className="w-full">
          <Label htmlFor="location">Location</Label>
          <Input
            placeholder="Toronto, ON"
            ref={locationRef}
            id="location"
            required
          />
        </div>
      </div>
      <Button
        onClick={() => {
          setRadius(parseInt(radiusRef.current?.value || "70"));
          setQuery(searchRef.current?.value || "");
          searchJobs(
            `${searchRef.current?.value} in ${locationRef.current?.value}`
          );
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
