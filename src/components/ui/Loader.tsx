// Loading.js
import Player from 'lottie-react';

const Loading = () => {
  const loadingAnimation = "/loader.json";
  return (
    <div className="flex items-center justify-center h-screen">
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: "300px", width: "300px" }} // Adjust size as needed
      />
    </div>
  );
};

export default Loading;
