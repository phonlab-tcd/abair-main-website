interface DownloadIconProps {
  color?: string;
  hoverColor?: string;
  selected?: boolean;
  hover?: boolean;
  height?: number;
  width?: number;
}

const DownloadIcon = ({
  color = "#BBB",
  height = 30,
  width = 30,
}: DownloadIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />

      <g>
        <path
          d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />

        <g>
          <polyline
            data-name="Right"
            fill="none"
            id="Right-2"
            points="7.9 12.3 12 16.3 16.1 12.3"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />

          <line
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="12"
            x2="12"
            y1="2.7"
            y2="14.2"
          />
        </g>
      </g>
    </svg>
  );
};

export default DownloadIcon;
