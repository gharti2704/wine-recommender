import React, { useState } from 'react';
import axios from 'axios';
import View from './View.jsx';

const App = () => {

  const [dish, setDish] = useState('');
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(true);

  let changeView = () => {
    setOpenModal(false);
    document.getElementById('form').reset();
  };

  let changeHandler = (e) => {
    setDish(e.target.value);
  };

  let clickHandler = (e) => {
    e.preventDefault();
    axios.get(`/dish/${dish.toLowerCase()}`)
      .then(data => {
        setOpenModal(true);
        setData(data.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="main">
      <h1>Wine Recommender</h1>
      <p>Please enter the food to get a pairing for. This can be a dish ("steak"), an ingredient ("salmon"), or a cuisine ("italian").</p>
      <form action="#" id="form" onSubmit={clickHandler}>
        <input type="text"
          onChange={changeHandler}
          palceholder="Dish name" />
        <button type="submit">Pair</button>
      </form>

      <View
        data={data}
        changeView={changeView}
        openModal={openModal}
      />
    </div>

  )

}



export default App;