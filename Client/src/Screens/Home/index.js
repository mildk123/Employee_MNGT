import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from '../../Helper/Appbar'
import { Icon } from "semantic-ui-react";
import { Toolbar, IconButton } from "@material-ui/core";

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
        <AppBar
        AppBarColor={'#7ad179'}
        variant={'h5'}
        textColor={'inherit'}
        >
        <Toolbar>
         <IconButton>
         <Icon 
         className="styles.icon"
         name="users"
         size='large'
         inverted
            />
            </IconButton>
         Home
         
            </Toolbar>
          </AppBar>
        <div />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { store : state }
}


export default connect(mapStateToProps)(Home);
