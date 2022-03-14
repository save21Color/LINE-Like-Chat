import * as React from 'react';
import { ChatMenuState } from '../reducers/chat_menu_reducer';
import { ChatRoomValueState, NowInputUserState } from '../reducers/chat_room_reducer';
import { ChatRoomActions } from '../containers/chat_room_container';
import { RouteComponentProps } from 'react-router-dom';
import { WithStyles, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> { }

const styles = {
    root: {
        height: '100%',
        overflow: 'auto',
    },
    msg: {
        position: 'relative',
        width: '400px',
        height: '100px',
    },
    inputState: {
        fontSize: '0.8em',
        font: 'grey',
    },
    name: {
        fontSize: '0.7em',
    },
    send: {
        textAlign: 'right',
    },
    receive: {
        textAlign: 'left',
    },
    Chip: {
        font: 'grey',
    },
};
type ClassName = keyof typeof styles;

type Props = OwnProps & ChatMenuState & ChatRoomValueState & NowInputUserState & ChatRoomActions & WithStyles<ClassName>;

export class ChatRoomComponent extends React.Component<Props, ChatRoomValueState> {
    constructor(props: any) {
        super(props);
        this.state = {
            roomId:props.roomId,
            roomName: props.roomName,
            userId:props.userId,
            userName: props.userName,
            textValue: '',
            isEnter: true,
            message: [],
            input: props.input,
        };
    }
    componentWillMount() {
        this.props.connectRoom();
        this.props.requestAllLog();
    }
    render() {
        return (
            <div className={this.props.classes.root} id="ChatArea">
                <div className="Message">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography  color="inherit">
                            {this.props.roomId} : {this.props.roomName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                    {this.props.message.map((messageText) => {
                        {
                            const splitval: string[] = messageText.split(':');
                            const id: string = splitval[0];
                            const name: string = splitval[1];
                            const text: string = splitval[2];
                            const splitCount = text.length / 20;
                            const contents =  [];
                            for (let i:number = 1; i <= splitCount; i += 1) {
                                const currentNum = i * 20;
                                contents.push(`${text.slice(0, currentNum)}${<br/>}${text.slice(currentNum)}`);
                            }
                            return (
                                <div className={this.props.classes.msg}>
                                    {this.props.userId === id ?
                                        <Grid className={this.props.classes.send} >
                                            <InputLabel className={this.props.classes.name}>
                                                {name}
                                            </InputLabel>
                                            <br/>
                                                <Chip className={this.props.classes.Chip}  label ={text} color={'primary'}  />
                                        </Grid>
                                        :
                                        <Grid className={this.props.classes.receive} >
                                            <InputLabel className={this.props.classes.name}>
                                                {name}
                                            </InputLabel>
                                            <br/>
                                            <Chip className={this.props.classes.Chip} label={`${text}`} color={'secondary'} />
                                        </Grid>
                                    }
                                    <br />
                                </div>
                            );
                        }
                    },
                    )}
                </div>
                <div className="ChatBox">
                    <div className={this.props.classes.inputState} >
                        {this.props.input.isInput ?
                            <div>
                                    {this.props.input.userName}さんが入力しています...
                            </div>
                            :
                            <div>
                            </div>
                        }
                    </div>
                    <Grid>
                        <TextField multiline={true} rows={1} label="name" name={'name'} value={this.props.userName}
                            onChange={(e) => {
                                this.props.updateName(e.target.value);
                            }} />
                    </Grid>
                    <Grid>
                        <TextField multiline={true} rows={4} name={'text'} label="chat" value={this.props.textValue}
                            onChange={(e) => {
                                this.props.updateTodo(`${this.props.userId}:${this.props.userName}:${e.target.value}`);
                            }} />
                    </Grid>
                </div>
                <br />
                <Button variant={'raised'} color={'primary'} onClick={() => {
                    this.props.sendTodo(`${this.props.userId}:${this.props.userName}:${this.props.textValue}`);
                    this.props.removeTodo();
                }
                } >送信</Button>
                <Button variant="contained" onClick=
                    {() => {
                        this.props.exitRoom();
                        this.props.history.push('/main');
                    }}>
                    退出
                </Button>
            </div>
        );
    }
}

// <Chip className={this.props.classes.Chip} color={'primary'}>
//                                                    {text}
//                                            </Chip>

export const withStyleschatRoomComponent = withStyles<{} & ClassName>(styles)<Props>(ChatRoomComponent);
