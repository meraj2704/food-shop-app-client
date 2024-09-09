// Loading.js
'use client'
import Lottie from 'lottie-react'; // Correct default import

import loadingAnimation from '../../../public/animations/spoon.json'
// const loadingAnimation = '/spoon.json'

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie
        
        animationData={loadingAnimation}
        style={{ height: "300px", width: "300px" }} // Adjust size as needed
      />
    </div>
  );
};

export default Loader;
