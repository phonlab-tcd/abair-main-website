import { ImageCarousel } from "@/components";
import imageCarouselData from "../imageCarouselData";
import { fadeInMainLogo } from "../animationTimings/animationTimings";

const TopImages = () => {
  return (
    <div className="relative h-[210px]">
      <ImageCarousel
        fadeInDuration={fadeInMainLogo}
        images={imageCarouselData}
      />
    </div>
  );
};

export default TopImages;
