import { useEffect, useMemo, useState } from 'react';

// const key = 'AIzaSyC2WYPxHB1btApokVGS6wDXEX0CaH1R2pw';
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}

type TypeData = {
  pageInfo: {
    totalResults: number;
  };
  items: [];
};

// type props = {
//   query: string;
// };

const useGetContent = () => {
  const [data, setData] = useState<TypeData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(result => setData(result));
  }, [loading]);

  console.log(data);

  const resultLength = useMemo(
    () => data?.pageInfo?.totalResults,
    [data?.pageInfo?.totalResults]
  );

  const items = useMemo(() => data?.items, [data?.items]);

  return { resultLength, items, loading };
};

export default useGetContent;
