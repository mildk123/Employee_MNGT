import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'


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
            <Grid>

              <Grid.Row columns={1}>
                <Grid.Column width={15}>
                  <Input
                    tabIndex="1"
                    fluid
                    label={<Icon name='mail' />}
                    type="email"
                    size="large"
                    iconPosition='left'
                    placeholder='Email' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={1}>
                <Grid.Column width={15}>
                  <Input
                    tabIndex="2"
                    fluid
                    label={<Icon name='key' />}
                    type="password"
                    size="large"
                    iconPosition='left'
                    placeholder='Password' />
                </Grid.Column>

              </Grid.Row>

            </Grid>

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