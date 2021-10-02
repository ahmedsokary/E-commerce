import React from "react";

function Box1(promp) {
  return (
    <div className="note">
        <h1>{promp.name}</h1>
        <img src={promp.image} alt="avatar_img" />
    </div>
  );
}

export default Box1;
