const pool = require('../../db/pool.js');

const getNearbyActivities = async (req, res) => {
  // Query:
  const activitiesQuery = `SELECT d.*
    FROM (
      SELECT a.activity_id,
             a.name,
             a.address,
             a.city,
             a.state,
             a.zip,
             a.latitude, a.longitude,
             p.radius,
             p.distance_unit
                      * DEGREES(ACOS(LEAST(1.0, COS(RADIANS(p.latpoint))
                      * COS(RADIANS(a.latitude))
                      * COS(RADIANS(p.longpoint - a.longitude))
                      + SIN(RADIANS(p.latpoint))
                      * SIN(RADIANS(a.latitude))))) AS distance
       FROM activities AS a
       JOIN (
             SELECT  40.018800  AS latpoint,  -105.278180 AS longpoint,
                     1 AS radius,      111.045 AS distance_unit
         ) AS p ON 1=1
       WHERE a.latitude
          BETWEEN p.latpoint  - (p.radius / p.distance_unit)
              AND p.latpoint  + (p.radius / p.distance_unit)
         AND a.longitude
          BETWEEN p.longpoint - (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
              AND p.longpoint + (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
      ) AS d
      WHERE distance <= radius
      ORDER BY distance`;

    pool.query(activitiesQuery, (error, results) => {
        if (error) {
          console.log('Query Failed:', error);
        }
        return res.status(200).send(results);
      })
}

export default getNearbyActivities;