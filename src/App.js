import React from 'react';
import './App.css';
import HomePage from './paginas/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
import ShopPage from './paginas/shop/shop.component.jsx'

const SalgadosPagina = () => (
  <div>
    <h1>Outra página</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = { HomePage }/>
        <Route path='/shop' component = { ShopPage }/>
      </Switch>
        
        
    </div>
  );
}

export default App;
