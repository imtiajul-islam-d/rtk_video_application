import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const Main = () => {
  return (
    <>
      <Navigation></Navigation>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Main;
