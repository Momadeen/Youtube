// import { useSearchParams } from 'react-router-dom';

// import { Spinner } from '../../components/Spinner';
import ChannelCard from '../../components/ChannelCard';
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
    <div className="screens">
      <div className="content-container">
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

// const queryString = '?query=dsasad';

// const [searchParams, setSearchParams] = useSearchParams();

// console.log(searchParams);
