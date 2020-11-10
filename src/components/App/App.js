import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
  const items = [
    {
      value: 'Написать новое приложение'
    },
    {
      value: 'Сделать коммит'
    },
    {
      value: 'Запушить'
    }
  ];

  return (
  <div>
    <h1>Важные дела:</h1>
    <InputItem />
    <ItemList items={items}/>
    <Footer count={3} />
  </div>);
}

export default App;

