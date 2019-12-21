import React from "react";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";

class KpRequest extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(event) {
        event.preventDefault();

        const requestData = new FormData(event.target);

        let {data} = await axios.post('http://localhost:8080/payment', requestData);

        console.log(data);
        window.location = '/card/' + data.url;
    }

    render() {
        return (
            <Container className="mt-3">
                <h1 className="text-danger">*This page should be used only for testing purposes</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="merchantId">Merchant Id</Label>
                        <Input type="text" name="merchantId" id="merchantId" placeholder="Merchant ID"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="merchantPassword">Merchant Password</Label>
                        <Input type="password" name="merchantPassword" id="merchantPassword"
                               placeholder="Merchant Password"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="number" name="amount" id="amount" min="0" step=".01" placeholder="Amount"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="merchantOrderId">Merchant Order Id</Label>
                        <Input type="number" name="merchantOrderId" id="merchantOrderId" min="0"
                               placeholder="Merchant Order Id"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="merchantTimeStamp">Merchant Timestamp</Label>
                        <Input type="date" name="merchantTimestamp" id="merchantTimeStamp" placeholder="Merchant timestamp"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="successUrl">Success url</Label>
                        <Input type="text" name="successUrl" id="successUrl" placeholder="Success url"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="failedUrl">Failed url</Label>
                        <Input type="text" name="failedUrl" id="failedUrl" placeholder="Failed url"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="errorUrl">Error url</Label>
                        <Input type="text" name="errorUrl" id="errorUrl" placeholder="Error url"/>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }


}

export default KpRequest