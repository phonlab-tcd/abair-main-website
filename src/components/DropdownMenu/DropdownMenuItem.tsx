import { ImageModel } from "@/types/supabase-helpers";
import Image from "next/image";
import Link from "next/link";
import { languages } from "@/app/i18n/settings";
import { usePathname } from "next/navigation";

interface DropdownMenuItemProps {
  label?: string;
  disabled?: boolean;
  title?: boolean;
  image?: ImageModel;
}

const DropdownMenuItem = ({
  label,
  disabled = false,
  title = false,
  image,
}: DropdownMenuItemProps) => {
  const pathname = usePathname();
  const authCallback = `${
    process.env.NEXT_PUBLIC_AUTH_URL
  }?ref=${encodeURIComponent(window.location.href + "/auth/callback")}`;
  const signOutCallback = `${
    process.env.NEXT_PUBLIC_AUTH_URL
  }sign-out?ref=${encodeURIComponent(window.location.href + "/auth/callback")}`;

  const getHrefFromLabel = (label?: string): string => {
    let href = "";
    if (typeof label === "string") {
      if (languages.includes(label)) {
        href = `/${label}${pathname.slice(3, pathname.length)}`;
      } else if (label === "Profile") {
        console.log("in Profile");
        href = `${pathname.slice(0, 3)}/profile`;
      } else if (label === "Login/Signup") {
        href = authCallback;
      } else if (label === "Log Out") {
        href = signOutCallback;
      }
    }

    return href;
  };

  return (
    <li className="block">
      <Link href={getHrefFromLabel(label)}>
        <button
          className={[
            "w-full h-full bg-inherit p-4",
            title
              ? "text-grey-900"
              : disabled
              ? "text-grey-300"
              : "text-grey-500 hover:bg-grey-100",
          ].join(" ")}
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
      </Link>
      <div className={title ? "border-b mx-3" : ""}></div>
    </li>
  );
};

export default DropdownMenuItem;
export type { DropdownMenuItemProps };
