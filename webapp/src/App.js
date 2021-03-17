import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const dispatch = useDispatch();

  useEffect(() => {
    //return ( ) => {
      
    const authPerciever = auth.onAuthStateChanged( async userAuth =>{
      if (userAuth){
        const userRef = await handleUserAccount(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            id: snapshot.id,
              ...snapshot.data()
          }));
           
        })
      }
      setCurrentUser(userAuth);
     });
      return () => {
       authPerciever();
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
                <Login />
            )} />
          <Route path="/Register" render={() => (
              <Register />
          )} />

          <Route path="/RecoverPass" render={() => (
              <RecoverPass />
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

export default App;
