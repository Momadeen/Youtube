import VideoCard from 'components/VideoCard';
import ChannelCard from 'components/ChannelCard';
import { Divider } from 'components/Divider';
import Filter from 'components/Filter';
import PlaylistCard from 'components/PlaylistCard';
import { Spinner } from 'components/Spinner';
import useGetContent from 'hooks/useGetContent';
import './SearchPage.scss';

type Item = {
  id: {
    channelId?: string;
    videoId?: string;
    playlistId?: string;
  };
  channelTitle: string;
  publishedAt: string;
  snippet: {
    title: string;
    description: string;
    thumbnail: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
};

const Search = () => {
  const { items, loading, resultLength } = useGetContent();

  return (
    <div className="search-page">
      {loading ? (
        <div className="search-page_loading-container">
          <Spinner />
        </div>
      ) : (
        <>
          <Filter resultLength={resultLength} />
          <Divider />
          <div className="search-page__content-container">
            {items?.map((item: Item) =>
              item?.id?.channelId ? (
                <ChannelCard
                  channelTitle={item?.channelTitle}
                  title={item?.snippet?.title}
                  description={item?.snippet?.description}
                  thumbnail={item?.snippet?.thumbnails?.default?.url}
                />
              ) : item?.id?.videoId ? (
                <VideoCard
                  publishedAt={item?.publishedAt}
                  channelTitle={item?.channelTitle}
                  title={item?.snippet?.title}
                  description={item?.snippet?.description}
                  thumbnail={item?.snippet?.thumbnails?.default?.url}
                />
              ) : item?.id?.playlistId ? (
                <PlaylistCard
                  channelTitle={item?.channelTitle}
                  title={item?.snippet?.title}
                  description={item?.snippet?.description}
                  thumbnail={item?.snippet?.thumbnails?.default?.url}
                />
              ) : null
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
