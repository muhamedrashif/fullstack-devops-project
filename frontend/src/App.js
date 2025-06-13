import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white p-10 rounded-2xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">🚀 DevOps Frontend Test Successful!</h1>
        <p className="text-lg">
          This is a sample React app deployed via <span className="font-semibold">Jenkins</span> and <span className="font-semibold">Nginx Reverse Proxy</span>.
        </p>
      </div>
    </div>
  );
}

export default App;

