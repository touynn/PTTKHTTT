// _app.js (or a custom layout component)
"use client"
import { useEffect } from 'react';

function MyApp() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render
  
  return <div></div>;
}

export default MyApp;