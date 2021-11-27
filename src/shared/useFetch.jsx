import { useState, useEffect, useCallback } from 'react';

import apis from './apis';

const useFetch = (sort, page) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //query API 요청 보내기
  const sendQuery = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await apis.getMorePost(sort, page);
      const boardList = response?.data.board_list;

      if (!boardList) {
        setIsLoading(false);
        return false;
      }

      setList(prev => [...prev, ...boardList]);
      setHasMore(boardList.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page, sort]);

  return { hasMore, list, isLoading };
};
export default useFetch;
