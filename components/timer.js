import { useState, useEffect, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import chargeTime from '../helper_functions/chargeTime.js';

const Timer = () => {

  const [ minutes, setMinutes ]  = useState(0);
  const [ time, setTime ] = useState(0);
  const [ hours, setHours ] = useState(0);
  const [ clock, setClock ] = useState("");
  const [ show, setShow ] = useState(false);
  const [ email, inputEmail ] = useState(false);
  const [ chargeType, setChargeType ] = useState("default");
  const [ running, setRunning ] = useState(false);
  const [ userEmail, setUserEmail ] = useState("");

  const [ batteryCapacity, setCapacity ] = useState(0);
  const [ currentCharge, setCharge ] = useState(0);
  const [ desiredCharge, setDesiredCharge ] = useState(0);
  const [ chargePower, setPower ] = useState(0);


  const startCharge = () => {

    let time = 1800;

    if (batteryCapacity && currentCharge && chargePower) {

      time = chargeTime({
        batteryCapacity: Number(batteryCapacity),
        currentPerecentage: Number(currentCharge),
        chargePower: Number(chargePower),
        desiredCharge: Number(desiredCharge)
      })
    }

    setRunning(!running);

    timer(time);

  }

  const updateChargeData = (e) => {

    if (e.target.name === "battery_cap") {
      setCapacity(e.target.value);
    } else if (e.target.name === "current_charge") {
      setCharge(e.target.value);
    } else if (e.target.name === "desired_charge") {
      setDesiredCharge(e.target.value)
    } else {
      setPower(e.target.value);
    }

  }


  const timer = (seconds) => {

    if (seconds >= 0) {

      setTimeout(() => {

        setClock(fancyTimeFormat(seconds));
        seconds = seconds - 1;
        timer(seconds);

      }, 1000)
    } else {

     setShow(!show)

      if (userEmail !== "") {

        fetch('/api/notifyCharge', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: userEmail}),
        })

      }

    }

  }

  const fancyTimeFormat = (duration) => {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  }

  const selectOption = (e) => {
    setChargeType(e.target.value)
  }

  const getEmail = (e) => {
    setUserEmail(e.target.value);
  }

  return (
    <div>
      <div style={{paddingBottom: "1rem"}}>Select charge type: </div>

    {
      running ?

      <div>
        <br></br>
        <span>Timer: {clock}</span>
        <br></br>
      </div>
      :
      null

    }

    {
      show ?

      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Your charge is done</Alert.Heading>
        <p>
          Your charge time has been reached.
        </p>
      </Alert>
      :

      <Form.Select onChange={selectOption} aria-label="Default select example" value={chargeType}>
        <option value="default">30 min charge</option>
        <option value="custom">Custom Charge</option>
      </Form.Select>


      }

    {
      chargeType === "custom" ?

      <Form onChange={updateChargeData}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Battery Capacity:</Form.Label>
          <Form.Control type="capacity" placeholder="3.7 kWh" name="battery_cap"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Charge Power: </Form.Label>
          <Form.Control type="capacity" placeholder="4 kw" name="charge_pow"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Current Charge %: </Form.Label>
          <Form.Control type="capacity" placeholder="50%" name="current_charge"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Desired Charge %: </Form.Label>
          <Form.Control type="capacity" placeholder="75%" name="desired_charge"/>
        </Form.Group>
      </Form>
      :
      null
    }


      <Form.Check label={"notify me when done charging"} onClick={() => inputEmail(!email)}/>

      {email ?

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" onChange={getEmail}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We &#39; ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
        :
        null
      }

      <button onClick={startCharge}>Start Charge</button>
    </div>
  )
}

export default Timer;