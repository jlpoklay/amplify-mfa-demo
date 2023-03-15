import Welcome from './Welcome.jsx'
import Landing from './Landing.jsx';
import { withUser } from '../contexts/userContext';
import React, { useContext } from 'react'
import { UserContext } from '../contexts/userContext';

function Main (props) {
  const User = useContext(UserContext);
  console.log(User)
  return (
    <>
      {User
            ? <Landing/>
            : <Welcome/>
      }
    </>
  )
}

export default Main