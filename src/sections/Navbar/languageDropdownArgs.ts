import { DropdownMenuItemProps } from "abair-web-components";

const languageDropdownArgs: DropdownMenuItemProps[] = [
  {
    label: "Irish",
    image: {
      URL: "/ie.svg",
      width: "w-6",
    },
    disabled: true,
    onClickHandler: () => {
      console.log("Irish clicked");
    },
  },
  {
    label: "English",
    image: {
      URL: "/us.svg",
      width: "w-6",
    },
    onClickHandler: () => {
      console.log("English clicked");
    },
  },
  {
    label: "French",
    image: {
      URL: "/fr.svg",
      width: "w-6",
    },
    onClickHandler: () => {
      console.log("French clicked");
    },
  },
];

export default languageDropdownArgs;
