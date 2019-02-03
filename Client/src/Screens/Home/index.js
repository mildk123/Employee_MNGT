import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'

import Container from '../../Helper/Container'
import Input from '../../Helper/Input'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentWillMount = () => {
    console.log(this.props)
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
        <div style={{paddingBlockStart: 30, paddingBlockEnd: 30, alignContent: 'center'}}>
        <Container>
          <Input />
        </Container>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state }
}


export default connect(mapStateToProps)(Home);
