import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'

import { Form, Input, Button } from 'semantic-ui-react'
import { Card } from '@material-ui/core';


class AddEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.checkAuth()
    }

    checkAuth = () => {
        let token = sessionStorage.getItem('SessionToken')
        if (!token) {
            this.props.history.replace('/')
        }
    }
    
    onChange = (data) => {
        console.log(data.target.value)
    }


    render() {
        return (
            <Fragment>

                {/* App Bar//////////////////////// */}
                <AppBar {...this.props}
                    variant={'h5'}
                    textColor={'inherit'}
                >
                    Add Employee
        </AppBar>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 50 }}>
                    <Card style={{ padding: 25 }}>
                        <Form>
                            <Form.Field required>
                                <label>First Name</label>
                                <Input type='text' onChange={(text) => this.onChange(text)}/>
                            </Form.Field>
                            <Form.Field required>
                                <label>Father name</label>
                                <Input type='text' onChange={(text) => this.onChange(text)}/>
                            </Form.Field>
                            <Form.Field required>
                                <label>Department</label>
                                <Input type='text' onChange={(text) => this.onChange(text)}/>
                            </Form.Field>
                            <Form.Field required>
                                <label>Band</label>
                                <Input type='text' onChange={(text) => this.onChange(text)}/>
                            </Form.Field>
                            <Form.Field required>
                                <label>Specification 1</label>
                                <Input type='text' onChange={(text) => this.onChange(text)}/>
                            </Form.Field>
                            <Form.Field required>
                                <label>Specification 2</label>
                                <Input type='text' onChange={(text) => this.onChange(text)}/>
                            </Form.Field>
                            <Form.Field required>
                                <label>Address</label>
                                <Input type='text' onChange={(text) => this.onChange(text)}/>
                            </Form.Field>
                            <div>
                                <Button color='instagram'>Reset</Button>
                                <Button color="green">Done</Button>
                            </div>
                        </Form>
                    </Card>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}


export default connect(mapStateToProps)(AddEmp);
