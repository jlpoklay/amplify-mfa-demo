import { Auth } from 'aws-amplify';
import apperImage from "../assets/apper.png";
import { withUser } from '../contexts/userContext';

function Welcome() {

  return (
    <>
      <div className="bg-apper h-screen bg-cover" >
        <div className="sm:container mx-auto">
          <div className="pt-56 pl-24 flex-row">
            <div className="text-7xl font-bold text-white">
              MFA DEMO
            </div>
            <div className="text font-semibold text-white">
              Using AWS Amplify + React + HostedUI
            </div>
            <div className='w-20 h-10'>
              <button className='w-20 h-10 bg-fuchsia-400' onClick={() => Auth.federatedSignIn()}>
                {/* <img src={btn} alt="Google Sign In button"
                    className="googleSignIn"
                    style={{height:"45px", width:"190px"}}/> */}
                    LOGIN
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Welcome