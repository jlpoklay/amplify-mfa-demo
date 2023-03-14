import React, { useEffect, useState } from 'react';
import { Hub, Auth } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import Welcome from './pages/Welcome.jsx'
import Landing from './pages/Landing.jsx';


function App() {
  // init state to store user and show loader 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // get user
  async function getUser() {
  try {
  const token = await Auth.currentAuthenticatedUser();
    setLoading(false);
    setUser(token);
  } catch(err) {
    console.log(err);
    setLoading(false);
    }
  }
  //listen for sign in + out events, if neither are happening check if user exists 
  useEffect(() => {
  Hub.listen('auth', ({ payload }) => {
    if (payload.event === 'signIn') {
        return getUser();
  }
    if (payload.event === 'signOut') {
        setUser(null);
        return setLoading(false);
      }
  });
  getUser();
  }, []);

  return (
    <>
      {user
        ? <Landing/>
        : <Welcome/>
      }
    </>
  );
}

export default App;
