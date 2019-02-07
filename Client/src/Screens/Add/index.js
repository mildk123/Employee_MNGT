import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'

import Container from '../../Helper/Container'
import Input from '../../Helper/Input'

class AddEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.checkAuth()
    }

    checkAuth = () => {
        let token = sessionStorage.getItem('SessionToken')
        if (!token) {
            this.props.history.replace('/')
        }
    }

    dropOnChange = (event, data) => {
        this.setState({
            searchCat: data.value
        })
    }

    searchTextChange = (data) => {
        this.setState({
            searchTerm: data
        })
    }

    buttonHandler = () => {
        this.searchEmp()
    }


    render() {
        return (
            <Fragment>

                {/* App Bar//////////////////////// */}
                <AppBar {...this.props}
                    variant={'h5'}
                    textColor={'inherit'}
                >
                    Add Employee
        </AppBar>

                {/* Search Card //////////////////////// */}
                <div style={{ paddingBlockStart: 30, paddingBlockEnd: 30, alignContent: 'center' }}>
                    <Container>
                        <Input
                            dropHandler={(event, data) => this.dropOnChange(event, data)}
                            textChange={(data) => this.searchTextChange(data)}
                            buttonHandler={this.buttonHandler}
                        />
                    </Container>
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { store: state }
}


export default connect(mapStateToProps)(AddEmp);
