import { ReactNode } from "react";

export interface ButtonProps {
  sizes?: string;
  colors?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  sizes,
  colors,
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={[
        "text-md transition-colors ease-in-out duration-200",
        sizes,
        colors,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
