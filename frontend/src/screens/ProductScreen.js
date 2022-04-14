import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductsDetails } from '../actions/productActions'

const ProductScreen = ({match}) => {
    
  const dispatch = useDispatch()
  //const product = products.find((p) => p._id === match.params.id)
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

    useEffect(() =>{
        dispatch(listProductsDetails(match.params.id))
    },[dispatch,match])

    
  return (
    <>
    <Link className='btn btn-light my3' to='/'>
        Go Back
    </Link>
    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
        <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='finish'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ₹{Math.round(product.price *76)}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                                <Col>
                                <strong>₹{Math.round(product.price *76)}</strong>
                                </Col>
                        </Row>
                    </ListGroup.Item>
                
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In stock' : 'Out of Stock' }</strong>
                                </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button 
                        className='btn-block' 
                        type='button'
                        disabled={product.countInStock === 0}>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    )}
            
          </>
  //loading close here
  )
  
}

export default ProductScreen