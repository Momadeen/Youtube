import { subText } from '../../helpers/subText';
import './ChannelCard.scss';

const ChannelCard = () => (
  <div className="channel-card">
    <div className="channel-card__thumbnail-container">
      <img
        src="https://images.pexels.com/photos/10832155/pexels-photo-10832155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="thumbnail"
        className="channel-card__thumbnail"
      />
    </div>
    <div className="channel-card__meta">
      <h2 className="channel-card__title">Lorem ipsum dolor</h2>
      <div className="channel-card__more-details">
        <h5>Hello</h5>
      </div>

      <p className="channel-card__description">
        {subText(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate dui in dui ornare, vel semper ipsum aliquet. Vivamus ac tristique velit. Pellentesque blandit finibus nulla, eu fringilla lorem.',
          120
        )}
      </p>
    </div>
  </div>
);

export default ChannelCard;
