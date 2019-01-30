import React, { Component, Fragment } from 'react';
import { Button } from 'semantic-ui-css'

// Local CSS
import './style.css'


class AuthScreen extends Component {
    render() {
        return <Fragment >
            <div className="myComponent">
                <h1>Authentication</h1>
                <div>
                <Button>Click Here</Button>
                                </div>
            </div>
        </Fragment>
    }


}

export default AuthScreen;