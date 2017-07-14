import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap';
import 'react-file-download'

class Ebook extends Component{

    download() {

        // fake server request, getting the file url as response
        setTimeout(() => {

            const response = {

                file: 'src/Ebook.js',
            };
            // server sent the url to the file!
            // now, let's download:
            window.location.href = response.file;
            // you could also do:
            // window.open(response.file);
        }, 100);
    }






    render(){

        return(
            <Container>
                <Row className="bar2">
                    <Col className="text-center">
                        <h2>Thank You</h2>
                        Download your ebook Here and text win to <a href="sms:3854484055">3854484055</a> to get on our trade of the day
                    </Col>

                </Row>
                <Row className="bar2 text-center" >
                    <Col lg={{ size: 6, push: 2, pull: 2, offset: 1 }}   xs={{ size: 12}} >


                        <h1>Download <a href="" onClick={this.download} >7 Devasataing Mistakes</a></h1>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Ebook