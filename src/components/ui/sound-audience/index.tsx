import ChairIcon from "../../svg-icons/chair-icon";
import MusicIcon from "../../svg-icons/music-icon";
import OtherIcon from "../../svg-icons/other-icon";
import PeopleIcon from "../../svg-icons/people-icon";
import PerfomenceIcon from "../../svg-icons/perfomence-icon";
import SoccerIcon from "../../svg-icons/soccer-icon";
import TreeIcon from "../../svg-icons/three-icon";
import * as s from "./sound-audience.styled";
import { FaHandHoldingHeart } from "react-icons/fa";

const SoundAudienceComponent = () => {
  const list = [
    { id: 1, icon: <ChairIcon />, name: "Beauty", value: "40%" },
    { id: 2, icon: <MusicIcon />, name: "Music", value: "31%" },
    { id: 3, icon: <TreeIcon />, name: "Travel", value: "22%" },
    { id: 4, icon: <PerfomenceIcon />, name: "Show", value: "14%" },
    { id: 5, icon: <SoccerIcon />, name: "Sport", value: "12%" },
    { id: 6, icon: <FaHandHoldingHeart />, name: "Health", value: "9%" },
    { id: 7, icon: <OtherIcon />, name: "Other", value: "6%" },
  ];

  return (
    <s.Section>
      <s.Title>
        <PeopleIcon /> Sound Audience
      </s.Title>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <div className="icon-value">
              <span>
                {item.icon} <p>{item.name}</p>
              </span>
              <span>{item.value}</span>
            </div>
            <div className="range">
              <span style={{ width: item.value }}></span>
            </div>
          </li>
        ))}
      </ul>
    </s.Section>
  );
};

export default SoundAudienceComponent;
