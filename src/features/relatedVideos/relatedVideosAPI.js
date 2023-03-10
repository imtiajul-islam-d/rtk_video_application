import axiosInstance from "../../utils/axios";

export const getRelatedVideos = async ({currentId, tags}) => {
  const limit = 5;
  const queryString =
    tags.length > 0
      ? tags?.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${currentId}&_limit=${limit}`
      : `id_ne=${currentId}&_limit=${limit}`;
  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response.data;
};
