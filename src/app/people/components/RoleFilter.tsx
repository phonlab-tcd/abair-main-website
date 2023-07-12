import React from "react";

interface RoleFilterProps {
  selectedRole: string;
  onRoleChange: (category: string) => void;
}

const RoleFilter: React.FC<RoleFilterProps> = ({
  selectedRole,
  onRoleChange,
}) => {
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value;
    onRoleChange(category);
  };

  return (
    <select
      className="border rounded px-3 py-2 ml-4"
      value={selectedRole}
      onChange={handleCategoryChange}
    >
      <option value="All">All Categories</option>
      <option value="Software Engineer">Software Engineers</option>
      <option value="Professor">Professors</option>
      <option value="Postdoc">Postdocs</option>
      <option value="PhD Student">PhD Students</option>
      <option value="Masters Student">Masters Students</option>
      <option value="Undergraduate Student">Undergraduate Students</option>
    </select>
  );
};

export default RoleFilter;
