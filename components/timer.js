import { useState, useEffect, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

const Timer = () => {

  const [ minutes, setMinutes ]  = useState(0);
  const [ time, setTime ] = useState(0);
  const [ hours, setHours ] = useState(0);
  const [ clock, setClock ] = useState("");

  const [ show, setShow ] = useState(false);

  const [ email, inputEmail ] = useState(false);

  const [ chargeType, setChargeType ] = useState("default");

  const [ running, setRunning ] = useState(false);


  const startCharge = () => {

    setRunning(!running);

    if (chargeType === "default") {
      timer(1800);
    } else {
      console.log('trying to run custom')
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
    // console.log(e)
    console.log(e.target.value)
    setChargeType(e.target.value)

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

      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
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

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Battery Capacity:</Form.Label>
          <Form.Control type="capacity" placeholder="3.7 kWh" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Current Charge %: </Form.Label>
          <Form.Control type="capacity" placeholder="50%" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Charge Power: </Form.Label>
          <Form.Control type="capacity" placeholder="4 kw" />
        </Form.Group>
      </Form>
      :
      null
    }


      <Form.Check label={"notify me when done charging"} onClick={() => inputEmail(!email)}/>

      {email ?

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
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