import Review from './Review.js';

export default function Reviews (props) {
  var reviews = [
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    },
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    },
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    },
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    }
  ]
  return (
    <div>
      {reviews.map(review => {
        <Review data={review}/>
      })}
    </div>
  );
}