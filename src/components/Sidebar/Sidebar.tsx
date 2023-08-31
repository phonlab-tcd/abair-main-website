import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div id="sidebarContainer" className="w-48 h-screen shadow-md bg-white">
      <ul className="pt-12 lg:pt-16">{children}</ul>
    </div>
  );
};

export default Sidebar;
export type { SidebarProps };
