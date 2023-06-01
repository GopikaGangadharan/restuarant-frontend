import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestuarantCard from '../RestuarantCard'
import { base_url } from '../../baseUrl'
import { RestuarantListAction } from '../../Actions/allrestuarantAction'
import { useDispatch, useSelector } from 'react-redux'




function Allrestuarant() {

  // to dispatch 
  const dispatch = useDispatch()

  // state to hold all restuarent
  const [allItems,setallItems] = useState([])

  // back en url
    //code for api call
    const fetchData = async()=>{
   const response = await axios.get(`${base_url}/restaurants`)
   setallItems(response.data)
    }
    // console.log(allItems);


    // select updated state from store
    const {allrestuarants} = useSelector(state=>state.allrestuarantReducer)
    console.log(allrestuarants);


    useEffect(()=>{
        // fetchData()
        dispatch(RestuarantListAction())
        
    },[])
  return (
    <Row>
      {
        allrestuarants.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
         <RestuarantCard restuarant={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default Allrestuarant