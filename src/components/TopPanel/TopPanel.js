import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

const TopPanel = ({playerPoint, computerPoint, changeTime, startGame}) => {

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: '0 auto'
        },
        input: {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 2),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    const classes = useStyles();

    return (
        <div>

            <AppBar position="static">
                <Toolbar>

                    {/*Кнопка "Начать"*/}
                    <Button className={classes.button} variant="contained" color="default" onClick={startGame}>Начать</Button>

                    {/* Инпут для ввода времени в mc*/}
                    <InputLabel style={{color: 'white'}}><strong>Ввести время:</strong></InputLabel>
                    <div className={classes.input}>
                        <InputBase
                            placeholder="2000"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={changeTime}
                        />
                    </div>

                    {/*Строка-счет*/}
                    <table style={{margin: 'auto'}}>
                        <thead>
                        <tr>
                            <th>Игрок / </th>
                            <th>Компьютер</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{playerPoint}</td>
                            <td>{computerPoint}</td>
                        </tr>
                        </tbody>
                    </table>

                </Toolbar>
            </AppBar>



        </div>
    )
};

export default TopPanel;