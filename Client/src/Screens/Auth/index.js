import React, { Component, Fragment } from 'react';
import Button from '../../Helper/Button'
// Local CSS
import './style.css'


class AuthScreen extends Component {
    render() {
        return <Fragment >
            <div className="myComponent">
                <h1>Authentication</h1>
                <div className="btnDiv">
                    <Button />
                </div>
            </div>
        </Fragment>
    }


}

export default AuthScreen;