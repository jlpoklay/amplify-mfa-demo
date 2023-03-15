import apperImage from "../assets/apper.png";
import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function Landing() {
  return (
    <>
      <div className="bg-apper h-screen bg-cover" >
        <button className='w-20 h-10 bg-fuchsia-400' onClick={signOut}>
                {/* <img src={btn} alt="Google Sign In button"
                    className="googleSignIn"
                    style={{height:"45px", width:"190px"}}/> */}
                    SIGN OUT
        </button>
      </div>
    </>
  ) 
}

export default Landing