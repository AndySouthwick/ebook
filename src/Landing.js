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

                        <h1 className="landing-header" > <a href="/thanks">THanks</a>SEVEN DEVASTATING MISTAKES</h1>
                        <h2 className="center"><i >The guide that will teach you what you need to know about choosing indicators.</i></h2>
                        <hr/>
                    </Col>
            </Row>
            </Container>
                <Container>
                <Row className="bar2">
                    <Col lg="4" xs="12" className="leftSide">
                        <h2> Why you need this book? </h2><hr/>
                        <ul>
                            <li>Why ongoing help and training is critical to your trading success.</li>
                            <li>You need precise indicators other wise you are gambling.</li>
                            <li>Clear entry and exit strategies</li>
\                            <li>Why Black Box and Robot Trading is a big mistake</li>
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
                    <Row className="bar3 justify-content-center">
                        <h2 className="bg-info">What some of our readers have to say</h2>
                    </Row>
                    <Row className="bar3">
                        <Col lg="6" className="">
                            <img src="./images/cmb2zh-librato-testimonial-man_02s02s02s02s000000.jpg" alt="" className="wrapText round alignleft"/>
                            <b>Jonas Kent</b><br/>

                           <i>Josh Bingham</i><br/>

                            "Learn the indicators. If you do, you'll never have to worry about money."                        </Col>
                        <Col lg="6">
                            <img src="./images/18sf4yd-librato-testimonial-woman.jpg" alt="" className="wrapText round alignleft" />
                           <b>Jane Doe</b><br/>

                            <i>CEO/Founder, GoodWork Inc.</i><br/>

                            These guys are the best at what they do - they know their stuff. Just reading their various ebooks will be proof enough.
                        </Col>
                    </Row>
                    <Row className="bar4 justify-content-center">
                        {('\u00A9')}
                        2017 Win At Day Trading
                    </Row>

                </Container>



        </div>
        )
    }
}
export default Landing