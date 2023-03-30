const pool = require('../../db/pool.js');

const postActivities = async (req, res) => {
  console.log("reqqqqq", req.body, "reqqq")
  //add phone number

  await pool.query(`INSERT INTO activities (zip, name, address, user_id, city, state, latitude, longitude) VALUES
  ('${req.body.ZipCode}', '${req.body.ActivityName}', '${req.body.address}', '${req.body.userId}', '${req.body.City}',
  '${req.body.State}', ${req.body.latitude}, ${req.body.longitude} )`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Added!`)
  })
  // await pool.query('SELECT * FROM activities')
  // .then((response) =>{
  //  console.log(response, "response from queryyy")

  //  })
  //  await pool.query(`DELETE FROM activities WHERE "address" = '10 misty meadow'`)
  // .then((response) =>{
  //  console.log(response, "response from queryyy")

  //  })

}


export default postActivities;