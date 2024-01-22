import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/Slices/CardSlice';

const Cart = () => {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
         dispatch(remove(productId))
    }

    const getWords = (title) => {
        const words = title.split(' ');
        return words.slice(0, 2).join(' ');
    };

    return (
        <div className='container' style={containerStyle}>
            <h1>Cart Items</h1>
            {products.map((product) => (
                <Card style={{ width: '50rem', marginTop: '40px', height: '10rem' }}>
                    <Card.Img src={product.image} style={{width: '100px', marginTop: "20px", marginLeft: '20px'}} alt="Card image" />
                    <Card.Body className="d-flex flex-row align-items-center" style={{marginLeft: '200px', marginTop: '-60px'}}>
                        <Card.Text className='mx-4'>{getWords(product.title)}</Card.Text>
                        <Card.Text className='mx-4'>${product.price}</Card.Text>
                        <Button className='mx-5' style={{backgroundColor: 'red'}} onClick={() => handleRemove(product.id)}>
                            Remove
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Cart
