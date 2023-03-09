import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import SingleVideo from "../SingleVideo/SingleVideo";
import Loading from "../Ui/Loading";

const VideoGrid = () => {
  const disptch = useDispatch();
  useEffect(() => {
    disptch(fetchVideos());
  }, [disptch]);
  const {videos, isLoading, isError, error} = useSelector(state => state.videos);
  console.log(videos);
  // decide what to render
  let content;
  if(isLoading) content = <Loading></Loading>;
  if(!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if( !isError && !isLoading && videos.length === 0) {
    content = <div className="col-span-12">No videos found!!</div>
  }
  if( !isError && !isLoading && videos.length > 0) {
    content = videos.map(video => <SingleVideo key={video.id} video={video}></SingleVideo>)
  }
  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* <!-- single video --> */}
            {content}
            {/* <SingleVideo></SingleVideo> */}
            {/* <!-- error section */}
            {/* <div className="col-span-12">some error happened</div> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;
