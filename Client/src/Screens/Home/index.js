import React, { Component } from "react";
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Home</h1>
        <div />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state }
}

export default connect(mapStateToProps)(Home);
