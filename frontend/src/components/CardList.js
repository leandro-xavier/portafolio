import React from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import './cardlist.css'

export  const CardList = () => {

const image = 'img/instagram.jpg'

    return (
        <div className="card-list" >
            <Card style={{ width: '18rem' }} className="card-list">
                <Card.Text>Instagram clone</Card.Text>
                <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Button variant="secondary">Ir a Proyecto</Button>
                    </Card.Body>
            </Card>
        </div>
    );
}
