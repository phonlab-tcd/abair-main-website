// import ThumbnailImage, {
//   ThumbnailImageProps,
// } from "@/components/ThumbnailImage";

interface DropdownMenuButtonProps {
  // image?: ThumbnailImageProps;
  label?: string;
  onClickHandler: () => void;
  isOpen: boolean;
  showArrow: boolean;
}

const DropdownMenuButton = ({
  label,
  onClickHandler = () => {
    console.log("menu Button clicked");
  },
  // image,
  isOpen = false,
  showArrow = false,
}: DropdownMenuButtonProps) => {
  return (
    <button
      id="dropdownDefaultButton"
      onClick={onClickHandler}
      data-dropdown-toggle="dropdown"
      className={
        "text-primary-700 bg-inherit hover:bg-grey-100 flex text-center items-center h-full w-full px-2 lg:px-4 transition-colors ease-in-out duration-200"
      }
      type="button"
    >
      {/* {image !== undefined && (
        <div className={label !== undefined ? "pr-2" : ""}>
          <ThumbnailImage
            URL={image.URL}
            width={image.width}
            border={image.border}
            borderColor={image.borderColor}
          />
        </div>
      )} */}
      {label !== undefined && (
        <p className="text-inherit text-sm lg:text-base">{label}</p>
      )}
      {showArrow && (
        <svg
          className={["w-4 h-4 ml-2", isOpen && "rotate-180"].join(" ")}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default DropdownMenuButton;
export type { DropdownMenuButtonProps };
