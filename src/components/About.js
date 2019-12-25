import React from 'react';
import {Col, Container, Row} from "reactstrap";
import config from '../_config/config';


class About extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Container>
                    <Row className="d-flex">
                        <Col xl={12}>
                            <h1>About</h1>

                            <p>{config.site.name} is a simple url shortener service provided as an open-source software project. It's aim is to provide a simple, light-weight alternative to host your own
                            url shortening service with minimal effort.</p>

                            <p>This site is a demo site, not intended for production use and provided only to try out the service and get a feel of it.</p>

                            <p>If we (the provider) or any of you find, that someone is abusing this service for phishing or other abusive actions. Please feel free to report this to the email address: <a href={"mailto:" + config.site.email}>{config.site.email}</a> and after a brief investigation, we will disable the malicious url and remove it from the system.</p>

                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default About;