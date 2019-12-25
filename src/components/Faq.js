import React from 'react';
import {Col, Container, Row, UncontrolledCollapse, Button, CardBody, Card} from "reactstrap";
import config from '../_config/config';

class Faq extends React.Component {
    render() {
        const faq = [
            {
                "question": "Is this a paid service?",
                "answer": "No, " + config.site.name + " is completely for free."
            },
            {
                "question": "Can I run my own url shortener?",
                "answer": ["Sure, this is a free and open source project. The source code is completely public. You can download and run your own url shortener easily, just check by this ", <a key={"xakey"} href='https://github.com/short-sh?uri=short.sh'>github organisation</a>, "."]
            },
            {
                "question": "Does the service store any data about me as the one who shortens the url?",
                "answer": "Not at the moment. We do not store any identifiable data about the individual who does the url shortening."
            },
            {
                "question": "Can I use this for production use?",
                "answer": "Use " + config.site.name + " at your own risk. This is only a demo site. We can wipe the whole instance at any time if required for development purposes. This site serves only for you to decide if this is enough or not for your own usage."
            },
            {
                "question": "Does this url shortener have any statistics about the clicked short urls?",
                "answer": "Yes, any statistics page, can be visited by adding a + sign after the short url. For example if you have a short url 'https://short.tld/2xy' then if you would like to see statistics for this specific url, you just open 'https://short.tld/2xy+' and the app will redirect you to the stats page."
            },
            {
                "question": "Does the service store any data about the visitors for the shortened urls?",
                "answer": "Yes, at the moment, we do store an IP address and the referrer from where the user came from if the link was posted somewhere publicly. This is strictly used for the statistics page only at the moment. You can take a look at the github page for more info."
            }
        ];

        return(
            <React.Fragment>
                <Container>
                    <Row className="d-flex">
                        <Col xl={12}>
                            <h1>Frequently Asked Questions</h1>
                            {faq.map((f, index) =>
                                <Row key={index}>
                                    <Col>
                                        <Button color="primary" id={"toggler" + index} style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                                            {f.question}
                                        </Button>
                                        <UncontrolledCollapse toggler={"#toggler" + index}>
                                            <Card>
                                                <CardBody>
                                                    {f.answer}
                                                </CardBody>
                                            </Card>
                                        </UncontrolledCollapse>
                                    </Col>
                                </Row>)}

                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Faq;