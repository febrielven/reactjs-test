import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CardItem from '../components/CardItem';
import SlideBanner from '../components/SlideBanner';

import { DataDashboard } from '../dummy/data';

export default function Dashboard() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className="mt-2 ml-4" style={textBlue}><i class="fas fa-th-large"></i><span className="ml-4">Dashboard</span></Col>
                    <Col md={12}>
                        <SlideBanner/>
                    </Col>
                    <Col md={12} className="my-4">
                        <Row>
                            <Col md={9}><h1 style={subTitle}>Informasi</h1></Col>
                            <Col md={3}>
                                <Form>
                                    <Form.Group controlId="boxSortir">
                                        <Form.Control as="select">
                                            <option>All Active Below</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>
                           <Row >
                                {DataDashboard.map((item, index) => (
                                     <Col md={4} className="my-2 text-center" key={index}>
                                    <CardItem
                                        point={item.total}
                                        text={item.nameItem}
                                    />
                                    </Col>
                                ))}
                           </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const textBlue = {
    color: '#0036A0' 
}

const subTitle = {
    fontSize: "24px"
}