"use client";
import React from "react";
import { ChangeEvent } from "react";
import { useTranslation } from "@/app/i18n/client";

interface SortMenuProps {
  sortBy: string;
  onSortChange: (sortOption: string) => void;
  lng: any;
}

const SortMenu = ({ sortBy, onSortChange, lng }: SortMenuProps) => {
  const handleSortChange = (event: ChangeEvent<HTMLInputElement>) => {
    const sortOption = event.target.value;
    onSortChange(sortOption);
  };
  const { t } = useTranslation(lng);

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
          <span className="px-1">{t("search.mostRecent")}</span>
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
          <span className="px-1">{t("search.oldest")}</span>
        </label>
      </div>
    </div>
  );
};

export default SortMenu;
