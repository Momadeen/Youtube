import { MdPlaylistPlay } from 'react-icons/md';
import { subText } from 'helpers/subText';
import './PlaylistCard.scss';

type Props = {
  channelTitle: string;
  title: string;
  description: string;
  thumbnail: string;
};

const PlaylistCard = ({
  channelTitle,
  title,
  description,
  thumbnail
}: Props) => (
  <div className="playlist-card">
    <div className="playlist-card__thumbnail-container">
      <img
        src={
          thumbnail ||
          'https://images.pexels.com/photos/8452844/pexels-photo-8452844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
        alt="thumbnail"
        className="playlist-card__thumbnail"
      />
      <div className="playlist-card__playlist-length">
        <p>39</p>
        <MdPlaylistPlay fill="white" size={30} />
      </div>
    </div>
    <div className="playlist-card__meta">
      <h2 className="playlist-card__title">{channelTitle}</h2>
      <div className="playlist-card__more-details">
        <h5 className="playlist-card__more-details-title">{title}</h5>
      </div>

      <p className="playlist-card__description">{subText(description, 120)}</p>
    </div>
  </div>
);

export default PlaylistCard;
