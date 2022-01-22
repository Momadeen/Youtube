import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// const key = 'AIzaSyC2WYPxHB1btApokVGS6wDXEX0CaH1R2pw';
const key2 = 'AIzaSyCotndQ8OPznFt03xRjMY12mJN6TTeFbg0';
const http = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet';
const first = 25;

type TypeData = {
  pageInfo: {
    totalResults: number;
  };
  items: [];
};

const useGetContent = () => {
  const [data, setData] = useState<TypeData>();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const query = useMemo(() => searchParams.get('query'), [searchParams]);

  // ${http}&maxResults=${first}&q=${query}&key=${key}
  const fetchData = useCallback(async () => {
    setLoading(true);
    await fetch(`${http}&maxResults=${first}&q=${query}&key=${key2}`)
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setData(result);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const resultLength = useMemo(
    () => data?.pageInfo?.totalResults,
    [data?.pageInfo?.totalResults]
  );

  const items = useMemo(() => data?.items, [data?.items]);

  return { resultLength, items, loading };
};

export default useGetContent;
