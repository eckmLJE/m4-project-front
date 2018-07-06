import React from "react";

const VenueList = (props) => {
  return (
    <div>
      <ul>
        <li onClick={() => props.fetchConcerts("theAnthem")}>The Anthem</li>
        <li onClick={() => props.fetchConcerts("blackCat")}>Black Cat</li>
        <li onClick={() => props.fetchConcerts("echoStage")}>EchoStage</li>
        <li onClick={() => props.fetchConcerts("nineThirtyClub")}>9:30 CLUB</li>
        <li onClick={() => props.fetchConcerts("rockAndRollHotel")}>Rock and Roll Hotel</li>
      </ul>
    </div>
  );
};

export default VenueList;
