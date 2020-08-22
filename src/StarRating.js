import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
