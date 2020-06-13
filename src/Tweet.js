import React from "react";

function Tweet({ name, tweet, likes }) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{tweet}</p>
      <h4>Number of likes: {likes}</h4>
    </div>
  );
}

export default Tweet;
