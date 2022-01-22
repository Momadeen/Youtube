import React, { useCallback, useRef, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useScreenWidth } from '../../hooks/useScreenWidth';

import './Input.scss';

const InputSearch = () => {
  const [showInputMobile, setShowInputMobile] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const onClearInput = useCallback(() => setSearchValue(''), []);
  const screenWidth = useScreenWidth();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback(() => {
    if (screenWidth <= 500 && searchValue === '') {
      setShowInputMobile(true);
      inputRef?.current?.focus();
    }
  }, [screenWidth, searchValue]);

  return (
    <div className="search-controllers">
      <div
        className="search-controllers__input-container"
        style={{
          flexGrow: !showInputMobile && screenWidth <= 500 ? '0.8' : '0.6'
        }}
      >
        {screenWidth <= 500 ? (
          showInputMobile ? (
            <input
              className="search-controllers__input"
              type="text"
              ref={inputRef}
              placeholder="Search"
              width="10px"
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
            />
          ) : null
        ) : (
          <input
            className="search-controllers__input"
            type="text"
            ref={inputRef}
            placeholder="Search"
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
          />
        )}

        {searchValue ? (
          <AiOutlineClose
            onClick={onClearInput}
            className="search-controllers__close-icon"
          />
        ) : null}
      </div>
      <div className="search-controllers__search-icon">
        <AiOutlineSearch onClick={onSubmit} />
      </div>
    </div>
  );
};

export default InputSearch;
