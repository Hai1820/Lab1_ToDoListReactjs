import api from "../constants/api";

export const courserService = {
  getList() {
    return api.get("/elearning/v4/courses");
  },
  getDetail(id) {
    return api.get(`/elearning/v4/courses/${id}`);
  },
};
