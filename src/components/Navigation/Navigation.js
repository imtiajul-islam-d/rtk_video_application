import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searched } from "../../features/filter/filterSlice";
import logo from "./../../assets/lws.svg";
import searchIcn from "./../../assets/search.svg";

const Navigation = () => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };
  console.log(input);
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            <img className="h-10" src={logo} alt="Learn with Sumit" />
          </Link>
          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            {/* <!-- search --> */}
            <form onSubmit={handleSearch}>
              <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                defaultValue={input}
                placeholder="Search"
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
            <img
              className="inline h-4 cursor-pointer"
              src={searchIcn}
              alt="Search"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
