import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetail } from "../store/course";

export const useCourseDetail = (id) => {
  const { cache } = useSelector((store) => store.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, []);
  return cache[id] || {};
};
