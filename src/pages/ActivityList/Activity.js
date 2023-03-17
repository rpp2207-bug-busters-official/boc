import {AiFillStar} from 'react-icons/ai';
import {useState} from 'react';

export default function Activity(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  var activityObj = props.action;
  return (
    <div className="activity-widget">
      {isFavorite ? <AiFillStar color="gold" size="36" onClick={() => setIsFavorite(!isFavorite)}/> : <AiFillStar color="white" size="36" onClick={() => setIsFavorite(!isFavorite)}/>}

      <div className="activity-body">
        <p>{activityObj.name}</p>
        <p>{activityObj.location.address1} {activityObj.location.city}, {activityObj.location.state} {activityObj.location.zip_code}</p>
      </div>

      <div>
        <p>*Rating*</p>
        <p>Show Reviews</p>
      </div>
    </div>
  );

}