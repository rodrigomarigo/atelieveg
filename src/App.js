import React from 'react';
import './App.css';
import HomePage from './paginas/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';

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
        <Route path='/salgados' component = { SalgadosPagina }/>
      </Switch>
        
        
    </div>
  );
}

export default App;
