import { ChangeEvent } from "react";

interface CategoryFilterProps {
  categories: (string | undefined)[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    onCategoryChange(category);
  };

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
          <span className="px-1">{"all"}</span>
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
            <span className="px-1">{category}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
