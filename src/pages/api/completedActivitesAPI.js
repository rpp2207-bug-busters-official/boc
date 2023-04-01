const pool = require('../../db/pool.js');

export default function getMyActivities(req, res)  {

//  QUERY:
// SELECT * FROM activities INNER JOIN reviews on activities.user_id = reviews.user_id WHERE activities.user_id = ${req.user_id}
  return new Promise((resolve, reject) => {
    // c.activity_name as place, c.address, c.city, a.zip, a.name, a.state, a.latitude, a.longitude
    let query = 'SELECT r.rating, r.comment as review, r.helpfulness, r.date, c.activity_name as place, c.address, c.city, a.zip, a.name, a.state, a.latitude, a.longitude \
FROM completed c \
INNER JOIN activities a ON c.activity_id = a.activity_id \
INNER JOIN reviews r ON r.activity_id = c.activity_id \
WHERE c.user_id=$1 and r.user_id = $1';
    pool.query(query, [req.body], (err, response) => {
      if (err) {
        res.status(200).send(err);
        reject(err);
      } else {
        res.status(200).send(response.rows);
        resolve(response.rows);
      }
    })
  })

}