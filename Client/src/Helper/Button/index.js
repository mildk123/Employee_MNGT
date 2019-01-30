import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
    <Button.Group>
      <Button animated color='black' size="large" primary >
        <Button.Content visible>Register</Button.Content>
        <Button.Content hidden>
          <Icon name='user circle' />
        </Button.Content>
      </Button>
<div style={{margin:3}}/>
      <Button animated size="large" color="green"  >
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name='sign-in' />
        </Button.Content>
      </Button>
    </Button.Group>
  </div>
)

export default ButtonExampleAnimated