import { MdPlaylistPlay } from 'react-icons/md';
import { subText } from '../../helpers/subText';
import './PlaylistCard.scss';

const PlaylistCard = () => (
  <div className="playlist-card">
    <div className="playlist-card__thumbnail-container">
      <img
        src="https://images.pexels.com/photos/10832155/pexels-photo-10832155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="thumbnail"
        className="playlist-card__thumbnail"
      />
      <div className="playlist-card__playlist-length">
        <p>39</p>
        <MdPlaylistPlay fill="white" size={30} />
      </div>
    </div>
    <div className="playlist-card__meta">
      <h2 className="playlist-card__title">Lorem ipsum dolor</h2>
      <div className="playlist-card__more-details">
        <h5>Hello</h5>
      </div>

      <p className="playlist-card__description">
        {subText(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate dui in dui ornare, vel semper ipsum aliquet. Vivamus ac tristique velit. Pellentesque blandit finibus nulla, eu fringilla lorem.',
          120
        )}
      </p>
    </div>
  </div>
);

export default PlaylistCard;
