export default function Review (props) {
  return (
    <div>
      <p>{props.data.rating}</p>
      <h6>{props.data.title}</h6>
      <p>{props.data.comment}</p>
      <div>
        <p>by {props.data.username},  {new Date(props.data.date).toDateString()}  |  Helpful? ({props.data.helpfulness})  |  Report Review</p>
      </div>
    </div>
  )
}