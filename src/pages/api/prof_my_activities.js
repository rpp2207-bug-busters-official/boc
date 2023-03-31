const pool = require('../../db/pool.js');

const getMyActivities = (req, res) => {


let test = "SELECT * FROM activities FULL JOIN reviews ON activities.user_id = reviews.user_id WHERE activities.user_id = '" + 'jaCqoxgk26bc6VvrnHsBr8L2dAr1' + "';"

// WORKING:

    // "SELECT * FROM activities WHERE user_id = '" + 'jaCqoxgk26bc6VvrnHsBr8L2dAr1' + "';"

    // "SELECT * FROM activities FULL JOIN reviews ON activities.user_id = reviews.user_id WHERE activities.user_id = '" + 'jaCqoxgk26bc6VvrnHsBr8L2dAr1' + "';"


  return new Promise((resolve, reject) => {
    pool.query(test, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.rows);
      }
      resolve(res);
    })
  })

}

getMyActivities();

// export default getMyActivities;

