import irelandMapData from "@/components/Map/irelandMapData";
interface mapMiniDataModel {
  name: string;
  coordinates: string;
}

interface MapMiniProps {
  height?: number;
  mapMiniData?: mapMiniDataModel[];
  selectedCounty?: string;
  gaeltachts?: string[];
  countyColor?: string;
  highlightColor?: string;
}

const MapMini = ({
  height = 400,
  mapMiniData = irelandMapData,
  selectedCounty = "Ulster",
  gaeltachts = ["Ulster", "Connemara", "Munster"],
  countyColor = "#4ade80",
  highlightColor = "#2563eb",
}: MapMiniProps) => {
  return (
    <div className="relative">
      <svg viewBox="0 520 450 600" height={height}>
        <g transform="scale(1.1)">
          {mapMiniData.map((c: mapMiniDataModel, i: number) => (
            <g
              key={i}
              fill={
                c.name === selectedCounty
                  ? highlightColor
                  : !gaeltachts.includes(c.name)
                  ? countyColor
                  : "rgba(0,0,0,0)"
              }
              stroke={
                c.name === selectedCounty
                  ? highlightColor
                  : !gaeltachts.includes(c.name)
                  ? countyColor
                  : "rgba(0,0,0,0)"
              }
            >
              <path
                d={c.coordinates}
                strokeWidth={c.name === selectedCounty ? "15" : "2"}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default MapMini;
export type { MapMiniProps };
