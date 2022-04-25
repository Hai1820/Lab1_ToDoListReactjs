import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseList } from "../store/course";

export const useCourseList = () => {
  const { list } = useSelector((store) => store.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseList());
  }, []);
  return list;
};
