import React from "react";

function TvShow(props) {
  return (
    <div>
      <br />
      <img src={props.show.image.medium}
       onClick={()=>{props.selectShow(props.show)}} alt="" />
    </div>
  );
}

export default TvShow;
