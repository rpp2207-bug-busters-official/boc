const pool = require('../../db/pool.js');

const getMyActivities = (req, res) => {

//  QUERY:
// SELECT * FROM activities INNER JOIN reviews on activities.user_id = reviews.user_id WHERE activities.user_id = ${req.user_id}

  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM activities INNER JOIN reviews on activities.user_id = reviews.user_id', (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
      }
      resolve(res);
    })
  })

}

export default getMyActivities;

