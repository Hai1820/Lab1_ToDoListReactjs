import { useEffect, useState } from "react";

const useQuery = (callBack, dependencyList = [], inititalValue = undefined) => {
  const [data, setData] = useState(inititalValue);
  useEffect(() => {
    callBack().then((res) => setData(res.data));
  }, dependencyList);
  return {
    data,
  };
};
export default useQuery;
