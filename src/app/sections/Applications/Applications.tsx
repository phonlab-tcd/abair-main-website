/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { Button } from "abair-web-components";

const Applications = () => {
  return (
    <div className="w-full">
      <div className="text-center">
        <div className="text-xl lg:text-2xl font-light">Applications</div>
      </div>

      <div className="flex justify-center w-full">
        <div className="max-w-6xl w-full h-full">
          <div className="w-full flex flex-col justify-center ">
            <div className="flex justify-center">
              <div className="ml-[-70px]">
                <img
                  src={"/abair-applications.png"}
                  width={700}
                  height={500}
                  alt="ABAIR applications image"
                  className="drop-shadow-applications"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Button
          colors="bg-inherit text-lg text-white border-2 border-white hover:bg-applications-300"
          sizes="w-48 p-1.5 rounded-md"
        >
          see all
        </Button>
      </div>
    </div>
  );
};

export default Applications;
