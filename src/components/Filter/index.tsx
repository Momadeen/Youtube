import { BsFilter } from 'react-icons/bs';
import './Filter.scss';

const Filter = () => (
  <div className="filter">
    <h4 className="filter__filter-result">About 1000 results</h4>
    <div className="filter__filter-icon-container">
      <BsFilter size={25} style={{ marginRight: '20px' }} />
      <p>FILTER</p>
    </div>
  </div>
);

export default Filter;
