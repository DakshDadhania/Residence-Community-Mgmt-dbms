import React from "react";
import { Hypnosis } from "react-cssfx-loading";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#F5FEFD]">
      <Hypnosis color="rgb(11, 102, 106)" width="30px" height="30px" />
    </div>
  );
};

export default Loader;
