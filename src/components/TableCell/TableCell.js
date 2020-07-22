import React from 'react';
import './TableCell.css';

const TableCell = props => {

    /*props.currentCell = 'yellow';*/

    const colors = () => {
        if (props.color === 'yellow') {
            return 'button current'
        } else if (props.color === 'green') {
            return 'button user'
        } else if (props.color === 'red') {
            return 'button error'
        }
        return 'button';
    };


    return (
        <button
            color="primary"
            className={colors()}
            onClick={() => props.onChangeButton(props.name)}
        >
            {props.name}
        </button>
    )
};

export default TableCell;