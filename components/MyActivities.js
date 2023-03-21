import activities from '../sample-data/sample-activities.js';
import MyActivityReview from './MyActivityReview.js';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyActivities = () => {

  const [show, setShow] = useState(false);
  const [ reviewBody, setReviewBody ] = useState(null);
  const [ reviewTitle, setReviewTitle ] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (body, place) => {
    setShow(true);
    setReviewBody(body);
    setReviewTitle(place);
  }

  let [allAct, setallAct] = useState([]);
  let [rendered, setRendered] = useState([]);

  var showMore = () => {
      let al = allAct.length;
      let rl = rendered.length;
      if (al - rl <= 4) {
          setRendered(allAct);
      } else {
          setRendered([
              ...rendered,
              allAct[rl],
              allAct[rl+1],
              allAct[rl+2],
              allAct[rl+3]
          ]);
      }
  }

  var collapse = () => {
      setRendered([
          allAct[0],
          allAct[1],
          allAct[2],
          allAct[3]
      ]);
  }

  useEffect(() => {
      setallAct(activities);
      if (activities.length > 4) {
          setRendered([
              activities[0],
              activities[1],
              activities[2],
              activities[3]
          ]);
      } else {
          setRendered(activities);
      }
  }, [activities])

  return (
      <div className="list-group" style={{backgroundColor: "#467850", width: "20rem"}}>
          <h3 style={{textAlign: "center", color: "white"}}>My Activities</h3>
          {rendered.map((act, key) => {
              return (
                  <div
                      className="list-group-item list-group-item-action active"
                      aria-current="true"
                      key={key}
                      style={{backgroundColor: "#69B578", color: "black", borderColor: "#467850"}}
                  >
                      <div>
                          <h5
                              className="mb-1"
                              style={{display: "inline"}}
                          >{act.place}</h5>

                          <h6
                              style={{display: "inline", float: "right", fontWeight: "bold"}}
                          >{act.rating}</h6>
                      </div>
                      <Button variant="primary" style={{backgroundColor: "green"}} onClick={() => handleShow(act.review, act.place)}>
                        See Review
                      </Button>
                  </div>
              );
          })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{reviewTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{reviewBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


          <div style={{width: "100%", textAlign: "center"}}>
              {rendered.length < allAct.length ?
                  <button
                      style={{
                          backgroundColor: "#467850",
                          border: "none",
                          float: "left",
                          marginLeft: "1rem"
                      }}
                      onClick={showMore}
                  >Show More</button>
              : null}
              {rendered.length > 4 ?
                  <button
                      style={{
                          backgroundColor: "#467850",
                          border: "none",
                          float: "right",
                          marginRight: "1rem"
                      }}
                      onClick={collapse}
                  >Collapse</button>
              : null}
          </div>
      </div>
  );

}

export default MyActivities;