import { Synthesis, Recognition } from "@/sections";

const CoreTechnologies = () => {
  return (
    <div className="grid md:grid-cols-2 justify-center w-full max-w-6xl md:gap-[24px] lg:gap-[48px] mt-8">
      <div className="flex justify-center md:justify-end">
        <Synthesis />
      </div>
      <div className="w-full flex justify-center md:justify-start">
        <Recognition />
      </div>
    </div>
  );
};

export default CoreTechnologies;
