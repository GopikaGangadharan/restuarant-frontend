import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function RestuarantCard({restuarant}) {
    console.log(restuarant);
  return (
    <Link to={`/view/${restuarant.id}`} style={{textDecoration:'none',color:'white'}}>
        <Card className='m-4' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={restuarant.photograph} />
          <Card.Body>
            <Card.Title>{restuarant.name}</Card.Title>
            <Card.Text>
             <p>{restuarant.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>
    </Link>
  )
}

export default RestuarantCard