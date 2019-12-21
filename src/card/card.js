import React from "react";
import {Button, Form, FormGroup, Label, Input, Container} from "reactstrap";
import axios from "axios";

class Card extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();

        let urlParam = this.props.match.params.url;

        const requestData = new FormData(event.target);

        let {data} = await axios.post('http://localhost:8080/payment/' + urlParam, requestData);

        window.location = data.url;
    }


    render() {
        return (
            <Container className="mt-3">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="pan">Pan</Label>
                        <Input type="text" name="pan" id="pan" placeholder="PAN number"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="securityCode">Security code</Label>
                        <Input type="number"  name="securityCode" id="securityCode" placeholder="Security code"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="holderName">Card holder</Label>
                        <Input type="text" name="holderName" id="holderName" placeholder="Card holder name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="validTo">Valid to</Label>
                        <Input type="date" name="validTo" id="validTo" placeholder="Valid to"/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default Card