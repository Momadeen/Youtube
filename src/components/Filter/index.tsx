import { BsFilter } from 'react-icons/bs';
import { useScreenWidth } from 'hooks/useScreenWidth';

import './Filter.scss';
import Select from 'components/Select';

type Props = {
  resultLength?: number;
};

const Filter = ({ resultLength }: Props) => {
  const screenWidth = useScreenWidth();
  return (
    <div className="filter">
      {screenWidth <= 500 ? (
        <div className="filter__filter-mob">
          <Select label="All" />
          <Select label="Any time" />
        </div>
      ) : (
        <div className="filter__filter-desk">
          <h4 className="filter__filter-result">
            About {resultLength || 0} results
          </h4>
          <div className="filter__filter-icon-container">
            <BsFilter size={25} style={{ marginRight: '20px' }} />
            <p>FILTER</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
