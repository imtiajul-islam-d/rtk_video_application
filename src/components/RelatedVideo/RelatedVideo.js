import React from "react";
import RelatedSingleVideo from "../RelatedSignleVideo/RelatedSingleVideo";

const RelatedVideo = () => {
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
