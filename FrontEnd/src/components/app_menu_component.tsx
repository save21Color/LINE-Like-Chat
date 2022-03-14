// react
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Chat from '@material-ui/Icons/Chat';
import Drawer from '@material-ui/core/Drawer';
import { WithStyles, withStyles, createStyles, Theme } from '@material-ui/core';
// project
import { AppMenuActions } from '../containers/app_menu_container';
import { AppMenuState } from '../reducers/app_menu_reducer';
import { ChatMenuContainer } from '../containers/chat_menu_container';

interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> { }

const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

type Props = OwnProps & AppMenuActions & AppMenuState & WithStyles<typeof styles>;

export class AppMenuComponent extends React.Component<Props, AppMenuState> {
    constructor(props: any) {
        super(props);
        this.state = {
            openChat: this.props.openChat,
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Button className={classes.menuButton}
                            color="inherit" onClick={() => this.props.updateOpenChat(!this.props.openChat)}>
                            <Chat />chat
                        </Button>
                        <Drawer open={this.props.openChat} onClose={() => this.props.updateOpenChat(false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                onKeyDown={() => this.props.updateOpenChat(false)}>
                                <ChatMenuContainer />
                            </div>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export const withStylesAppMenuComponent = withStyles(styles)<Props>(AppMenuComponent);
