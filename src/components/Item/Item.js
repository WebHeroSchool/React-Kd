import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone, id, onClickDone }) => (<div className={styles.flex}>
    <div>
        <Checkbox
            value="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            onClick={() => onClickDone(id)}
        />
        <span className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone
            })
        }>
        {value}
        </span>
    </div>
    <div>
        <IconButton aria-label="delete">
            <DeleteIcon />
        </IconButton>
    </div>
</div>);

export default Item;