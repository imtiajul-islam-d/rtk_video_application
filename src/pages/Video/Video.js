import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideo from "../../components/RelatedVideo/RelatedVideo";
import Loading from "../../components/Ui/Loading";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { fetchVideo } from "../../features/video/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const { videoId } = useParams();
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [videoId, dispatch]);

  const { date, description, link, title, id, tags } = video || {};
  let content;
  if (isLoading) content = <Loading></Loading>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && video.id) {
    content = (
      <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}
          <VideoPlayer title={title} link={link}></VideoPlayer>

          {/* <!-- video description --> */}
          <VideoDescription
            description={description}
            date={date}
            title={title}
          ></VideoDescription>
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideo currentId={id} tags={tags}></RelatedVideo>
      </div>
    );
  }
  if (!isLoading && !isError && !video.id) content = <div>No video found!</div>;
  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
      </section>
    </>
  );
};

export default Video;
