import * as React from 'react';
import { LoginActions } from '../containers/login_container';
import { LoginState } from '../reducers/login_reducer';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { WithStyles, withStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> {}

const styles = {
    card: {
        maxWidth: 400,
        height: 300,
    },
    fullScreen: {
        height: '100%',
    },
};

type Props = OwnProps & LoginState & LoginActions & WithStyles<typeof styles>;

export const loginComponent: React.SFC<Props> = (props: Props) => {
    return (
        <div className={props.classes.fullScreen}>
            <Grid
                className={props.classes.fullScreen}
                container alignItems="center" justify="center" direction="row">
                <Grid item xs={12}>
                    <Grid container alignItems="center" justify="center" direction="row">
                        <Card className={props.classes.card}>
                            <CardContent>
                                <Grid
                                    container
                                    alignItems="center"
                                    justify="center" direction="row">
                                    <Grid item xs={12}>
                                        <TextField type="text" value={props.userid}
                                        label="email" fullWidth
                                        onChange={e => props.updateUserid(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                            <Icon>account_box</Icon>
                                            </InputAdornment>),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                @cs-ltd.co.jp
                                                </InputAdornment>),
                                        }}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        type={props.showPassword ? 'text' : 'password'}
                                        value={props.password}
                                        label="password" fullWidth
                                        onChange={e => props.updatePassword(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Icon>lock</Icon>
                                                </InputAdornment>),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="Toggle password visibility"
                                                        onClick={props.changeShowPassword}>
                                                        {props.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>),
                                        }}/>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" fullWidth onClick={
                                        () => {
                                            props.login();
                                            props.history.push('/main');
                                        }
                                    }>
                                    ログイン
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export const withStylesLoginComponent = withStyles(styles)(loginComponent);
