import React from "react";
import { Rating } from "flowbite-react";
function Star() {
  return (
    <div>
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <Rating.Star filled={false} />
      </Rating>
    </div>
  );
}

export default Star;
