import React from 'react';
import { Link } from 'react-router-dom';
import {Col, Container, Row} from "reactstrap";

class NoMatch extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <p>No route found!</p>
                            Go to <Link to="/">Home</Link>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default NoMatch;