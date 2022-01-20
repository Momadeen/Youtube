import { BsPlayFill } from 'react-icons/bs';
import { subText } from '../../helpers/subText';
import './VideoCard.scss';

const VideoCard = () => (
  <div className="video-card">
    <div className="video-card__thumbnail-container">
      <img
        src="https://images.pexels.com/photos/10832155/pexels-photo-10832155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="thumbnail"
        className="video-card__thumbnail"
      />
      <div className="video-card__thumbnail-play">
        <BsPlayFill fill="white" size={50} />
      </div>
      <div className="video-card__thumbnail-timer">
        <p>3:50</p>
      </div>
    </div>
    <div className="video-card__meta">
      <h2 className="video-card__title">Lorem ipsum dolor</h2>
      <div className="video-card__more-details">
        <h5>Hello</h5>
        <h5>Hello</h5>
        <h5>Hello</h5>
      </div>

      <p className="video-card__description">
        {subText(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate dui in dui ornare, vel semper ipsum aliquet. Vivamus ac tristique velit. Pellentesque blandit finibus nulla, eu fringilla lorem.',
          120
        )}
      </p>
    </div>
  </div>
);

export default VideoCard;
