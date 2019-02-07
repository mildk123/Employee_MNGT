import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'

import { Form, Input } from 'semantic-ui-react'
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
                            <Form.Field>
                                <label>Name</label>
                                <Input type='text' />

                                <label>Father name</label>
                                <Input type='text' />
                            </Form.Field>

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
