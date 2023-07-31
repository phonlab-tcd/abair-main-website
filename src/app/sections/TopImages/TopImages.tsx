import imageCarouselData from "./imageCarouselData";
import Image from "next/image";

interface ImageCarouselDataModel {
  path: string;
  ratio: number;
}

const TopImages = () => {
  return (
    <div className="w-full overflow-hidden h-full">
      <div className="relative flex overflowx-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {imageCarouselData.map((image, index) => (
            <Image
              key={index}
              src={"/frontPageImages" + image.path}
              width={128 * image.ratio}
              height={128}
              alt={`Image ${index}`}
            />
          ))}
        </div>
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
          {imageCarouselData.map((image, index) => (
            <Image
              key={index}
              src={"/frontPageImages" + image.path}
              width={128 * image.ratio}
              height={128}
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopImages;
