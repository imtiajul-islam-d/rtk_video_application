import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected } from "../../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);
  console.log(tags);
  return (
    <>
      <div
        onClick={() => dispatch(tagSelected(tag?.title))}
        className={` px-4 py-1 rounded-full cursor-pointer ${
          tags.includes(tag?.title)
            ? "bg-blue-600 text-white"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        {tag?.title}
      </div>
    </>
  );
};

export default Tag;
