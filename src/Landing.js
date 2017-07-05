import React, {Component} from 'react'
import styles from './App.css';
import {Container, Form, FormGroup, Row, Col, Input, Label, Button} from 'reactstrap';

class Landing extends Component{
    render(){

        return(
        <div>

            <Container className="pagecontent">



                <row>
                    <Col xs="12">
                        <h1 className="landing-header">SEVEN DEADLY MISTAKES</h1>
                        <i>The guide that will teach you what you need to know about choosing indicators.</i>
                        <hr/>
                    </Col>
            </row>

                <Row className="bar2">
                    <Col lg="4" xs="12" className="leftSide">
                        <h2> What's in the ebook? </h2><hr/>
                        Suscipit probatus omittantur quo in. Similique scriptorem vim id, legimus veritus consequuntur no his. Pro ut
                        eirmod vidisse fierent, lorem interesset ius an, qui te nominavi volutpat disputationi. Ex hinc augue labores vim.
                        His ad sint autem alterum, ipsum audire aperiam ex mel. Ad nihil malorum detraxit eum. Cu nec docendi salutatus expetendis.
                    </Col>
                    <Col lg="4" xs="12" className="middle" >
                        <img src="/images/bookimg.png" width="100%"/>
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
        </div>
        )
    }
}
export default Landing