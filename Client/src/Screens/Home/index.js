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
        <div style={{ paddingBlockStart: 30, paddingBlockEnd: 30, alignContent: 'center' }}>
          <Container>
            <Input />
          </Container>
        </div>

        {/* Employees Card //////////////////////// */}
        <div style={{ backgroundColor:'pink',flex: 1, justifyContent: 'center'}}>
          <Card>
            <p>
              Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
              ancestors, which would have been pack hunters with complex body language. These
              sophisticated forms of social cognition and communication may account for their
              trainability, playfulness, and ability to fit into human households and social situations,
              and these attributes have given dogs a relationship with humans that has enabled them to
              become one of the most successful species on the planet today.
      </p>
            <p>
              The dogs' value to early human hunter-gatherers led to them quickly becoming ubiquitous
              across world cultures. Dogs perform many roles for people, such as hunting, herding, pulling
              loads, protection, assisting police and military, companionship, and, more recently, aiding
              handicapped individuals. This impact on human society has given them the nickname "man's
              best friend" in the Western world. In some cultures, however, dogs are also a source of
              meat.
      </p>
          </Card>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state }
}


export default connect(mapStateToProps)(Home);
