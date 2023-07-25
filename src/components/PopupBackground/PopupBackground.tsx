import { ReactNode } from "react";

interface PopupBackgroundProps {
  children: ReactNode;
  onClick?: () => void;
}

const PopupBackground = ({ children, onClick }: PopupBackgroundProps) => {
  return (
    <div className="w-full h-full top-0 left-0 absolute bg-popup-shadow flex items-center justify-center">
      {children}
    </div>
  );
};

export default PopupBackground;
