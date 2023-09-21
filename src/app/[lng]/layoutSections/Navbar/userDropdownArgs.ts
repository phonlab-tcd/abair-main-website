import { DropdownMenuItemProps } from "@/components/DropdownMenu";

const userLoggedInDropdownArgs: DropdownMenuItemProps[] = [
  {
    label: "Jim Jimson",
    title: true,
  },
  {
    label: "Profile",
  },
  {
    label: "Log Out",
  },
];

const userLoggedOutDropdownArgs: DropdownMenuItemProps[] = [
  {
    label: "Login/Signup",
  },
];

export { userLoggedInDropdownArgs, userLoggedOutDropdownArgs };
