import React from "react";
import data from "./data";
import Slider from "./Slider";
export default function App() {
  return (
    <div className="">
      <h1 className="text-2xl text-center mt-12 font-semibold">
        <span className="text-red-500">/ </span>Reviews
      </h1>
      <Slider data={data} />
    </div>
  );
}
