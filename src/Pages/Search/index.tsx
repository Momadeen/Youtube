// import { useSearchParams } from 'react-router-dom';

import ChannelCard from '../../components/ChannelCard';
import PlaylistCard from '../../components/PlaylistCard';
import VideoCard from '../../components/VideoCard';

const Search = () => (
  <div>
    <div className="screens">
      <VideoCard />
      <ChannelCard />
      <PlaylistCard />
    </div>
  </div>
);

export default Search;

// const queryString = '?query=dsasad';

// const [searchParams, setSearchParams] = useSearchParams();

// console.log(searchParams);
