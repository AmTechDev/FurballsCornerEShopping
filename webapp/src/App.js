import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import WithAuth from './OrderedComponent/withAuth';
import MainDesign from './Designs/MainDesigns';
import HomeDesign from './Designs/HomeDesign';
import Timeline from './Components/Timeline';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import RecoverPass from './Pages/RecoverPass';
import ControlPanel from './Pages/ControlPanel';
import './main.scss';

//redux
import { connect } from 'react-redux';
import { setCurrentUser} from './redux/User/actions';

//Firebase Authentication
import { auth, handleUserAccount } from './firebase/code';


const App = props => {
  
  
  //componentDidMount(){
   // const { setCurrentUser } = this.props;
   // this.authPerciever = auth.onAuthStateChanged( async userAuth =>{
    //  if (userAuth){
    //    const userRef = await handleUserAccount(userAuth);
     //   userRef.onSnapshot(snapshot => {
     //     this.props.setCurrentUser({
     //       id: snapshot.id,
     //         ...snapshot.data()
    //      });
           
    //    })
    //  }
   //  this.props.setCurrentUser(userAuth);
  //  });
 // }; 

  const { setCurrentUser } = props;
  const { currentUser } = props;

  useEffect(() => {
    //return ( ) => {
      
    const authPerciever = auth.onAuthStateChanged( async userAuth =>{
      if (userAuth){
        const userRef = await handleUserAccount(userAuth);
        userRef.onSnapshot(snapshot => {
          props.setCurrentUser({
            id: snapshot.id,
              ...snapshot.data()
          });
           
        })
      }
      props.setCurrentUser(userAuth);
     });
      return () => {
       authListener();
      };
    //};

  }, [])
 
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
            render={() =>   (
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

          <Route path="/ControlPanel" render={() => (
            <WithAuth>
              <MainDesign >
               <ControlPanel />
              </MainDesign>
            </WithAuth>
          )} />
      
       </Switch>
      



      
    </div>
  );
 };


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispath => ({
  setCurrentUser: user => dispath(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
