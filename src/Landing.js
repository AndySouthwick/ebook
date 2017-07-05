import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap';

class Landing extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col lg="6" xs="12">
                            here is one col

                    </Col>

                    <Col lg="4">
                        <form acceptCharset="utf-8" action="https://fq248.infusionsoft.com/app/form/process/6eeeec81362b2b181b668586ef580792"  method="POST">
                            <input name="inf_form_xid" type="hidden" value="6eeeec81362b2b181b668586ef580792" />
                            <input name="inf_form_name" type="hidden" value="Web Form submitted" />
                            <input name="infusionsoft_version" type="hidden" value="1.67.0.44" />
                            <div className="infusion-field">

                                <input className="infusion-field-input-container" id="inf_field_Email" name="inf_field_Email" type="text" />
                            </div>
                            <div className="infusion-submit">
                                <Button type="submit" value="Submit"> Submit</Button>
                            </div>
                        </form>

                    </Col>

                </Row>
            </Container>
        )
    }
}
export default Landing