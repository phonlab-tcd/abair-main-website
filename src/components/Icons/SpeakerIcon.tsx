interface SpeakerIconProps {
  color?: string;
  hoverColor?: string;
  selected?: boolean;
  hover?: boolean;
  height?: number;
  width?: number;
}

const SpeakerIcon = ({
  color = "#BBB",
  height = 30,
  width = 30,
}: SpeakerIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 -3.5 64 64">
      <defs></defs>
      <g id="Page-1" stroke="none" strokeWidth="4" fill="none">
        <g
          id="Person-conversation"
          transform="translate(1.000000, 1.000000)"
          stroke={color}
          strokeWidth="4"
        >
          <path
            d="M29.5,41.8 C27.6,40.9 25,39.3 25,37.8 C25,37 25.3,36.5 25.6,36.4 C29.3,34.4 30.6,27.8 30.9,27.8 C32.1,27.8 33,24.8 33,22.8 C33,21.2 32.5,21.2 31.6,20.7 L31.6,20.5 C31.6,15.2 27.4,11 22.1,11 C16.7,11 12.2,15.4 12.2,20.7 L12.2,20.9 C11.3,21.4 11,21.6 11,23.2 C11,25.2 11.7,28.1 13,28.1 C13.2,28.1 14.9,34.3 18.4,36.4 C18.6,36.5 19,36.9 19,37.6 C19,39.3 16.3,40.8 14.3,41.8 C11.9,43 0.1,44 0.1,55 L44.1,55 C44,44 32.5,43.3 29.5,41.8 L29.5,41.8 Z"
            id="Shape"
          ></path>
          <path
            d="M42.8,18.9 C42.2,18.7 41.6,18.4 41,18.1 C37.3,16.2 34.9,13 35,9.5 C35.1,4 41.3,-0.3 48.8,4.26325641e-14 C56.3,0.2 62.2,4.9 62,10.4 C61.9,15.9 55.7,20.2 48.2,19.9 C47.8,19.9 47.5,19.9 47.1,19.8 L47.1,19.8 L37.9,24 L41,18.2"
            id="Shape"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default SpeakerIcon;
