import React, { Component, Fragment } from 'react'
import { Button, Icon } from 'semantic-ui-react'

import Modal from '../Modal'

class AuthButtons extends Component {
  constructor() {
    super()
    this.state = {
      modalType: null,
      modalTitle: null
    }
    this.showModal = React.createRef()

  }

  renderModal = type => {
    this.setState({
      modalType: type,
      modalTitle: (type === 'Register' ? "Create Account" : 'Login'),
      btnIcon: (type === 'Register' ? "user circle" : 'sign-in'),
    })
    this.showModal.current.show();
  }


  render() {
    const { modalType, modalTitle, btnIcon } = this.state;
    return (
      <Fragment>
        <Modal
        {...this.props}
          ref={this.showModal}
          type={modalType}
          modalTitle={modalTitle}
          btnIcon={btnIcon}
        />
        <div>
          <Button.Group>
            <Button
              onClick={() => this.renderModal('Register')}
              animated color='black' primary >
              <Button.Content visible>Register</Button.Content>
              <Button.Content hidden>
                <Icon name='user circle' />
              </Button.Content>
            </Button>

            <div style={{ margin: 3 }} />
            <Button onClick={() => this.renderModal('Login')} animated size="large" color="red"  >
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name='sign-in' />
              </Button.Content>
            </Button>
          </Button.Group>
        </div>
      </Fragment>
    )
  }
}

export default AuthButtons;