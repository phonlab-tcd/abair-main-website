const getBreakpoint = (): "xs" | "sm" | "md" | "lg" | "xl" => {
  // Check if the viewport matches the small (sm) breakpoint
  const isSmallScreen = window.matchMedia("(min-width: 640px)").matches;

  // Check if the viewport matches the medium (md) breakpoint
  const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;

  // Check if the viewport matches the large (lg) breakpoint
  const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

  // Check if the viewport matches the extra-large (xl) breakpoint
  const isExtraLargeScreen = window.matchMedia("(min-width: 1280px)").matches;
  if (isExtraLargeScreen) {
    return "xl";
  } else if (isLargeScreen) {
    return "lg";
  } else if (isMediumScreen) {
    return "md";
  } else if (isSmallScreen) {
    return "sm";
  }
  return "xs";
};

export default getBreakpoint;
