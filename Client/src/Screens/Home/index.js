import React, { Component } from "react";
import { connect } from 'react-redux';

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
      <div>
        <h1>Home</h1>
        <div />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { store : state }
}

export default connect(mapStateToProps)(Home);
