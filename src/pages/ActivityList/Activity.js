import {AiFillStar} from 'react-icons/ai';
import {useState} from 'react';
import Reviews from '../Reviews/Reviews.js';

export default function Activity(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      //Remove the matched extension code
      //Change this to format for any country code.
      let intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }

    return null;
  }

  var changeReviewOpened = () => {
    console.log('hi');
    setIsReviewOpen(!isReviewOpen);
  }

  var activityObj = props.action;
  return (
    <div className="activity-widget">
      {isFavorite ? <AiFillStar color="gold" size="36" onClick={() => setIsFavorite(!isFavorite)}/> : <AiFillStar color="white" size="36" onClick={() => setIsFavorite(!isFavorite)}/>}

      <div className="activity-body">
        <p>{activityObj.name}</p>
        <p>{activityObj.location.address1} {activityObj.location.city}, {activityObj.location.state} {activityObj.location.zip_code}</p>
        <p>{formatPhoneNumber(activityObj.phone)}</p>
      </div>

      <div>
        <p>Rating: {activityObj.rating}</p>
        <p onClick={() => {setIsReviewOpen(!isReviewOpen)}}>Show Reviews</p>
      </div>

      {/* {isReviewOpen ? <Reviews/> : null} */}
      <Reviews/>
    </div>
  );

}