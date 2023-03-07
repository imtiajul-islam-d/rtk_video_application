import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import Tags from "../../components/Tags/Tags";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

const Home = () => {
  return (
    <>
      {/* <!-- Tags --> */}
      <Tags></Tags>

      {/* <!-- Video Grid --> */}
      <VideoGrid></VideoGrid>

      {/* <!-- pagination--> */}
      <Pagination></Pagination>
    </>
  );
};

export default Home;
