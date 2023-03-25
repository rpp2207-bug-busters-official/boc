import {Modal, Button, Form} from 'react-bootstrap';
import React, {useState} from "react";

export default function Filters2({filters, setFilters, onCloseClick}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function passState(array1, array2,func){
    // console.log("array1 in passState",array1)
    setFilters({filters:{array1,array2}}, func);
  }

  var handleSubmit=(e)=>{
      e.preventDefault();
      var arrayO = [];
      var arrayC = [];
      var checkboxesO = document.querySelectorAll('input[name=operator]:checked')
      var checkboxesC = document.querySelectorAll('input[name=connector]:checked')
      for (var i = 0; i < checkboxesO.length; i++) {
        arrayO.push(checkboxesO[i].value);
      }
      for (var i = 0; i < checkboxesC.length; i++) {
        arrayC.push(checkboxesC[i].value);
      }
    //  alert(arrayC);
      setFilters({
        operators:arrayO,
        connections:arrayC
      });
      onCloseClick();

    //  console.log(arrayO);
    //   passState(arrayO, arrayC,onCloseClick());

  };



return (
    <>
      <Button variant="primary" className="btn btn-success" onClick={handleShow}>
        Set Filters
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <Form onSubmit={(e)=>{

          handleSubmit(e);

        }}> */}
           <Form>

        <Form.Group className="form-outline mb-4" controlId="operators">
       <Form.Label>Operators</Form.Label>
<br />
<input type="checkbox" name="operator" value="Tesla" />
<label>Tesla</label><br />
<input type="checkbox" name="operator" value="ChargePoint" />
<label>ChargePoint</label><br />
<input type="checkbox" name="operator" value="Blink" />
<label>Blink</label><br />
<input type="checkbox" name="operator" value="Electrify America" />
<label>Electrify America</label><br />

    </Form.Group>

    <Form.Group className="form-outline mb-4" controlId="connectors">
       <Form.Label>Connectors</Form.Label>
<br />
<input type="checkbox" name="connector" value="CCS" />
<label>CCS</label><br />
<input type="checkbox" name="connector" value="CHAdeMO" />
<label>CHAdeMO</label><br />
<input type="checkbox" name="connector" value="Tesla" />
<label>Tesla</label><br />
<input type="checkbox" name="connector" value="Type 1" />
<label>Type 1</label><br />
<input type="checkbox" name="connector" value="Type 2" />
<label>Type 2</label><br />

    </Form.Group>

{/* <button type="submit" className="btn btn-success" >Save</button> */}
<Button className="btn btn-success" variant="primary" onClick={(e)=>{handleSubmit(e);}}>
            Save Changes
          </Button>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e)=>{handleSubmit(e);handleClose();}}>
            Apply
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
// render(<Filters2 />);