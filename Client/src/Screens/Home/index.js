import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'
import Container from '../../Helper/Container'

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
        <div style={{paddingBlockStart: 30, paddingBlockEnd: 30, backgroundColor: 'silver', alignContent: 'center'}}>
        <Container>
          <h1>Apple Beez</h1>
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
