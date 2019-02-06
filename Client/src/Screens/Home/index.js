import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import swal from 'sweetalert'
import AppBar from '../../Helper/Appbar'

import Container from '../../Helper/Container'
import Input from '../../Helper/Input'
import Card from '../../Helper/CardCont'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      employeeList: []
    };

    this.checkAuth()
  }

  checkAuth = () => {
    let token = sessionStorage.getItem('SessionToken')
    if (!token) {
      this.props.history.replace('/')
    } else {
      this.fetchEmployee()
    }
  }

  dropOnChange = (event, data) => {
    console.log("on change drop", data.value)
  }
  searchTextChange = (data) => {
    console.log("on change text", data)
  }
  buttonHandler = () => {
    console.log("on change text")
  }

  fetchEmployee = () => {
    fetch('http://localhost:5000/employees/get')
      .then(data => data.json())
      .then(dat => {
        let response = dat.employee;
        if (response) {

          this.setState({
            employeeList: response,
            isFetching: false
          })
        } else {
          swal('failed to get employees list')
        }

      })
      .catch(err => console.log(err.message))
  }

  render() {
    const { employeeList } = this.state;
    return (
      <Fragment>

        {/* App Bar//////////////////////// */}
        <AppBar {...this.props}
          variant={'h5'}
          textColor={'inherit'}
        >
          Home
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

        {/* Employees Card //////////////////////// */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {employeeList ? (
            employeeList.map((item, index) => {
              return <div key={index}><Card
                fname={item.emp_fname}
                dept={item.emp_dept}
                id={`#${Math.floor(Math.random() * 9999)}`}
                band={item.emp_band}
                specs={`
                ${item.emp_specs[0]}  
                ${item.emp_specs[1] ? (`/ ${item.emp_specs[1]} `) : ''} 
                ${item.emp_specs[2] ? (`/ ${item.emp_specs[2]} `) : ''}
                `}
                father={item.father_info ? (item.father_info.name) : ('Not mentioned')}
                address={`House no : ${item.address[0].house_no},${item.address[0].flat_no} `}
              />
              </div>
            })
          ) : (
              <Card
                fname='first Name'
                dept='Department'
                id='Id'
                band='band'
                specs="specification"
                father="father's name"
                address="Address"
              />
            )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state }
}


export default connect(mapStateToProps)(Home);
