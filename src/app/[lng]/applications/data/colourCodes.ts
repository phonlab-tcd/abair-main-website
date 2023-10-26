function getColour (appName: string) {
  let colour = "bg-primary-500";
  if (appName === "An Bat Mírialta") {
    colour = "bg-[#539BAB]";
  } else if (appName === "An Scéalaí") {
    colour = "bg-[#897165]";
  } else if (appName === "Mol an Óige") {
    colour = "bg-[#D43633]";
  } else if (appName === "Aip ABAIR") {
    colour = "bg-[#069000]";
  } else if (appName === "Léitheoir Gréasáin") {
    colour = "bg-[#287982]";
  } else if (appName === "Neartú") {
    colour = "bg-[#363636]";
  } else if (appName === "Geabaire") {
    colour = "bg-[#03BD9D]";
  } else if (appName === "Léitheoir Scáileáin NVDA") {
    colour = "bg-[#660099]";
  } else if (appName === "C-Pen") {
    colour = "bg-[#DB562D]";
  }
  return colour;
}

export default getColour;