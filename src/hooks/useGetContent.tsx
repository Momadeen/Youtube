import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const key = 'AIzaSyC2WYPxHB1btApokVGS6wDXEX0CaH1R2pw';

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

  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`
    )
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setData(result);
      });
    setLoading(false);
  }, [loading, query]);

  const resultLength = useMemo(
    () => data?.pageInfo?.totalResults,
    [data?.pageInfo?.totalResults]
  );

  const items = useMemo(() => data?.items, [data?.items]);

  return { resultLength, items, loading };
};

export default useGetContent;
