interface MaleIconProps {
  color?: string;
  selected?: boolean;
  height?: number;
  width?: number;
}

const MaleIcon = ({
  color = "#BBB",
  selected = false,
  height = 30,
  width = 30,
}: MaleIconProps) => {
  return (
    <svg
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>male [#1364]</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-60.000000, -2079.000000)"
          fill={color}
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
              id="male-[#1364]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MaleIcon;