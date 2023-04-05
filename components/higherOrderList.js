import activities from '../sample-data/sample-activities.js';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import fav from '../sample-data/sample-favorites.js';
import localFont from 'next/font/local';
import Cookie from '../src/pages/Login/setCookie.js';

const ExtraLightFont = localFont({src:'../src/styles/Barlow_Condensed/BarlowCondensed-ExtraLight.ttf'});

const HigherOrderList = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (reviewData) => {

    setReview(reviewData);
    setShow(true);

  }
  const [ reviewBody, setReviewBody ] = useState(null);
  const [ reviewTitle, setReviewTitle ] = useState(null);
  const [ reviews, setReview ] = useState([]);

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

  const renderData = (data) => {
    if (data.length > 4) {
        setRendered([
            data[0],
            data[1],
            data[2],
            data[3]
        ])
    } else {
        setRendered(data);
    }
  }


//  might make sense to make all the db queries when the user is first logged in with promise.all

//  this function will take in the userName so it can use that to make a query

  const getMyActivites = () => {

    const user_id = Cookie.getCookie()

    fetch('/api/prof_my_activities', {
        method: "POST",
        body: user_id
    })
    .then(data => data.json())
    .then((res) => {
        setallAct(res.rows);
        renderData(res.rows);
    })
    .catch((err) => {
        console.log(err);
    })

  }

  useEffect(() => {

    if (props.title === 'Favorites') {
        setallAct(fav);
        renderData(fav);
    } else if (props.title === 'Your Activities') {
        getMyActivites();
    } else if (props.title === 'Completed Activities') {
        setallAct(activities);
        renderData(activities);
    }
  }, [])

  return (
      <div
        className={`list-group`}
        style={props.mainStyles}>
          <h3 style={{ color: "white", fontSize: "1.7rem", margin: ".6rem", borderBottom: "1rem"}}>{props.title}</h3>
          {rendered.map((act, key) => {
              return (
                <props.Card key={key} act={act} handleShow={handleShow} setKey={key} ExtraLight={ExtraLightFont}/>
              );
          })}


          {
            reviews.length > 0 ?
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={{textAlign: "center"}}>Reviews</Modal.Title>
                </Modal.Header>
                {reviews.map(review => {
                    return (
                        <div key={review.rating} style={{display: "flex", justifyContent: "space-between"}}>
                            <Modal.Body style={{border: "1px solid black"}}>
                                <h5 style={{textAlign: "center"}}>{review.comment}</h5>
                                <p style={{textAlign: "center"}}>{review.date}</p>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <p>Rating: {review.rating}</p>
                                    <p>helpfulness: {review.helpfulness}</p>
                                </div>
                            </Modal.Body>
                        </div>
                    )
                })}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
        </Modal>
            :
            null
          }

          <div style={{width: "100%", textAlign: "center"}}>
              {rendered.length < allAct.length ?
                  <button
                      style={props.showStyles}
                      onClick={showMore}
                  >Show More</button>
              : null}
              {rendered.length > 4 ?
                  <button
                      style={props.colStyles}
                      onClick={collapse}
                  >Collapse</button>
              : null}
          </div>
      </div>
  );

}

export default HigherOrderList;