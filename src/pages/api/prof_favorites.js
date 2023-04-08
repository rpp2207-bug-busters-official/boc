const pool = require('../../db/pool.js');

// let query = "SELECT * FROM activities FULL JOIN favorites ON activities.user_id = favorites.user_id WHERE activities.user_id = '" + 'jaCqoxgk26bc6VvrnHsBr8L2dAr1' + "';";
let query = `SELECT * FROM favorites WHERE user_id = 'jaCqoxgk26bc6VvrnHsBr8L2dAr1'`;

const getFavorites = (req, res) => {

return new Promise((resolve, reject) => {
    pool.query(query, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      res.status(200).json(result);
      // console.log(result);
      resolve(result);
    })
  })
};

export default getFavorites;