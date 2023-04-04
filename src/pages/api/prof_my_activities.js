const pool = require('../../db/pool.js');

const getMyActivities = (req, res) => {

  let test =
`SELECT
    a.activity_id,
    a.name,
    (
        SELECT
            coalesce(json_agg(json_build_object('comment', reviews.comment, 'date', reviews.date, 'name', reviews.activity_name)), '[]') AS reviews
        FROM
            reviews
        WHERE
            reviews.activity_id = a.activity_id)
FROM
    activities a where a.user_id = 'jaCqoxgk26bc6VvrnHsBr8L2dAr1'`;

  return new Promise((resolve, reject) => {
    pool.query(test, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(result);
      // console.log(result.rows);
      res.status(200).json(result);
      resolve(result);
    })
  })

}


export default getMyActivities;

