import React, { useEffect } from "react";

interface RoleFilterProps {
  selectedRoles: string[];
  onRoleChange: (roles: string[]) => void;
}

const RoleFilter: React.FC<RoleFilterProps> = ({
  selectedRoles,
  onRoleChange,
}) => {
  const roleOptions: string[] = [
    "All",
    "Software Engineer",
    "Professor",
    "Postdoc",
    "PhD Student",
    "Masters Student",
    "Undergraduate Student",
  ];

  useEffect(() => {
    // Set "All" as selected by default when the component mounts
    if (selectedRoles.length === 0) {
      onRoleChange(["All"]);
    }
  }, [selectedRoles, onRoleChange]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const role = event.target.value;
    const isRoleSelected = selectedRoles.includes(role);

    // Remove "All" from selectedRoles before processing the checkboxes
    const updatedRolesWithoutAll = selectedRoles.filter((r) => r !== "All");

    // If "All" is clicked, select only "All" and unselect all other roles
    if (role === "All") {
      onRoleChange(["All"]);
    } else {
      // If any other role is clicked, update the roles array accordingly
      let updatedRoles;
      if (isRoleSelected) {
        // Remove the role from the updatedRolesWithoutAll array if it's already included
        updatedRoles = updatedRolesWithoutAll.filter((r) => r !== role);
      } else {
        updatedRoles = [...updatedRolesWithoutAll, role];
      }

      // If no roles are selected, automatically select "All"
      if (updatedRoles.length === 0) {
        onRoleChange(["All"]);
      } else {
        onRoleChange(updatedRoles);
      }
    }
  };

  return (
    <div>
      {roleOptions.map((role) => (
        <label key={role}>
          <input
            type="checkbox"
            value={role}
            checked={selectedRoles.includes(role)}
            onChange={handleCategoryChange}
          />
          {role}
        </label>
      ))}
    </div>
  );
};

export default RoleFilter;
