import moment from 'moment';
import { BsPlayFill } from 'react-icons/bs';
import { subText } from 'helpers/subText';
import './VideoCard.scss';
import { useScreenWidth } from 'hooks/useScreenWidth';

type Props = {
  publishedAt: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnail: string;
};

const VideoCard = ({
  publishedAt,
  channelTitle,
  title,
  description,
  thumbnail
}: Props) => {
  const screenWidth = useScreenWidth();

  return (
    <div className="video-card">
      <div className="video-card__thumbnail-container">
        <img
          src={
            thumbnail ||
            'https://images.pexels.com/photos/8452844/pexels-photo-8452844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
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
        <h2 className="video-card__title">{title}</h2>
        <div className="video-card__more-details">
          <h5>{channelTitle}</h5>
          <h5>10M views</h5>
          {screenWidth >= 500 ? (
            <h5>{moment(publishedAt, 'YYYYMMDD').fromNow()}</h5>
          ) : null}
        </div>

        <p className="video-card__description">{subText(description, 120)}</p>
      </div>
    </div>
  );
};

export default VideoCard;
