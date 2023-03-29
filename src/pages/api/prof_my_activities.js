const pool = require('../../db/pool.js');

const getMyActivities = (req, res) => {

//  QUERY:
// SELECT * FROM activities INNER JOIN reviews on activities.user_id = reviews.user_id WHERE activities.user_id = ${req.user_id}


// user_id: jaCqoxgk26bc6VvrnHsBr8L2dAr1


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

