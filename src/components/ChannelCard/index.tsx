import { subText } from 'helpers/subText';
import './ChannelCard.scss';

type Props = {
  channelTitle: string;
  title: string;
  description: string;
  thumbnail: string;
};

const ChannelCard = ({
  channelTitle,
  title,
  description,
  thumbnail
}: Props) => (
  <div className="channel-card">
    <div className="channel-card__thumbnail-container">
      <img
        src={
          thumbnail ||
          'https://images.pexels.com/photos/8452844/pexels-photo-8452844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
        alt="thumbnail"
        className="channel-card__thumbnail"
      />
    </div>
    <div className="channel-card__meta">
      <h2 className="channel-card__title">{channelTitle || title}</h2>
      <div className="channel-card__more-details">
        <p className="channel-card__videos-count">180 videos</p>
        <p className="channel-card__sub-count">23,858 subscribers</p>
      </div>

      <p className="channel-card__description">{subText(description, 120)}</p>
    </div>
  </div>
);

export default ChannelCard;
