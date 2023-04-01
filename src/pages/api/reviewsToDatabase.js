const pool = require('../../db/pool.js');

var reviewsToDatabase = async(req, res) => {

  console.log(req);

  var test = `INSERT INTO reviews (activity_id, user_id, comment, helpfulness, reported, date, title, rating ) VALUES
  (2, 3, ${req.body.comment}, ${req.body.helpfulness}, ${req.body.reported}, ${req.body.date}, ${req.body.title}, ${req.body.rating})`;

  return new Promise((resolve, reject) => {
    pool.query(test, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res)
      }
      resolve(res);
    })
  })


}

reviewsToDatabase();