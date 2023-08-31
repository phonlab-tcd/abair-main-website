interface PitchIconProps {
  color?: string;
  hoverColor?: string;
  selected?: boolean;
  hover?: boolean;
  height?: number;
  width?: number;
}

const PitchIcon = ({
  color = "#BBB",
  height = 30,
  width = 30,
}: PitchIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="2"
        transform="rotate(180 12 12)"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle
        cx="20"
        cy="14"
        r="2"
        transform="rotate(180 20 14)"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(-1 8.74228e-08 8.74228e-08 1 6 8)"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M12 8L12 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 10L20 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 14L4 19"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 19L12 16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 19L20 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 5L4 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PitchIcon;
