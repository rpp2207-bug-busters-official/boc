import { useState, useEffect, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import chargeTime from '../helper_functions/chargeTime.js';
import Cookies from '../src/pages/Login/setCookie.js';
import localFont from 'next/font/local';
// import {Button} from 'react-bootstrap';

const myFont = localFont({src:'../src/styles/Inter/Inter-VariableFont_slnt,wght.ttf'})

const Timer = () => {

  const [ time, setTime ] = useState(0);
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

  const [ select, selected ] = useState(false);
  const [ button, hideButton ] = useState(false);
  const [ stop, setStop ] = useState(false);


  const startCharge = () => {

    selected(!select);

    if (email) {
      inputEmail(!email);
    }


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
    hideButton(!button);

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
        setTime(seconds);
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
    <div
      // style={{position: "absolute", top: "6rem", right: "3rem"}}
    >

      {
        select ?
          <Modal show={select} >
          <Modal.Header closeButton onClick={() => { selected(!select); email ? inputEmail(!email) : null}}>
            <Modal.Title>Select Charging Type:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select data-testid="charge-type-select" onChange={selectOption} aria-label="Default select example" value={chargeType}>
              <option value="default">30 min charge</option>
              <option value="custom">Custom Charge</option>
            </Form.Select>
              {
                chargeType === "custom" ?

                <Form onChange={updateChargeData} data-testid="charging-form">
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

              <Form.Check data-testid="input-email-form" label={"notify me when done charging"} onClick={() => inputEmail(!email)}/>

              {email ?

                <Form data-testid="add-email-for-notify">
                  <Form.Group className="mb-3" controlId="formBasicEmail" onChange={getEmail}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We&#39;ll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
                :
                null
              }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => { selected(!select); email ? inputEmail(!email) : null}}>
              Close
            </Button>
            <Button variant="primary" className="btn btn-success" onClick={startCharge} >
              Start Charge
            </Button>
          </Modal.Footer>
          </Modal>
        :
        running ?
        <div style={{width: "15rem"}}>

          <div data-testid="timer-running">
            <h4>Charge Time: {clock}</h4>
            <Button style={{position: "relative", left: "5rem"}}onClick={() => {setStop(!stop); setRunning(!running); setTime(0); setClock("");}}>End Charge</Button>
          </div>


        </div>

        :
        <button id="timer-btn" className={`${myFont.className}`} onClick={() => selected(!select)}>Start A Charge</button>
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

        null

      }

    </div>
  )
}

export default Timer;