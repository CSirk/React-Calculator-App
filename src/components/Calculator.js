import '../styles/Calculator.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import CalculatorButton from './CalculatorButton';

class Calculator extends React.Component {
    render() {
        return (
            <Container className="calculator-app-container">
                <Row>
                    <h1>Calculator App</h1>
                </Row>
                <Row>
                    <CalculatorButton name={"1"}/>
                </Row>
                <Row>
                    <Col lg={12}>
                        <input type="textbox"></input>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <CalculatorButton name={"7"}/>
                    </Col>
                    <Col md={4}>
                        <CalculatorButton name={"8"}/>
                    </Col>
                    <Col md={4}>
                        <CalculatorButton name={"9"}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <CalculatorButton name={"4"}/>
                    </Col>
                    <Col md={4}>
                        <CalculatorButton name={"5"}/>
                    </Col>
                    <Col md={4}>
                        <CalculatorButton name={"6"}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <CalculatorButton name={"3"}/>
                    </Col>
                    <Col md={4}>
                        <CalculatorButton name={"2"}/>
                    </Col>
                    <Col md={4}>
                        <CalculatorButton name={"1"}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Calculator;