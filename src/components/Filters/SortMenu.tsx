import React from "react";
import { ChangeEvent } from "react";

interface SortMenuProps {
  sortBy: string;
  onSortChange: (sortOption: string) => void;
}

const SortMenu = ({ sortBy, onSortChange }: SortMenuProps) => {
  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sortOption = event.target.value;
    onSortChange(sortOption);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value="most recent"
            checked={sortBy === "most recent"}
            onChange={handleSortChange}
          />
          <span className="px-1">{"most recent"}</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            value="oldest"
            checked={sortBy === "oldest"}
            onChange={handleSortChange}
          />
          <span className="px-1">{"oldest"}</span>
        </label>
      </div>
    </div>
  );
};

export default SortMenu;
