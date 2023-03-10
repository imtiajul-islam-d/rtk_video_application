import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedSingleVideo from "../RelatedSignleVideo/RelatedSingleVideo";
import Loading from "../Ui/Loading";

const RelatedVideo = ({currentId, tags}) => {
  const {relatedVideos, isLoading, isError, error} = useSelector(state => state.relatedVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideos({currentId, tags}))
  }, [currentId, tags, dispatch])
  // decide what to render
  let content;
  if(isLoading) content = <Loading></Loading>
  if(!isLoading && isError) content = <div>{error}</div>
  if(!isLoading && !isError && relatedVideos.length === 0) content = <div>No related videos found!</div>
  if(!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos?.map(video => <RelatedSingleVideo key={video?.id} video={video} />)
  }

  return (
    <>
      <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
       {content}
      </div>
    </>
  );
};

export default RelatedVideo;
