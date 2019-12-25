import React from 'react';
import {Col, Container, Row} from "reactstrap";
import config from '../_config/config';

class ToS extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Container>
                    <Row className="d-flex">
                        <Col xl={12}>
                            <h1>Terms of Service</h1>
                            <ul>
                                <li>The service {config.site.name} (later on as "service", "the service") is a free service</li>
                                <li>This is run as a demo only for the Open Source application available at github (<a href={'https://github.com/short-sh'} target={"_blank"}>Github</a>)</li>
                                <li>The provider of this service is not liable for the user generated content and if reported (see below), malicious activities will be discontinued in a short time period.</li>
                                <li>The service and stored data can be deleted at any time without prior notice.</li>
                                <li>If we detect or get reports about abusing the service for spamming, phishing, linking to malicious content or any abusive/illegal behaviour then we can disable the shortened link without any prior notice.</li>
                                <li>If anyone detects abusive usage, then we request individuals to report this to the following email: <a href={"mailto:" + config.site.email}>{config.site.email}</a>! We respond to all reports adequatly and do not ignore those.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default ToS;