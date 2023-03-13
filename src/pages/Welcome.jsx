import apperImage from "../assets/apper.png";

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
              Using AWS Amplify + React + Google Auth
            </div>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Welcome