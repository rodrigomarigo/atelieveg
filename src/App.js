import React from 'react';
import './App.css';
import HomePage from './paginas/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
import ShopPage from './paginas/shop/shop.component.jsx';
import Header from './componentes/header/header.component.jsx';
import SignInSignOutPage from './paginas/sign-in-sign-up/sign-in-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
    super();

    this.state = { 
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShop => {
          this.setState({
            currentUser: {
              id: snapShop.id, 
              ...snapShop.data()
            }
          })
        })
      }
      else{
        this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component = { HomePage }/>
            <Route path='/shop' component = { ShopPage }/>
            <Route path='/signin' component = { SignInSignOutPage }/>
          </Switch>  
      </div>
    );
  }
}
export default App;
