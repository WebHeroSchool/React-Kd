import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete}) => (
  <ul className={styles.wrap}>
    {items.map(item => 
      <li key={item.id}>
        <Item 
          value={item.value} 
          isDone={item.isDone}
          id={item.id}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      </li>)}
  </ul>);

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;