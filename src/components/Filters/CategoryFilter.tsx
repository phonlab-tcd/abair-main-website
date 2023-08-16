"use client";

import { ChangeEvent, useEffect } from "react";
import { useTranslation } from "@/app/i18n/client";

interface CategoryFilterProps {
  categories: (string | undefined)[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  lng: any;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  lng,
}: CategoryFilterProps) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    onCategoryChange(category);
  };
  const { t } = useTranslation(lng);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value="all"
            checked={selectedCategory === "all"}
            onChange={handleCategoryChange}
          />
          <span className="px-1">{t("search.all")}</span>
        </label>
      </div>
      {categories.map((category) => (
        <div key={category}>
          <label>
            <input
              type="checkbox"
              value={category}
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
            />
            <span className="px-1">{`${t("search." + category)}`}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
