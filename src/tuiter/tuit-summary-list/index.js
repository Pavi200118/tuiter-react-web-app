import React from "react";
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = ({ tuits }) => {
  return (
    <ul className="list-group">
      {tuits &&
        tuits.map((tuit) => (
          <TuitSummaryItem key={tuit._id} tuit={tuit} />
        ))}
    </ul>
  );
};

export default TuitSummaryList;
