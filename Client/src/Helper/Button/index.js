import React , {Component, Fragment} from 'react'
import { Button, Icon } from 'semantic-ui-react'

import Modal from '../Modal'

class AuthButtons extends Component {
  constructor() {
    super()
    this.state = {
      modalType : null,
      modalTitle : null
    }
  }

  showModal = type => {
    console.log(type)
  }


  render() {
    const {modalType, modalTitle } = this.state;
    return (
      <Fragment>
        <Modal
        ref='authModal' 
        type={modalType}
        modalTitle={modalTitle}
        />
      <div>
        <Button.Group>
          <Button  
          onClick={() => this.showModal('Register')}
          animated color='black'  primary >
            <Button.Content visible>Register</Button.Content>
            <Button.Content hidden>
              <Icon name='user circle' />
            </Button.Content>
          </Button>

          <div style={{ margin: 3 }} />
          <Button onClick={() => this.showModal('Login')} animated size="large" color="red"  >
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