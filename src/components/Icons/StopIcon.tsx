interface StopIconProps {
  color?: string;
  hoverColor?: string;
  selected?: boolean;
  hover?: boolean;
  height?: number;
  width?: number;
}

const StopIcon = ({
  color = "#BBB",
  height = 30,
  width = 30,
}: StopIconProps) => {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>stop</title>
      <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h16.128q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-16.128q-0.832 0-1.44 0.576t-0.576 1.44v16.16z"></path>
    </svg>
  );
};

export default StopIcon;