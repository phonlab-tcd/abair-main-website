import { ReactNode } from "react";

interface ThumbnailImageProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
}

const sizes = {
  xs: "w-4",
  sm: "w-6",
  md: "w-8",
  lg: "w-10",
  xl: "w-12",
};

const ThumbnailImage = ({ size, children }: ThumbnailImageProps) => {
  return (
    <div id="imageContainer" className={[sizes[size], "flex-none"].join(" ")}>
      {children}
    </div>
  );
};

export default ThumbnailImage;
export type { ThumbnailImageProps };
