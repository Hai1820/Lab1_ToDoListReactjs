import { courserService } from "../services/course";

const initialState = {
  isFetchList: false,
  list: null,
  cache: {},
};
export const getCourseList = () => {
  return async (dispatch, getState) => {
    const { course } = getState();
    if (!course.isFetchList) {
      let res = await courserService.getList();
      dispatch({ type: "course/list", payload: res.data });
    }
  };
};
export const getCourseDetail = (id) => {
  return async (dispatch, getState) => {
    const { course } = getState();
    if (!course.cache[id]) {
      let res = await courserService.getDetail(id);
      dispatch({ type: "course/detail", payload: res.data });
    }
  };
};
export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "course/list":
      return {
        ...state,
        list: action.payload,
        isFetchList: true,
      };
    case "course/detail":
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};
