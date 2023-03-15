import apperImage from "../assets/apper.png";
import { Auth } from 'aws-amplify';
import React, { useContext } from 'react'
import { UserContext } from '../contexts/userContext';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function Landing() {
  const User = useContext(UserContext);
  return (
    <>
      <div className="bg-apper h-screen bg-cover" >
        <div className="sm:container mx-auto">
          <div className="pt-56 pl-24 flex-row">
            <div className="text-7xl font-bold text-white">
              Welcome {`${User.attributes.email}`}
            </div>
            <div className='w-20 h-10 mt-10'>
              <button className='w-20 h-10 bg-fuchsia-400' onClick={signOut}>
                        {/* <img src={btn} alt="Google Sign In button"
                            className="googleSignIn"
                            style={{height:"45px", width:"190px"}}/> */}
                            SIGN OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Landing