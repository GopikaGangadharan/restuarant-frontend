
import React, { useState } from 'react'
import { Button, ListGroup, Modal} from 'react-bootstrap';





function RestOp({op}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    console.log(op);
  return (
    <>
    <Button variant="dark" onClick={handleShow}>
      Click here to Launch Operating Hours
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Operating Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ListGroup>
      <ListGroup.Item>Monday : {op?.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {op?.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {op?.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {op?.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {op?.Sunday}</ListGroup.Item>

     
    </ListGroup>
      </Modal.Body>
        
    </Modal>
  </>
  )
}

export default RestOp