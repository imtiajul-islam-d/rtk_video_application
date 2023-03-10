import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedSingleVideo from "../RelatedSignleVideo/RelatedSingleVideo";

const RelatedVideo = ({currentId, tags}) => {
  const {relatedVideos, isLoading, isError, error} = useSelector(state => state.relatedVideos);
  const dispatch = useDispatch(currentId, tags);
  useEffect(() => {
    dispatch(fetchRelatedVideos())
  }, [currentId, tags, dispatch])
  console.log(relatedVideos, isLoading);
  return (
    <>
      <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        <RelatedSingleVideo></RelatedSingleVideo>
        <RelatedSingleVideo></RelatedSingleVideo>
      </div>
    </>
  );
};

export default RelatedVideo;
