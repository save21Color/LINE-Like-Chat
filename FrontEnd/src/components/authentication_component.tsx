import * as React from 'react';
import { AuthenticationActions } from '../containers/authentication_container';
import { AuthenticationState } from '../reducers/authentication_reducer';
import { Redirect, Route } from 'react-router-dom';
import { AppMenuContainer } from '../containers/app_menu_container';

interface OwnProps{}

type Props = OwnProps & AuthenticationActions;

export class AuthenticationComponent extends React.Component<Props, AuthenticationState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currentUser: '',
            password: '',
            isLoggedIn: false,
        };
    }
    componentWillMount() {
        this.getCurrentUser();
    }
    getCurrentUser () {
        const storage = localStorage.getItem('currentUser');
        if (storage) {
            const value = JSON.parse(storage);
            this.setState({ currentUser: value.userid, password: value.password, isLoggedIn: true });
        }
    }
    componentWillReceiveProps(nextProps: any) {
        console.log(nextProps);
        this.getCurrentUser();
        console.log(this.state);
    }

    render () {
        return this.state.isLoggedIn ? (
            <div>
                <AppMenuContainer />
                <Route children={this.props.children} />
            </div>
            ) : <Redirect to="/login"/>;
    }
}

/*
const authenticationComponent: React.SFC<Props> = (props: Props) => {
    return (
        props.isLoggedIn ? <Redirect to="/"/> : <Redirect to="/login"/>
    );
};

export { authenticationComponent as  AuthenticationComponent };
*/
