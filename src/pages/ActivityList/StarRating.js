import {React, useState} from 'react';
import {AiFillStar} from 'react-icons/ai';

export default function StarRating (props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
            <AiFillStar
            color={index <= (hover || rating) ? "gold" : "grey"}
            size="36"
            id="rating-star"
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}/>
        );
      })}
    </div>
  );
}