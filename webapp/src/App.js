import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainDesign from './Designs/MainDesigns';
import HomeDesign from './Designs/HomeDesign';
import Timeline from './Components/Timeline';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import RecoverPass from './Pages/RecoverPass';
import './main.scss';

//redux
import { connect } from 'react-redux';
import { setCurrentUser} from './redux/User/actions';

//Firebase Authentication
import { auth, handleUserAccount } from './firebase/code';


class App extends Component {
  
  authPerciever = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.authPerciever = auth.onAuthStateChanged( async userAuth =>{
      if (userAuth){
        const userRef = await handleUserAccount(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
              ...snapshot.data()
          });
           
        })
      }
     this.props.setCurrentUser(userAuth);
    });

  };
  componentWillUnmount(){
    this.authPerciever;

  }

  render(){

    const { currentUser } = this.props;

  return (
    <div className="App">
       <Switch>
          <Route path="/" exact={true} render={() => (
            <HomeDesign > 
              <Route path="/" exact={true} component={Timeline} />
              <Home />
             
            </HomeDesign>
          )
          } />
          <Route path="/Login" 
            render={() =>  currentUser ? <Redirect to="/" /> : (
              <MainDesign >
                <Login />
              </MainDesign>

            )} />
          <Route path="/Register" render={() => currentUser ? <Redirect to="/" /> : (
            <MainDesign >
              <Register />
            </MainDesign>

          )} />

          <Route path="/RecoverPass" render={() => (
            <MainDesign >
              <RecoverPass />
            </MainDesign>

          )} />

       
        
       </Switch>
      



      
    </div>
  );
 };
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispath => ({
  setCurrentUser: user => dispath(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
