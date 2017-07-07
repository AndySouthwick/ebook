import React, {Component} from 'react'
import CountdownTimer from './CountdownTimer'
import {Container, Form, FormGroup, Row, Col, Input, Label, Button} from 'reactstrap';

class Landing extends Component{
    render(){

        return(
        <div>

            <Container className="pagecontent">
                <CountdownTimer/>


                <Row className="justify-content-center firstbar">
                    <Col>
                        <h1 className="landing-header" >SEVEN DEVASTATING MISTAKES</h1>
                        <h2 className="center"><i >The guide that will teach you what you need to know about choosing indicators.</i></h2>
                        <hr/>
                    </Col>
            </Row>
                <Container>
                <Row className="bar2">
                    <Col lg="4" xs="12" className="leftSide">
                        <h2> Why you need this book? </h2><hr/>
                        <ul>
                            <li>Why ongoing support and training is critical</li>
                            <li>Why most systems don't fit your financial ability</li>
                            <li>Clear entry and exit strategies</li>
                            <li>Most systems are not specific to a traders needs</li>
                            <li>Black Box and Robot Trading is a big mistake</li>
                        </ul>
                    </Col>
                    <Col lg="4" xs="12" className="middle visible-lg" >
                        <img src="./images/book.png" width="100%" className="bookimage"
                        />
                    </Col>

                    <Col lg="4" className="rightSide">
                        <h2>Get Your Free Copy</h2>


                        <Form acceptCharset="utf-8" action="https://fq248.infusionsoft.com/app/form/process/6eeeec81362b2b181b668586ef580792"  method="POST">
                            <input name="inf_form_xid" type="hidden" value="6eeeec81362b2b181b668586ef580792" />
                            <input name="inf_form_name" type="hidden" value="Web Form submitted" />
                            <input name="infusionsoft_version" type="hidden" value="1.67.0.44" />
                            <FormGroup>
                            <div className="infusion-field">
                                <Label>Email</Label><br/> <br/>
                                <Input  id="inf_field_Email" name="inf_field_Email" type="email" placeholder="Email" />
                            </div>
                            </FormGroup>
                            <FormGroup>
                            <div className="infusion-submit">
                            <br/>
                                <Button type="submit" value="Submit" className="getitbtn"> Get The Ebook</Button>
                            </div>
                            </FormGroup>
                        </Form>

                    </Col>

                </Row>
                </Container>
            </Container>
        </div>
        )
    }
}
export default Landing