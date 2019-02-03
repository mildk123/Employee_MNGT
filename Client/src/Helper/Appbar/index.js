import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import { Icon } from "semantic-ui-react";
import { IconButton, Button } from "@material-ui/core";

const styles = {
    root: {
        flexGrow: 1,
    },
};



function SimpleAppBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: ' linear-gradient(10deg, #1D976C, #93F9B9)' }}>
                <Toolbar>
                    <IconButton>
                        <Icon
                            className="styles.icon"
                            name="users"
                            size='large'
                            inverted
                        />
                    </IconButton>
                    <Typography variant={props.variant} color={props.textColor}>
                        {props.children}
                    </Typography>
                    <Button
                        onClick={() => {
                            sessionStorage.removeItem('SessionToken')
                            props.history.replace('/')
                        }}
                    >Sign Out</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
