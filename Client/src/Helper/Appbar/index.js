import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button, Icon } from 'semantic-ui-react'


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

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
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Home
            </Typography>

                        <div>
                            <Button
                                onClick={() => {
                                    sessionStorage.removeItem('SessionToken')
                                    this.props.history.replace('/')
                                }}
                                animated color='twitter' >
                                <Button.Content visible>Logout</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='sign-out' />
                                </Button.Content>
                            </Button>


                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);

