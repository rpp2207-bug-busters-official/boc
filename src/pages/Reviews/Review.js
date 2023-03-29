import {React, useState} from 'react';
import {AiFillStar} from 'react-icons/ai';

export default function Review (props) {

  function StarRating (props) {

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
              <AiFillStar
              color={index <= props.rating ? "gold" : "grey"}
              size="36"
              id="rating-star"
              type="button"
              key={index}
              />
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <StarRating rating={props.data.rating}/>
      <h6>{props.data.title}</h6>
      <p>{props.data.comment}</p>
      <div>
        <p>by {props.data.username},  {new Date(props.data.date).toDateString()}  |  Helpful? Yes({props.data.helpfulness})  |  Report Review</p>
      </div>
    </div>
  )
}