import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem.one}/></li>
    <li><Item todoItem={todoItem.two}/></li>
    <li><Item todoItem={todoItem.three}/></li>
  </ul>);

export default ItemList;