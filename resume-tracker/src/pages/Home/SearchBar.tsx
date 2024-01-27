import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

type props = {
  searchJobs: (query: string) => void;
  setQuery: (query: string) => void;
};

function SearchBar({ searchJobs, setQuery }: props) {
  const searchRef = useRef<HTMLInputElement | null>(null);

  return (
    <span className="flex gap-4">
      <Input
        placeholder="Python developer in Toronto, Canada..."
        ref={searchRef}
      />
      <Button
        onClick={() => {
          setQuery(searchRef.current?.value || "");
          searchJobs(searchRef.current?.value || "");
        }}
      >
        Search
      </Button>
    </span>
  );
}

export default SearchBar;
