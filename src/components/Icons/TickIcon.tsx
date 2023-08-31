interface CopyIconProps {
  color?: string;
  hoverColor?: string;
  selected?: boolean;
  hover?: boolean;
  height?: number;
  width?: number;
}

const CopyIcon = ({
  color = "#BBB",
  height = 30,
  width = 30,
}: CopyIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />

      <g id="Complete">
        <g id="tick">
          <polyline
            fill="none"
            points="3.7 14.3 9.6 19 20.3 5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </g>
    </svg>
  );
};

export default CopyIcon;
