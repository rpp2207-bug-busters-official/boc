const pool = require('../../db/pool.js');

const getMyActivities = (req, res) => {

  let body = JSON.parse(req.body);
  console.log('body', body.userId)

  let test =
  `SELECT
    a.activity_id,
    a.name,
    a.city,
    a.address,
    a.state,
    (
        SELECT
            coalesce(json_agg(json_build_object('comment', reviews.comment, 'date', reviews.date, 'helpfulness', reviews.helpfulness, 'title', reviews.title, 'rating', reviews.rating )), '[]') AS reviews
        FROM
            reviews
        WHERE
            reviews.activity_id = a.activity_id)
  FROM
    activities a where a.user_id = '${body.userId}'`;




  return new Promise((resolve, reject) => {
    pool.query(test, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      res.status(200).json(result);
      resolve(result);
    })
  })

}


export default getMyActivities;

