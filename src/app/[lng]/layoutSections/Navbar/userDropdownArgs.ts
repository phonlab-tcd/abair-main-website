import { DropdownMenuItemProps } from "@/components/DropdownMenu";

const userLoggedInDropdownArgs: DropdownMenuItemProps[] = [
  {
    label: "Jim Jimson",
    onClickHandler: () => {
      console.log("nothing");
    },
    title: true,
  },
  {
    label: "Profile",
    onClickHandler: () => {
      console.log("go to profile");
    },
  },
  {
    label: "Log Out",
    onClickHandler: () => {
      console.log("log out");
    },
  },
];

export default userLoggedInDropdownArgs;
