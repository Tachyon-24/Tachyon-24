import React, { useState, useEffect, useRef } from 'react';

function LoadingPage() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnded = () => setLoading(false); // Define the function

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnded);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, []);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="relative w-full h-screen bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className="absolute bottom-4 right-4 bg-white text-black hover:bg-gray-200 p-2"
            onClick={handleSkip}
          >
            Skip Intro
          </button>
        </div>
      ) : (
        <div className="w-full h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Website!</h1>
        </div>
      )}
    </>
  );
}

export default LoadingPage;
