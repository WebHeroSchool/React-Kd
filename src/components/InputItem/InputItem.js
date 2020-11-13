import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<div className={styles.wrap}>
    <TextField 
        id="standard-basic" 
        label="Добавить новое"
        fullWidth
    />
    <button className={styles.btn}>+</button>
</div>);

export default InputItem;