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

  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: string;
    thumbnail: string;
    thumbnails: {
      medium: {
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
            {items?.length ? (
              items?.map((item: Item) =>
                item?.id?.channelId ? (
                  <ChannelCard
                    channelTitle={item?.snippet?.channelTitle}
                    title={item?.snippet?.title}
                    description={item?.snippet?.description}
                    thumbnail={item?.snippet?.thumbnails?.medium?.url}
                  />
                ) : item?.id?.videoId ? (
                  <VideoCard
                    publishedAt={item?.snippet?.publishedAt}
                    channelTitle={item?.snippet?.channelTitle}
                    title={item?.snippet?.title}
                    description={item?.snippet?.description}
                    thumbnail={item?.snippet?.thumbnails?.medium?.url}
                  />
                ) : item?.id?.playlistId ? (
                  <PlaylistCard
                    channelTitle={item?.snippet?.channelTitle}
                    title={item?.snippet?.title}
                    description={item?.snippet?.description}
                    thumbnail={item?.snippet?.thumbnails?.medium?.url}
                  />
                ) : null
              )
            ) : (
              <p className="discover-msg">
                Discover more Videos, Channels and Playlists.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
