"use client";

import { MouseEvent, useEffect, useState, useRef } from "react";
import DropdownMenuButton from "./DropdownMenuButton";
import DropdownMenuItem, { DropdownMenuItemProps } from "./DropdownMenuItem";
import { ImageModel } from "@/types/supabase-helpers";

interface DropdownMenuProps {
  label?: string;
  dropdownMenuItems: DropdownMenuItemProps[];
  dropdownPosition?: "left" | "right";
  showArrow?: boolean;
  border?: boolean;
  image?: ImageModel;
  pathname?: string;
}

const DropdownMenu = ({
  label,
  dropdownMenuItems,
  image,
  dropdownPosition = "left",
  showArrow = false,
  pathname,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent<Element, MouseEvent>) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent<Element, MouseEvent>) => {
      handleClickOutside(event);
    };
    document.addEventListener("click", handleDocumentClick as any);
    return () => {
      document.removeEventListener("click", handleDocumentClick as any);
    };
  }, []);

  return (
    <div ref={menuRef} className={"relative h-full"}>
      <DropdownMenuButton
        onClickHandler={toggleMenu}
        isOpen={isOpen}
        label={label}
        image={image}
        showArrow={showArrow}
        width={20}
      />
      {isOpen && (
        <div
          className={[
            "absolute z-10 bg-white shadow-md w-36",
            dropdownPosition === "right" ? "left-0" : "right-0",
          ].join(" ")}
        >
          <ul>
            {Array.isArray(dropdownMenuItems) &&
              dropdownMenuItems.map((dropdownMenuItem, i) => (
                <DropdownMenuItem
                  key={i}
                  disabled={dropdownMenuItem.disabled}
                  title={dropdownMenuItem.title}
                  label={dropdownMenuItem.label}
                  image={dropdownMenuItem.image}
                  handleClick={dropdownMenuItem.handleClick}
                />
              ))}
          </ul>
        </div>
      )}
    </div>
    // </div>
  );
};

export default DropdownMenu;
