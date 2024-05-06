import GrowthIcon from "../../svg-icons/growth-icon";
import StarsIcon from "../../svg-icons/stars-icon";
import * as s from "./growth.styled";
import { AiFillLike } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const characteristics = [
  {
    id: 1,
    icon: <AiFillLike color="black" />,
    iconValue: "",
    text: "High Trending Chance",
    color: "linear-gradient(180deg, #FF98FB 0%, #FFE769 100%)",
  },
  {
    id: 2,
    icon: <StarsIcon />,
    iconValue: "8",
    text: "Sound assessment  from our AI",
    color: "#00FF94",
  },
  {
    id: 3,
    icon: <HiLocationMarker color="black" />,
    iconValue: "25%",
    text: "Geo Popularity",
    color: "#FFE600",
  },
];

const GrowthComponent = () => {
  return (
    <s.Section>
      <s.Title>
        <GrowthIcon />
        Growth
      </s.Title>
      <s.Ul>
        {characteristics.map(({ id, icon, iconValue, text, color }) => (
          <li key={id}>
            <div style={{ background: `${color}` }}>
              <span>{icon}</span>
              <span>{iconValue}</span>
            </div>
            <span className="text">{text}</span>
          </li>
        ))}
      </s.Ul>
    </s.Section>
  );
};

export default GrowthComponent;
