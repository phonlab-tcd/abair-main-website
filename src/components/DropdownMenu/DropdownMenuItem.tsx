import { ImageModel } from "@/types/supabase-helpers";
import Image from "next/image";
import { MouseEvent } from "react";

interface DropdownMenuItemProps {
  label?: string;
  disabled?: boolean;
  title?: boolean;
  image?: ImageModel;
  handleClick?: (e: MouseEvent) => void;
}

const DropdownMenuItem = ({
  label,
  disabled = false,
  title = false,
  image,
  handleClick = (e: MouseEvent) => {
    console.log("e:", e);
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
        onClick={handleClick}
        disabled={title || disabled}
      >
        <div className="flex items-center ">
          {image !== undefined && (
            <div
              className={[
                label !== undefined ? "pr-2" : "",
                disabled ? "opacity-50" : "opacity-100",
              ].join(" ")}
            >
              <div id="imageContainer" className={"w-8 flex-none"}>
                <div
                  id="imageContainer"
                  className={"w-8 flex-none rounded-full"}
                >
                  <Image
                    src={image.url}
                    width={20}
                    height={20}
                    alt={image.alt}
                  />
                </div>
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
