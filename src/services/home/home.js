import api from "../../constants/api";

export const homeService = {
  getReview() {
    return api.get("/elearning/v4/review");
  },
  getGallery() {
    return api.get("/elearning/v4/gallery");
  },
};
