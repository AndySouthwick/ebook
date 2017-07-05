import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap';

class ThankYou extends Component{
    render(){
        return(
            <Container>
                <Row className="bar2">
                    <Col lg="6" xs="10">
                       <h2>Thank You</h2>
                        Please check your email
                    </Col>

                </Row>
            </Container>
        )
    }
}

export default ThankYou