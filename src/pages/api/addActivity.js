const pool = require('../../db/pool.js');

const postActivities = async (req, res) => {
  //add phone number

  await pool.query(`INSERT INTO activities (zip, name, address, user_id, city, state, latitude, longitude) VALUES
  ('${req.body.ZipCode}', '${req.body.ActivityName}', '${req.body.address}', '${req.body.userId}', '${req.body.City}',
  '${req.body.State}', ${req.body.latitude}, ${req.body.longitude} )`
  , (error, results) => {
    if (error) {
      throw error
    }
    return res.status(201).send()
 }
  )

//if I want to check table
  // await pool.query('SELECT * FROM activities')
  // .then((response) =>{
  //  console.log(response, "response from queryyy")

  //  })

//if I want to delete from table
  //  await pool.query(`DELETE FROM activities WHERE "address" = '10 misty meadow'`)
  // .then((response) =>{
  //  console.log(response, "response from queryyy")

  //  })

}


export default postActivities;