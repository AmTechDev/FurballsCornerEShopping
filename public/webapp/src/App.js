import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';


//Components and Pages
import WithAdminAuth from './OrderedComponent/withAdminAuth';
import WithAuth from './OrderedComponent/withAuth';
import MainDesign from './Designs/MainDesigns';
import HomeDesign from './Designs/HomeDesign';
import Timeline from './Components/Timeline';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import RecoverPass from './Pages/RecoverPass';
import Aboutus from './Pages/AboutUs';
import './main.css';

//Admin
import RedirectAdminPage from './Components/RedirectAdminPage';
import Admin from './Pages/Admin';
import AdminUIDesign from './Designs/AdminUIDesign';

//Account 
import AccountUiDesign from './Designs/AccountUiDesign';
import Account from './Pages/Account';
//redux
import { setCurrentUser, currentUser, userCheckSession} from './redux/User/action';

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
    dispatch(userCheckSession());

     // return () => {
     //   authPerciever();
     // };
    //};

  }, []);
 
  return (
    <div className="App">
    
    <RedirectAdminPage />
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
            <Route path="/Account" exact={true} render={() => (
            <WithAuth>
              
              <AccountUiDesign>
                <Account />
              </AccountUiDesign>
              
              
            </WithAuth>
          )} />
          <Route path="/Register" render={() => (
              <Register />
          )} />

          <Route path="/RecoverPass" render={() => (
              <RecoverPass />
          )} />   
          <Route path="/Aboutus" render={() => (
            <HomeDesign>
              <Aboutus />  
            </HomeDesign>
                     
          )} />

          <Route path="/Admin" render={() => (
           <WithAdminAuth>
             <AdminUIDesign>
                <Admin />
              </AdminUIDesign>
           </WithAdminAuth>
              
              
          )} />
      
       </Switch>
      



      
    </div>
  );
 };

 

export default App;
