import React from 'react';

function IdCard(props) {
  let year = props.birth.getFullYear();
  let month = props.birth.getMonth();
  let day = props.birth.getDay();
  return (
    <div className="IdCard">

      <div className="lastName"> {props.lastName} </div> 
      <div className="firstName"> {props.firstName} </div>
      <div className="gender"> {props.gender} </div>
      <div className="height"> {props.height} </div>
      <div className="birth"> {month}/{day}/{year} </div>
      <img src={props.picture} alt={props.lastName}></img> 

    </div>
  );
}

export default IdCard;
