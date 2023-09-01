import { ReactNode } from "react";

interface DropdownMenuItemProps {
  label?: string;
  disabled?: boolean;
  onClickHandler: () => void;
  title?: boolean;
  children: ReactNode;
}

const DropdownMenuItem = ({
  children,
  label,
  disabled = false,
  title = false,
  onClickHandler = () => {
    console.log("placholder item clicked");
  },
}: DropdownMenuItemProps) => {
  return (
    <li className="block">
      <button
        className={[
          "w-full h-full bg-inherit p-4",
          title
            ? "text-grey-900"
            : disabled
            ? "text-grey-300"
            : "text-grey-500 hover:bg-grey-100",
        ].join(" ")}
        onClick={onClickHandler}
        disabled={title || disabled}
      >
        <div className="flex items-center ">
          {children !== undefined && (
            <div
              className={[
                label !== undefined ? "pr-2" : "",
                disabled ? "opacity-50" : "opacity-100",
              ].join(" ")}
            >
              <div id="imageContainer" className={"w-8 flex-none"}>
                {children}
              </div>
            </div>
          )}
          {label !== undefined && <p className="text-sm">{label}</p>}
        </div>
      </button>
      <div className={title ? "border-b mx-3" : ""}></div>
    </li>
  );
};

export default DropdownMenuItem;
export type { DropdownMenuItemProps };
