import React from 'react';
import {Row,Col,Form} from 'react-bootstrap'
export default function Contact() {
    return (
        <div className="App">
            <header className="App-header">
                Contact Us
            </header>
            <Row>
            <Col>
            <Form className="container">
            <Form.Group controlId="formGroupEmail">
                
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                
                <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
               
                <Form.Control type="tel" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
               
                <Form.Control as="textarea" rows="4" placeholder="Type your message here..." />
            </Form.Group>
            </Form>
            </Col>
            <Col>
                <div className="Kontak">
                    <h3>OrangArap</h3>
                    <p>Jalan Tebet Barat Raya Dalam No.24 Tebet barat Jakarta Selatan 16420</p>
                    <p>(021)-7846581</p>
                    <p>makananenak@OrangArap.co.id</p>
                </div>
            </Col>
            </Row>
        </div>
    )
}