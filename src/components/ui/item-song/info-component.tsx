import * as s from "./item-song.styled";
import InfoIcon from "../../svg-icons/info-icon";
import SpotifyIcon from "../../svg-icons/spotify-icon";
import AppleMusicIcon from "../../svg-icons/apple-music-icon";
import TikTokIcon from "../../svg-icons/tik-tok-icon";
import { FaPlay } from "react-icons/fa";

const InfoComponent = () => {
  return (
    <div className="flex gap">
      <s.ArtistImage>
        <img src="/images/artist_image.png" alt="artist" />
        <button>
          <FaPlay size={12} />
        </button>
      </s.ArtistImage>
      <ul>
        <s.InfoArist>
          <p>Official Artist</p>
          <InfoIcon />
        </s.InfoArist>
        <s.NameArist>
          <p>Khabane Lame</p>
        </s.NameArist>
        <s.SubName>
          <p>Melodic sound</p>
        </s.SubName>
        <s.TypeArtist>
          <span>type:</span>
          <p>Original</p>
        </s.TypeArtist>
        <li>
          <ul className="flex gap">
            <li className="cursor-pointer">
              <SpotifyIcon />
            </li>
            <li className="cursor-pointer">
              <AppleMusicIcon />
            </li>
            <li className="cursor-pointer">
              <TikTokIcon />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default InfoComponent;
