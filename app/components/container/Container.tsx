"use client";
import React from "react";
import Filter from "./Filter";
import Item from "./Item";
import ResponsiveDrawer from "./FilterSearchDrawer";

type Props = {};

const Container = (props: Props) => {
  return (
    <div className="mb-[200px]">
      <div className="md:hidden">
        <ResponsiveDrawer />
      </div>
      {/* <div className="flex">
        <div className="md:w-[250px] border-l-[0.5px] border-r-[0.5px] w-0 max-md:invisible">
          <Filter />
        </div>
        <div className="mx-auto px-auto md:px-4">
          <Item />
        </div>
      </div> */}
    </div>
  );
};

export default Container;
