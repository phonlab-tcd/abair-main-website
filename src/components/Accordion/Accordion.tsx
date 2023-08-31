import { ReactNode } from "react";

export interface AccordionProps {
  title?: string;
  content?: ReactNode;
  isOpen?: boolean;
  handleClick: () => void;
  search?: boolean;
}

const Accordion = ({
  title,
  content,
  isOpen,
  handleClick,
  search = false,
}: AccordionProps) => {
  return (
    <div className="w-full">
      <button
        className={`flex p-2 text-sm transition-colors duration-300 ${
          search ? "bg-teal-400" : "bg-grey-200"
        }`}
        onClick={() => {
          handleClick();
        }}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
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
      </button>
      {isOpen && (
        <div className={`text-sm ${search ? "bg-teal-200" : "bg-inherit"}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
