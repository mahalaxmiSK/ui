import React, { Component } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

//import * as DataContainer from "./FetchData";
export class Register extends Component {
    static displayName = Register.name;

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
        event.preventDefault();
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <div className="col-sm-4">
                    <Form >
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Register for your stellar account</Form.Label>                            
                        </Form.Group>                    
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                onChange={(e) => this.email = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="Firstname">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => this.password = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="Lastname">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                onChange={(e) => this.email = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                autoFocus
                                type="password"
                                onChange={(e) => this.email = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="repassword">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control
                                autoFocus
                                type="password"
                                onChange={(e) => this.email = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                onChange={(e) => this.email = e.target.value}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="accept">
                            <Form.Check type="checkbox" label="I have read and accept the terms and conditions" />
                            <Form.Label></Form.Label>
                        </Form.Group>
                        <Button block size="lg" type="submit">
                            Register
                    </Button>
                    </Form>
                </div>
                <div class="home-banner-image-div">
                </div>
            </div>

        );
    }
}
