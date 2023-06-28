"use client";
import { getBreakpoint } from "@/utils";
import { useBreakpoint, useWindowHeight, useWindowWidth } from "@/state";

const useHandleWindowResize = () => {
  const { setBreakpoint } = useBreakpoint();
  const { setWindowHeight } = useWindowHeight();
  const { setWindowWidth } = useWindowWidth();

  function handleWindowResize() {
    setBreakpoint(getBreakpoint());
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    console.log("breakpoint:", getBreakpoint());
    console.log("width:", window.innerWidth);
    console.log("height:", window.innerHeight);
  }

  return handleWindowResize;
};

export default useHandleWindowResize;
