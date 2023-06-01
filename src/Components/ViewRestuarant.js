import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../baseUrl';
import axios from 'axios';
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import RestOp from './RestOp';
import Restreview from './Restreview';




function ViewRestuarant() {
  // get path parameter from route associated with a component
  const{id} = useParams()
  // console.log(id);
  // api call to get aparticular restuarant details
  const [restuarantDetail,setRestuarantDetail] =useState({})
  const fetchdata = async()=>{
  const {data} = await axios.get(`${base_url}/restaurants/${id}`)
  setRestuarantDetail(data)
  }
  console.log(restuarantDetail);
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <>
    
    {
      restuarantDetail&&
      <Row className='p-5'>
       <Col sm={12} md={3}>
        {/* {image} */}
        <Image className='rounded border p-1' src={`${restuarantDetail?.photograph}`} alt="" fluid />
       </Col>
       <Col md={1}> </Col>
       <Col md={8}>
       <h2>{restuarantDetail?.name}</h2>
        <h6>{restuarantDetail?.neighborhood}</h6>
        <ListGroup>
        <ListGroup.Item> <h5>Cusine: {restuarantDetail?.cuisine_type}</h5> </ListGroup.Item>
        <ListGroup.Item> <RestOp op={restuarantDetail?.operating_hours}/> </ListGroup.Item>
        <ListGroup.Item> <Restreview reviews={restuarantDetail?.reviews} /> </ListGroup.Item>
       
        </ListGroup>
       </Col>
    </Row>
    }
    </>
  )
}

export default ViewRestuarant