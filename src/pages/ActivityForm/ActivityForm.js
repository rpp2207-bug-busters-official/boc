import React, {useState} from 'react';
import { Button, Modal, closeButton} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import cookie from '../../../helper_functions/setCookie.js';


export default  function ActivityForm(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [alertShow, setAlertShow] = React.useState(false);
  const [userId, setUserId] = React.useState(false)

  function checkSignedIn(props) {
    var status = cookie.getCookie()
    if(!status) {
      setAlertShow(true)
    }
    else {
      setUserId(status)
      setModalShow(true)
    }
  }

  return (
      <>
        <Button variant="primary"  className="btn btn-success" onClick={checkSignedIn}>
          Add Activity Here!
        </Button>
        <NotLoggedInModal
          show={alertShow}
          onHide={() => setAlertShow(false)}
        />


  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => {setModalShow(false)}}
          user= {userId}
        />

      </>
    )
}



function CreatedModal (props) {
  return (
    <Modal
     show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Activity Successfully Created!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      Congratulations, your new activity has been added!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

}



function WrongAddress (props) {
  return (
    <div>
    <Alert   show={props.show} key='danger' variant='danger'>
          Incorrect address, Please enter a valid address!
        </Alert>
        </div>

  );

}



const postActivities = async (newEntry) => {

  var status = await fetch('/api/addActivity', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEntry)
    })
  .then((res) => {
    return res.status
  })
  .catch((err) => {
      console.log(err, "rrrr");
      return err
  })

  return status

}

function NotLoggedInModal(props) {
  return (
    <Modal
     show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Unable To Add New Activity
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      You are not signed in. Please sign in or register to proceed!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

}

function MyVerticallyCenteredModal(props) {
  const nameRef = React.useRef('');
  const addressRef = React.useRef(null);
  const cityRef = React.useRef(null);
  const zipCodeRef = React.useRef(null);
  const stateRef = React.useRef(null);
  const longitudeRef = React.useRef(null);
  const latitudeRef = React.useRef(null);
  const userId = props.user;
  const [createdAlertShow, setCreatedAlertShow] = React.useState(false);
  const [WrongAddressShow, setWrongAddressShow] = React.useState(false);

  const creatNewActivity = async (e) => {
    e.preventDefault();
    var newEntry = {}
    var prequery = addressRef.current.value + ', ' + cityRef.current.value + ' '+ stateRef.current.value
    var query = prequery.replaceAll(' ', '%20')
    console.log(query, "queryyyy")
    await fetch(`http://api.positionstack.com/v1/forward?access_key=${process.env.NEXT_PUBLIC_OPTIONSTACK_KEY}&query=${query}&country=US&limit=1`)
    .then(response =>{return response.json()})
    .then(response => {console.log(response.data, "hiii")
    if(response.data.length === 0 ) {
      setWrongAddressShow(true)
    }
    if(response.data.length > 0 ) {
      setWrongAddressShow(false)
      newEntry['longitude'] = response.data[0].longitude;
      newEntry['latitude'] = response.data[0].latitude;
    }
  })
  .then(response => {
      newEntry.ActivityName = nameRef.current.value,
      newEntry.address = addressRef.current.value,
      newEntry.City = cityRef.current.value,
      newEntry.ZipCode = zipCodeRef.current.value,
      newEntry.State = stateRef.current.value,
      newEntry.userId = userId;

      return newEntry
  })
  .then(newEntry => {
    return postActivities(newEntry)
  })

  .then((status) => {

    if(status === 201){
      props.onHide()
      setCreatedAlertShow(true)
    } else {
      props.onHide()

    }
  })
  .catch(err => console.error(err));
    };

    const closing = () => {
      props.onHide();
      setWrongAddressShow(false);
    }

  return (<div>
    <CreatedModal
        show={createdAlertShow}
        onHide={() => setCreatedAlertShow(false)}
      />
    <Modal
     //{...props}
     show={props.show}

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          New Activity Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
<form>
<div className="row mb-4">
  <div className="col">
    <div className="form-outline">
      <input  ref={nameRef} type="text" id="form6Example1" className="form-control" />
      <label className="form-label" htmlFor="form6Example1">Activity Name</label>
    </div>
  </div>
</div>
<div className="form-outline mb-4">
  <input ref={addressRef} type="text" id="form6Example2" className="form-control"/>
  <label className="form-label" htmlFor="form6Example3">Address</label>
</div>
<div className="form-outline mb-4">
  <input ref={cityRef} type="text" id="form6Example3" className="form-control"/>
  <label className="form-label" htmlFor="form6Example4">City</label>
</div>
<div className="form-outline mb-4">
  <input ref={zipCodeRef} type="text" id="form6Example4" className="form-control"/>
  <label className="form-label" htmlFor="form6Example4">Zip Code</label>
</div>
<div className="form-outline mb-4">
  <input ref={stateRef} type="text" id="form6Example5" className="form-control"/>
  <label className="form-label" htmlFor="form6Example4">State</label>
</div>


<WrongAddress
        show={WrongAddressShow}
        onHide={() => setWrongAddressShow(false)}
      />
<button type='submit' className="btn btn-success" onClick={creatNewActivity}>Create!</button>
</form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closing}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}