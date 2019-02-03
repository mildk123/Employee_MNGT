import React, { Component } from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'

class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false
        }
    }
    render() {
        return (
            <Input
                placeholder='Search...'
                fluid >
                <input />
                {!this.state.isLoading ?

                    (<Button inverted color='purple'
                        animated >
                        <Button.Content visible>Search</Button.Content>
                        <Button.Content hidden loading="true">
                            <Icon name='search' />
                        </Button.Content>
                    </Button>) : (
                        <Button inverted color='purple' loading="true">
                            <Button.Content visible>Search</Button.Content>
                        </Button>
                    )
                }
            </Input>

        )
    }
}


export default Inputs
