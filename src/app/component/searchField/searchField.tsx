import Field from "../../../ui/field/Field";
import { useState } from "react";

export interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const SearchField = ({ onSearch }: SearchFieldProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDawn = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };
  return (
    <Field>
      <input
        className="input-ui"
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDawn}
      />
    </Field>
  );
};

export default SearchField;