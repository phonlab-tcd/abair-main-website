interface MicrophoneIconProps {
  color?: string;
  hoverColor?: string;
  selected?: boolean;
  hover?: boolean;
  height?: number;
  width?: number;
}

const MicrophoneIcon = ({
  color = "#BBB",
  height = 30,
  width = 30,
}: MicrophoneIconProps) => {
  return (
    <svg
      fill={color}
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <g>
          <path d="M256,0c-37.702,0-68.267,30.564-68.267,68.267v68.267h136.533V68.267C324.267,30.564,293.702,0,256,0z" />
        </g>
      </g>
      <g>
        <g>
          <path d="M187.733,163.84v68.267c0,37.702,30.564,68.267,68.267,68.267s68.267-30.564,68.267-68.267V163.84H187.733z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M406.187,232.107h-40.96c0,60.228-48.999,109.227-109.227,109.227s-109.227-48.999-109.227-109.227h-40.96
			c0,75.866,56.548,138.764,129.707,148.784v90.149h-47.787V512h136.533v-40.96H276.48v-90.149
			C349.639,370.871,406.187,307.973,406.187,232.107z"
          />
        </g>
      </g>
    </svg>
  );
};

export default MicrophoneIcon;
