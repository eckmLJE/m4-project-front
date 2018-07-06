import React from "react";

const ConcertList = props => {
  return (
    <div>
      <ul className="concert-list">
        {props.concerts.map(concert => (
          <li
            className="concert-list-item"
            key={concert.id}
            onClick={() => props.setConcert(concert.id)}
          >
            {concert.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConcertList;
