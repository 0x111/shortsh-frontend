import React from 'react';
import {Button, Col, Container, Form, Input, InputGroup, InputGroupAddon, Row} from "reactstrap";
import ShortShNavbar from "./ShortShNavbar";
import './Index.css';
import config from '../_config/config';
import ClipboardJS from 'clipboard';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            shortened: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    handleSubmit(e) {
        e.preventDefault();

        if (this.state.shortened) {
            return false;
        }

        fetch(config.api.url + "/shorten", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            //this.state.url
            body: JSON.stringify({url: this.state.url}), // body data type must match "Content-Type" header
        })
            .then(
                response => {
                    return response.json()
                })
            .then((response) => {
                if (response.success) {
                    this.setState({url: response.url, shortened: true});
                }
        }); // parses response to JSON
    }

    componentDidMount() {
        new ClipboardJS('.copytocb');
    }

    render() {
        return(
            <React.Fragment>
                <ShortShNavbar/>
                <Container style={{textAlign: "center", alignItems: "center"}}>
                    <Row className="d-flex align-items-center h-100">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h1>Paste and shorten!</h1>
                            <p>Just enter your long link and click shorten to get a short url!</p>
                            <Form onSubmit={this.handleSubmit}>
                                <InputGroup size="lg">
                                    <Input autocomplete={"off"} type={'url'} id={'url'} pattern="(https://.*|http://.*)" onChange={this.handleChange} name={"url"} value={this.state.url} placeholder="Paste a link and click shorten" required />
                                    {this.state.shortened ? <InputGroupAddon addonType="append"><Button className={"copytocb"} data-clipboard-target="#url" color="success">Copy</Button></InputGroupAddon> : <InputGroupAddon addonType="append"><Button color="primary">Shorten</Button></InputGroupAddon>}
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Index;