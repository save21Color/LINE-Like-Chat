import * as React from 'react';
import { ChatMenuActions } from '../containers/chat_menu_container';
import { ChatMenuState, ChatRoomState } from '../reducers/chat_menu_reducer';
// import { withStyleschatRoomComponent } from './chat_room_component';
import { WithStyles, withStyles, createStyles, Theme } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
// import { history } from '../store/configure_store';
// import { ConnectedRouter } from 'connected-react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/Icons/ExpandLess';
import ExpandMore from '@material-ui/Icons/ExpandMore';
import Chat from '@material-ui/Icons/Chat';

interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> { }

const styles = (theme: Theme) => createStyles({
    root: {
        width: 200,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
        fontSize:8,
    },
});

type Props = OwnProps & ChatMenuActions & ChatMenuState & WithStyles<typeof styles>;

export class ChatMenuComponent extends React.Component<Props, ChatMenuState> {
    constructor(props: any) {
        super(props);
        this.state = {
            userId: props.userId,
            roomList: props.roomList,
            open: false,
            selectedRoom: props.selectedRoom,
        };
    }
    componentWillMount() {
        this.props.requestAllChat(this.props.userId);
    }
    render() {
        const { classes } = this.props;
        return (
            <div >
                <List className={classes.root}
                    component="nav">
                    <ListItem button onClick={() => this.props.updateOpen(!this.props.open)}>
                        <ListItemIcon>
                            <Chat />
                        </ListItemIcon>
                        <ListItemText inset primary="chat" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.props.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {this.props.roomList.map((room: ChatRoomState) => {
                                return (
                                    <ListItem button className={classes.nested} onClick={
                                        () => {
                                            this.props.updateSelectedRoom(room);
                                            this.props.history.push('/ChatRoom');
                                        }}>
                                        <ListItemText inset primary={room.roomName}/>
                                    </ListItem>);
                            })}
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

export const withStylesChatMenuComponent = withStyles(styles)<Props>(ChatMenuComponent);
