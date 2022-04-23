import React, { Component } from "react";
// import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

// import * as DataContainer from './FetchData';
export class Login extends Component {
    static displayName = Login.name;

   constructor(props) {
       super(props);

       this.email = "";
       this.password = "";

        this.state = {
            datactrl: [],
        };       
    }
   
    validateForm() {
        return this.email.length > 0 && this.password.length > 0;
    }

    handleSubmit(event) {
        // event.preventDefault();
    }

    componentDidMount() {

    }
  
    render() {

        return (
            <div>
                <div className="col-sm-4">
                <Form >
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                                autoFocus
                                type="email"
                                onChange={(e) => this.email = e.target.value}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                                type="password"
                                onChange={(e) => this.password = e.target.value}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit">
                            Login
                    </Button>
                        <a href="/register">
                            Register here.
                        </a>
                </Form>
                </div>
            </div>

        );       
    }
}





