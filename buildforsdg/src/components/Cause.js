import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';
import {Data} from "./Data";

class Cause extends Component {
    render() {
        return (
            <div className="row">
                {
                     Data.map(item=>
                    <Card className="col ma2 col-sm-3 " style={{ width: '8rem' }} key={item.id}>
                   <Card.Img variant="top" src={item.imageSrc} />
                    <Card.Body>
                    <Card.Title>₦ 0 Raised / Goal: unlimited</Card.Title>
                    <Card.Text>{item.category}</Card.Text>
                    <Button variant="warning">DONATION</Button>
                </Card.Body>
             </Card>
              )}
            </div>
        )
    }
}
export default Cause;