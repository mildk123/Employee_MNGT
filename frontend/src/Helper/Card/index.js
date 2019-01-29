import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";

import Input from "../Input";
import DateAndTime from "../../Helper/DateAndTime";

import WhichDays from '../CheckBoxes'

const styles = theme => ({
  card: {
    maxWidth: 1280,
    padding: 25
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleChoice = (resp) => {
    console.log('response on card ' , resp)
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Input />
        </CardContent>

        <CardContent>
          <DateAndTime handleChoice={this.handleChoice}/>
        </CardContent>
        <CardContent>
          <WhichDays />
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
