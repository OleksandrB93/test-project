import * as s from "./item-song.styled";
import { FaPlay } from "react-icons/fa";

const PopularityComponent = () => {
  return (
    <div>
      <s.VideosInfo>
        <p>🙋‍♂️ Videos</p>
        <span className="amount">1.8M</span>
        <div className="play-button cursor-pointer">
          <FaPlay size={12} />
          <p>Watch Videos</p>
        </div>
      </s.VideosInfo>

      <s.Growth>
        <p>Daily Growth</p>
        <span>+100K</span>
      </s.Growth>
    </div>
  );
};

export default PopularityComponent;
