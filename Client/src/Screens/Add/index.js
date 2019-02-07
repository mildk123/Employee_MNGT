import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'

import { Form } from 'semantic-ui-react'
import { Card } from "@material-ui/core";

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

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
                    
                    <Card>
                    <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label='Small'
            value='sm'
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Large'
            value='lg'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
    
                    </Card>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}


export default connect(mapStateToProps)(AddEmp);
