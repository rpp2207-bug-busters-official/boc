const pool = require('../../db/pool.js');

const getNearbyActivities = (req, res) => {
  // Query:
  const activitiesQuery = `SELECT activity_id, name, address
    FROM (
      SELECT a.activity_id,
             a.name,
             a.address,
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
             SELECT  48.74894534343292  AS latpoint,  -122.4755859375 AS longpoint,
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
  return new Promise((res, rej) => {
    pool.query(activitiesQuery, (err, res) => {
      if (err) {
        console.log('Failed to get nearby activities', err);
      }
      else {
        console.log('retrieving data');
      }
    })
  })
  res.end(res);
}

export default getNearbyActivities;