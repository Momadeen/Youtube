import { useCallback, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import './Input.scss';

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const onClearInput = useCallback(() => setSearchValue(''), []);
  return (
    <div className="search-controllers">
      <div className="search-controllers__input-container">
        <input
          className="search-controllers__input"
          type="text"
          placeholder="Search"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        {searchValue ? (
          <AiOutlineClose
            onClick={onClearInput}
            className="search-controllers__close-icon"
          />
        ) : null}
      </div>
      <div className="search-controllers__search-icon">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default InputSearch;
