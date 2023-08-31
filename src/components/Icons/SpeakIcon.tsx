interface SpeakIconProps {
  color?: string;
  hoverColor?: string;
  selected?: boolean;
  hover?: boolean;
  height?: number;
  width?: number;
}

const SpeakIcon = ({
  color = "#BBB",
  height = 30,
  width = 30,
}: SpeakIconProps) => {
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color}>
        <path d="M9,14a4,4,0,1,0-4-4A4,4,0,0,0,9,14ZM9,8a2,2,0,1,1-2,2A2,2,0,0,1,9,8ZM6,15h6a4,4,0,0,1,4,4v2a1,1,0,0,1-2,0V19a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2v2a1,1,0,0,1-2,0V19A4,4,0,0,1,6,15Zm11.462-5A5.977,5.977,0,0,1,15.7,14.253a1,1,0,0,1-1.414-1.414,4.015,4.015,0,0,0,0-5.678A1,1,0,1,1,15.7,5.747,5.977,5.977,0,0,1,17.462,10Zm-.181,7.7a1,1,0,0,1,.024-1.414,8.667,8.667,0,0,0,0-12.562A1,1,0,0,1,18.7,2.281a10.667,10.667,0,0,1,0,15.438,1,1,0,0,1-1.414-.024Z" />
      </g>
    </svg>
  );
};

export default SpeakIcon;
