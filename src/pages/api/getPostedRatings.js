const pool = require('../../db/pool.js');

const getPostedRatings = async (req, res) => {
    console.log(req.body);
   const activitiesQuery = `SELECT COUNT(review_id) AS count, SUM(rating) AS total WHERE activity_id = ${req.body}`;

    pool.query(activitiesQuery, (error, results) => {
        if (error) {
            console.log('Query Failed:', error);
        }
        return res.status(200).send(results);
    })
}

export default getPostedRatings;