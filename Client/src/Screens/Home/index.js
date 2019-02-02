import React, { Component } from "react";
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
componentWillReceiveProps = (props) => {
  console.log('[rp[s', props.state.authReducer)
}

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);  
  return { state }
}

export default connect(mapStateToProps)(Home);
