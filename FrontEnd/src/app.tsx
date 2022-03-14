import * as React from 'react';
import { MainContainer } from './containers/main_container';
import { LoginContainer } from './containers/login_container';
import { ChatRoomContainer } from './containers/chat_room_container';
import { WithStyles, withStyles } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/configure_store';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthoricationContainer } from './containers/authentication_container';

const styles = {
    root: {
        height: '100%',
    },
};

class App extends React.Component<WithStyles<typeof styles>> {

    render() {
        return (
            <div className={this.props.classes.root}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path={'/login'} component={LoginContainer} />
                        <AuthoricationContainer>
                            <Switch>
                                <Route exact path={'/main'} component={MainContainer} />
                                <Route exact path={'/ChatRoom'} component={ChatRoomContainer} />
                                <Route render={() => (<Redirect to={'/login'}></Redirect>)} />
                            </Switch>
                        </AuthoricationContainer>
                    </Switch>
                </ConnectedRouter>
            </div>
        );
    }
}

export default withStyles(styles)(App);
