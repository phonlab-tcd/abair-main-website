import { DropdownMenuItemProps } from "abair-web-components";

const userLoggedInDropdownArgs: DropdownMenuItemProps[] = [
  {
    children: "Jim Jimson",
    onClickHandler: () => {
      console.log("nothing");
    },
    title: true,
  },
  {
    children: "Profile",
    onClickHandler: () => {
      console.log("go to profile");
    },
  },
  {
    children: "Log Out",
    onClickHandler: () => {
      console.log("log out");
    },
  },
];

export default userLoggedInDropdownArgs;
