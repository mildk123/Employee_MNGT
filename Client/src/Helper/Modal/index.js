import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class AuthModal extends Component {
  constructor() {
    super()
    this.state = { open: false }
  }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        {/* <Button onClick={this.show('mini')}>Mini</Button> */}

        <Modal size='tiny' open={open} onClose={this.close}>
          <Modal.Header>{this.props.modalTitle}</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>

          <Modal.Actions>
            <Button negative>Cancel</Button>
            <Button positive icon='checkmark' labelPosition='right' >{this.props.type}</Button>
          </Modal.Actions>

        </Modal>
      </div>
    )
  }
}

export default AuthModal;