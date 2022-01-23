import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { useScreenWidth } from 'hooks/useScreenWidth';

import './Input.scss';

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [showInputMobile, setShowInputMobile] = useState(false);
  const [searchValue, setSearchValue] = useState<string | undefined>('');

  const screenWidth = useScreenWidth();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    () => setSearchValue(searchParams.get('query')?.toString()),
    [searchParams]
  );

  const onClearInput = useCallback(() => {
    setSearchValue('');
    searchParams.set('query', '');
  }, [searchParams]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      if (
        screenWidth <= 500 &&
        (searchValue === '' || searchValue === undefined)
      ) {
        setShowInputMobile(true);
        inputRef?.current?.focus();
      }
      if (
        e?.target[0]?.value &&
        (e?.target[0]?.value !== '' || e?.target[0]?.value !== undefined)
      ) {
        setSearchParams({ query: e?.target[0]?.value });
      } else {
        inputRef?.current?.focus();
      }
    },
    [screenWidth, searchValue, setSearchParams]
  );

  return (
    <form onSubmit={onSubmit} className="search-controllers">
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
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
            />
          ) : (
            <p>{searchValue}</p>
          )
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

        {searchValue && showInputMobile ? (
          <AiOutlineClose
            onClick={onClearInput}
            className="search-controllers__close-icon"
          />
        ) : null}
      </div>
      <button type="submit" className="search-controllers__search-button">
        <AiOutlineSearch />
      </button>
    </form>
  );
};

export default InputSearch;
