import * as s from "./item-song.styled";
import InfoComponent from "./info-component";
import TrendingComponent from "./trending-component";
import RatingComponent from "./rating-component";
import PopularityComponent from "./popularity-component";

const keywordList = [
  "Whispering breeze",
  "Wandering soul",
  "Crimson dawn",
  "Echoes of silence",
];

const ItemSongComponetn = () => {
  return (
    <section>
      <div className="flex">
        <s.Container>
          <s.Ul>
            <s.FirstLi>
              <InfoComponent />
            </s.FirstLi>
            <s.SecondLi>
              <TrendingComponent />
            </s.SecondLi>
            <s.SecondLi>
              <RatingComponent />
            </s.SecondLi>
          </s.Ul>
          <s.Keywords>
            <span>Keywords:</span>
            <ul>
              {keywordList.map((keyword: string) => (
                <li className="cursor-pointer" key={keyword}>
                  {keyword}
                </li>
              ))}
            </ul>
          </s.Keywords>
        </s.Container>
        <PopularityComponent />
      </div>
    </section>
  );
};

export default ItemSongComponetn;
