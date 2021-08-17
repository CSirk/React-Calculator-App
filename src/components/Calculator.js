import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

class Calculator extends React.Component {
    render() {
        return (
            <Container className="calculator-app-container">
                <Row>
                    <h1>Calculator App</h1>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Button>7</Button>
                        <Button>8</Button>
                        <Button>9</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Button>4</Button>
                        <Button>5</Button>
                        <Button>6</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Button>0</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Calculator;