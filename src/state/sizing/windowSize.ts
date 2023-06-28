import { atom, useRecoilState } from "recoil";

// Define an atom
const windowWidthState = atom<number | null>({
  key: "windowWidthState",
  default: null,
});

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useRecoilState(windowWidthState);
  return { windowWidth, setWindowWidth };
};

const windowHeightState = atom<number | null>({
  key: "windowHeightState",
  default: null,
});

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useRecoilState(windowHeightState);
  return { windowHeight, setWindowHeight };
};

// Define an atom
const breakpointState = atom<"xs" | "sm" | "md" | "lg" | "xl">({
  key: "breakPointState",
  default: "xs",
});

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useRecoilState(breakpointState);
  return { breakpoint, setBreakpoint };
};

export { useBreakpoint, useWindowWidth, useWindowHeight };
