import React, { Component } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import swal from 'sweetalert'

import { storeToken, createUser, } from '../../Redux/Actions/authAction'
import { connect } from 'react-redux';

export class AuthModal extends Component {
  constructor() {
    super()
    this.state = { open: false }
  }

  componentWillReceiveProps(props, nextProps) {
    let prop = props.state.authReducer.modal
    this.setState({
      btnIcon: prop.btnIcon,
      modalTitle: prop.modalTitle,
      modalType: prop.modalType,
      open: true
    })
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  onChangeHandler = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  action = () => {
    const { email, password } = this.state;
    if (!email || !password) {
      swal('Invalid Email/Password')
    } else {
      if (this.props.type === 'Register') {
        fetch('/auth/register', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password,
          })
        }
        )
          .then(data => data.json())
          .then(dat => {
            let response = dat.match
            if (response === false) {
              swal(dat.message)
            } else {
              this.props.onCreateUser({ User: { email: email, password: password } })
              this.props.storeToken({token : dat.token})
              this.props.history.push('/Home')
            }
          })
          .catch(err => {
            swal(err.message)
            console.log(err.message)
          })

      } else {
        fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email, password: password })
        }
        )
          .then(data => data.json())
          .then(dat => {
            let response = dat.match
            if (response === false) {
              swal(dat.message)
            } else {
              this.props.onCreateUser({ User: { email: email, password: password } })
              this.props.storeToken({token : dat.token})
              this.props.history.push('/Home')
            }
          })
          .catch(err => {
            swal(err.message)
            console.log(err.message)
          }
          )
      }
    }
  }

  render() {
    const { open, btnIcon,
      modalTitle,
      modalType, } = this.state

    return (
      <div>
        <Modal size='tiny' open={open} onClose={this.close}>
          <Modal.Header>{modalTitle}</Modal.Header>

          <Modal.Content>
            <Grid>

              <Grid.Row columns={1}>
                <Grid.Column >
                  <Input
                    onChange={(text) => { this.onChangeHandler('email', text.target.value) }}
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
                <Grid.Column >
                  <Input
                    onChange={(text) => { this.onChangeHandler('password', text.target.value) }}
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
            <Button negative onClick={this.close}>Cancel</Button>

            <Button color='black' icon labelPosition='right' onClick={this.action}>
              {modalType}
              <Icon name={btnIcon} />
            </Button>
          </Modal.Actions>

        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { modal: state }
}

const mapDispatchToProps = {
  onStoreToken: storeToken,
  onCreateUser: createUser
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);


// export default AuthModal;