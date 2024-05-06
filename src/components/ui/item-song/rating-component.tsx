import CanadaIcon from "../../svg-icons/canada-icon";
import * as s from "./item-song.styled";

const RatingComponent = () => {
  return (
    <ul>
      <s.Li className="flex">
        <s.Muted>Country:</s.Muted>
        <p>Canada</p>
        <CanadaIcon />
      </s.Li>
      <s.Li>
        <s.Muted>Place in the country: </s.Muted>
        <p>05</p>
      </s.Li>
      <s.Li>
        <s.Muted>Place in the world:</s.Muted>
        <p>43</p>
      </s.Li>
      <s.SoundToText>
        <span>A</span>
        <p className="cursor-pointer">Sound to text</p>
      </s.SoundToText>
    </ul>
  );
};

export default RatingComponent;
