// import { Spinner } from '../../components/Spinner';
import ChannelCard from '../../components/ChannelCard';
import { Divider } from '../../components/Divider';
import Filter from '../../components/Filter';
import PlaylistCard from '../../components/PlaylistCard';
import VideoCard from '../../components/VideoCard';
import useGetContent from '../../hooks/useGetContent';
import './SearchPage.scss';

// type Item = {
//   id: {
//     channelId?: string;
//     videoId?: string;
//     playlistId?: string;
//   };
// };

const Search = () => {
  const { items } = useGetContent();
  console.log(items);

  return (
    <div className="screens search-page">
      <Filter />
      <Divider />
      <div className="search-page__content-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <PlaylistCard />

        {/* {items?.map((item: Item) =>
          item?.id?.channelId ? (
            <ChannelCard />
          ) : item?.id?.videoId ? (
            <VideoCard />
          ) : item?.id?.playlistId ? (
            <PlaylistCard />
          ) : null
        )} */}
      </div>
    </div>
  );
};

export default Search;
