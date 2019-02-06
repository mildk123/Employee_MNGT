import React, { Component, Fragment } from 'react'
import { Input, Dropdown } from 'semantic-ui-react'



const options = [
    { key: 'Name', text: 'Name', value: 'emp_fname' },
    { key: 'Department', text: 'Department', value: 'emp_dept' },
    { key: 'Band', text: 'Band', value: 'emp_band' },
    { key: 'Specifications', text: 'Specifications', value: 'emp_specs' },
    { key: 'Fathers name', text: 'Fathers name', value: 'father_info' },
    { key: 'House No', text: 'House No', value: 'house_no' },
    { key: 'Flat No', text: 'Flat No', value: 'flat_no' },
]

class Inputs extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false
        }
    }

    onChangeFollower(event, data) {
        console.log("on change follower", data.value)
    }

    render() {
        return (
            <Fragment>
                <Input
                    onChange={(e) => { console.log(e.target.value) }}
                    fluid
                    label={<Dropdown onChange={this.onChangeFollower} defaultValue='emp_fname' options={options} />}
                    labelPosition='left'
                    placeholder='Search...'
                    action={{ color: 'twitter', labelPosition: 'left', icon: 'search', content: 'Search' }}
                />
            </Fragment>
        )
    }
}


export default Inputs
