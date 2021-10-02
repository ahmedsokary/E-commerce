import React from "react";
import ReactStar from "react-rating-stars-component"
function Box2(promp) {
  return (
<div className="note2">
      <img src={promp.image} alt="avatar_img" />
      <p>{promp.name}</p>

     {[...Array(promp.rating)].map((x, i) =>
     <span style={{color:"#ffc107"}} class="fa fa-star "></span>
      )}

      <p>${promp.price}</p>
</div>
  );
}

export default Box2;
