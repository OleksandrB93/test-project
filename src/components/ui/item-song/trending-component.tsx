import * as s from "./item-song.styled";
import { IoMdLock } from "react-icons/io";

const TrendingComponent = () => {
  return (
    <ul>
      <s.Li className="flex">
        <span>🔥🔥🔥</span>
        <p>Trending</p>
      </s.Li>
      <s.Li>
        <s.Muted>Duration: </s.Muted>
        <p>00:45</p>
      </s.Li>
      <s.Li>
        <s.Muted>Bitrate:</s.Muted>
        <s.Bitrate>
          320 kbps
          <span>
            <IoMdLock size={14}/>
          </span>
        </s.Bitrate>
      </s.Li>
    </ul>
  );
};

export default TrendingComponent;
