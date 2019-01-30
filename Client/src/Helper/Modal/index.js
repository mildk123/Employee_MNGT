import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'

class AuthModal extends Component {
  constructor() {
    super()
    this.state = { open: false }
  }

  show = () => this.setState({ open: true })
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

            <Button color='black' icon labelPosition='right'>
              {this.props.type}
              <Icon name={this.props.btnIcon} />
            </Button>
          </Modal.Actions>

        </Modal>
      </div>
    )
  }
}

export default AuthModal;