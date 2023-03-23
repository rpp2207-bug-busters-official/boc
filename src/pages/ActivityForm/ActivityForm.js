import React, {useState} from 'react';
import { Button, Modal} from 'react-bootstrap';

export default  function ActivityForm(props) {

  const [modalShow, setModalShow] = React.useState(false);

  const nameRef = React.useRef('');
  const addressRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const cityRef = React.useRef(null);
  const zipCodeRef = React.useRef(null);
  const stateRef = React.useRef(null);
  const countryRef = React.useRef(null);
  const longitudeRef = React.useRef(null);
  const latitudeRef = React.useRef(null);





  const creatNewActivity = async () => {
    console.log(nameRef.current.value, "hshshs" )

    var newEntry = {
      longitude: null,
      latitude: null,
      ActivityName: nameRef.current.value,
      address: addressRef.current.value,
      City: cityRef.current.value,
      ZipCode: zipCodeRef.current.value,
      State: stateRef.current.value,
      Country: countryRef.current.value,
      Phone: phoneRef.current.value,
    }

    console.log(process.env.NEXT_PUBLIC_OPTIONSTACK_KEY, "keyyyy")
    fetch(`http://api.positionstack.com/v1/forward?access_key=${process.env.NEXT_PUBLIC_OPTIONSTACK_KEY}&query=96MaderaCtDanville,CA`)
    .then(response => response.json())
    .then(response => {console.log(response.data[0].longitude, response.data[0].latitude, "hiii")

          // newEntry.longitude = response.data[0].longitude
          // newEntry.latitude = response.data[0].latitude ;
          // console.log(newEntry, "innnnn")

  })
      .catch(err => console.error(err))
      console.log(newEntry, "newentryyyy")
      //insertOne new entry
      return (
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Activity Created!
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      )
    };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
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
  <div className="form-outline mb-4">
    <input ref={countryRef} type="text" id="form6Example6" className="form-control"/>
    <label className="form-label" htmlFor="form6Example4" >Country</label>
  </div>

  <div className="form-outline mb-4">
    <input ref={phoneRef} type="number" id="form6Example7" className="form-control"/>
    <label className="form-label" htmlFor="form6Example6" >Phone Number</label>
  </div>



  <button className="btn btn-success" onClick={creatNewActivity}>Create!</button>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
      <>
        <Button variant="primary"  className="btn btn-success" onClick={() => setModalShow(true)}>
          Add Activity Here!
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}