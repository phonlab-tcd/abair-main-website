const TopText = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-4 md:mb-6 flex w-full justify-center relative text-6xl md:text-8xl">
        ABAIR
      </div>
      <div className="flex text-2xl md:text-3xl font">
        STATE &#8226; OF &#8226; THE &#8226; ART
      </div>

      <div className={`text-xl md:text-2xl font-light  my-2 md:my-2 `}>
        Speech Technologies for Irish
      </div>
      {/* <div className={`text-xl md:text-2xl font-light`}></div> */}
    </div>
  );
};

export default TopText;
