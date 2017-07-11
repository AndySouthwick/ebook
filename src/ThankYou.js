import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap';
import Youtube from './Youtube'

class ThankYou extends Component{
    render(){
        return(
            <Container>
                <Row className="bar2">
                    <Col className="text-center">
                       <h2>Thank You</h2>
                        Please check your email and text win to <a href="sms:3854484055">3854484055</a> to get on our trade of the day
                    </Col>

                </Row>
                <Row className="bar2 text-center" >
                    <Col lg={{ size: 6, push: 2, pull: 2, offset: 1 }}   xs={{ size: 12}} >
                        <Youtube/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ThankYou