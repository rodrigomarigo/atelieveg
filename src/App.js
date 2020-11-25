import React from 'react';
import './App.css';
import HomePage from './paginas/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopPage from './paginas/shop/shop.component.jsx';
import Header from './componentes/header/header.component.jsx';
import SignInSignOutPage from './paginas/sign-in-sign-up/sign-in-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { render } from '@testing-library/react';
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShop => {
          setCurrentUser({
              id: snapShop.id, 
              ...snapShop.data(),
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
        <Header/>
          <Switch>
            <Route exact path='/' component = { HomePage }/>
            <Route path='/shop' component = { ShopPage }/>
            <Route path='/signin' component = { SignInSignOutPage }/>
          </Switch>  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
