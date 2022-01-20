import { useCallback, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import './Input.scss';

const InputSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const onClearInput = useCallback(() => setSearchValue(''), []);
  return (
    <div className="searchControllers">
      <div className="searchControllers__inputContainer">
        <input
          className="searchControllers__input"
          type="text"
          placeholder="Search"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        {searchValue ? (
          <AiOutlineClose
            onClick={onClearInput}
            className="searchControllers__closeicon"
          />
        ) : null}
      </div>
      <div className="searchControllers__searchicon">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default InputSearch;
