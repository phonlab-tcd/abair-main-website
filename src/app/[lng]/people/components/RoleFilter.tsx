"use client";
import React, { useEffect } from "react";
import { useTranslation } from "@/app/i18n/client";

interface RoleFilterProps {
  lng: any;
  selectedRole: string;
  onRoleChange: (roles: string) => void;
}

const RoleFilter: React.FC<RoleFilterProps> = ({
  lng,
  selectedRole,
  onRoleChange,
}) => {
  const { t } = useTranslation(lng);
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
    if (selectedRole === "") {
      onRoleChange("All");
    }
  }, [selectedRole, onRoleChange]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const role = event.target.id;
    const isRoleSelected = selectedRole === role;

    // Remove "All" from selectedRoles before processing the checkboxes
    // const updatedRolesWithoutAll = selectedRoles.filter((r) => r !== "All");

    // If "All" is clicked, select only "All" and unselect all other roles
    if (role === "All") {
      onRoleChange("All");
    } else {
      onRoleChange(role);
    }
  };

  return (
    <div>
      {roleOptions.map((role) => (
        <div key={role}>
          <label>
            <input
              type="checkbox"
              id={role}
              value={role}
              checked={selectedRole === role}
              onChange={handleCategoryChange}
            />
            <span className="px-1">{t(`pages.people.${role}`)}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default RoleFilter;
