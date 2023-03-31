const pool = require('../../db/pool.js');

export default function getMyActivities(req, res)  {

//  QUERY:
// SELECT * FROM activities INNER JOIN reviews on activities.user_id = reviews.user_id WHERE activities.user_id = ${req.user_id}

  return new Promise((resolve, reject) => {
    console.log('Here it is hi')
    pool.query('SELECT * FROM completed c \
INNER JOIN activities ON c.activity_id = activities.activity_id \
WHERE c.user_id=$1', [req.body.user_id], (err, res) => {
      if (err) {
        console.log(err);
        res.status(200).send(err);
        reject(err);
      } else {
        console.log(res.rows);
        res.status(200).send(res.rows);
        resolve(res.rows);
      }
    })
  })

}