import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'

import Container from '../../Helper/Container'
import Input from '../../Helper/Input'
import Card from '../../Helper/CardCont'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.checkAuth()
  }

  checkAuth = () => {
    fetch ( '' )
    .then()
    .then()
    .catch(error => console.log(error.message))
  }

  render() {
    return (
      <Fragment>
        {/* App Bar//////////////////////// */}
        <AppBar
          variant={'h5'}
          textColor={'inherit'}
        >
          Home
        </AppBar>

        {/* Search Card //////////////////////// */}
        <div style={{ paddingBlockStart: 30, paddingBlockEnd: 30, alignContent: 'center' }}>
          <Container>
            <Input />
          </Container>
        </div>

        {/* Employees Card //////////////////////// */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Card
            fname='Steven'
            dept='Technology'
            id='Gujca'
            band='D1'
            specs=" sda sd"
            father="Young"
            address="C1, as"
          />
          <Card
            fname='Steven'
            dept='Technology'
            id='Gujca'
            band='D1'
            specs=" sda sd"
            father="Young"
            address="C1, as"
          />
          <Card
            fname='Steven'
            dept='Technology'
            id='Gujca'
            band='D1'
            specs=" sda sd"
            father="Young"
            address="C1, as"
          />
          <Card
            fname='Steven'
            dept='Technology'
            id='Gujca'
            band='D1'
            specs=" sda sd"
            father="Young"
            address="C1, as"
          />
          <Card
            fname='Steven'
            dept='Technology'
            id='Gujca'
            band='D1'
            specs=" sda sd"
            father="Young"
            address="C1, as"
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state }
}


export default connect(mapStateToProps)(Home);
