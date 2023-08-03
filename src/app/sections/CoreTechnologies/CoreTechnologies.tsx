import { Button } from "abair-web-components";
import { Recognition, Synthesis } from "../index";

const CoreTechnologies = () => {
  return (
    <div className="justify-center w-full max-w-6xl">
      <div className="grid md:grid-cols-2 gap-[24px] lg:gap-[48px] mt-2">
        <div className="flex justify-center md:justify-end">
          <Synthesis />
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Recognition />
        </div>
      </div>
      <div className="w-full flex justify-center my-8">
        <Button
          colors="bg-inherit text-grey-600 text-lg lg:text-xl hover:text-grey-700 hover:underline"
          sizes="py-0.5 px-1 rounded-sm"
        >
          learn more <span className="text-3xl lg:text-4xl">&#8594;</span>
        </Button>
      </div>
    </div>
  );
};

export default CoreTechnologies;
