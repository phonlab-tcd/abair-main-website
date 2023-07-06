import { DropdownMenuItemProps } from "abair-web-components";

const languageDropdownArgs: DropdownMenuItemProps[] = [
  {
    children: "Irish",
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
    children: "English",
    image: {
      URL: "/us.svg",
      width: "w-6",
    },
    onClickHandler: () => {
      console.log("English clicked");
    },
  },
  {
    children: "French",
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
