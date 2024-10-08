import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center flex-grow">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-4 border-gradient-to-r from-[#897EFF] to-[#FFCEa0] border-solid rounded-full animate-spin"></div>
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading...</h2>
        <p className="mt-2 text-gray-500">Please wait while we load the content</p>
      </div>
    </div>
  );
};

export default LoadingPage;