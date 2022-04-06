import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

const Product = ({product}) => {
  return (
    <div>
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                
                <Card.Text as="div">
                    {/* <div className='my-3'>
                        {product.rating} from {product.numReviews} reviews
                    </div> */}
                    <Rating value={product.rating}
                    text={`${product.numReviews} reviews`}
                    />
                </Card.Text>

                <Card.Text as="h3">₹{Math.round(product.price *76)}</Card.Text>

            </Card.Body>
        </Card>
    </div>
  )
}

export default Product