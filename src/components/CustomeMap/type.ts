import data from "../../json/locations.json";

type Location = (typeof data)[number];

interface Props {
  onSelect: (loc: Location) => void;
  focusLocation: Location | null;
}

export type { Props, Location };
