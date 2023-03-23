import { useState, useEffect, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';

const Timer = () => {

  const [ minutes, setMinutes ]  = useState(0);
  const [ time, setTime ] = useState(0);
  const [ hours, setHours ] = useState(0);
  const [ clock, setClock ] = useState("");

  const [show, setShow] = useState(false);


  const startCharge = () => {

    timer(5);

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


  return (
    <div>
     {
      show ?

      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Your charge is done</Alert.Heading>
        <p>
          Your 30 minute charge time has been reached.
        </p>
      </Alert>
      :
      <div>
        <span>Timer: {clock}</span>
        <br></br>

      <button onClick={() => startCharge(5)} >Start Charge</button>
      </div>


      }

    </div>
  )
}

export default Timer;