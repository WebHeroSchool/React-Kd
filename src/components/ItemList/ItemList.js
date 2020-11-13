import { StylesProvider } from '@material-ui/core';
import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (<ul className={styles.wrap}>
  {items.map(item => <li key={item.value}>
    <Item value={item.value} isDone={item.isDone} />
    </li>)}
</ul>);

export default ItemList;