import
 { useState, useEffect } from 'react';

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//after read documentation for browser Event.
  useEffect(() => {
    document.addEventListener('mousemove', event => {
      setMousePosition({ x: event.clientX, y: event.clientY });//when component mount this will display on UI..
    });
    return () => {
      document.removeEventListener('mousemove', event => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });//cleanUp function
    };
  }, []);

  return (
    <div>
      <h1>Mouse Position</h1>
      <p style={{textAlign: 'center'}}>x: {mousePosition.x}, y: {mousePosition.y}</p>
    </div>
  );
}

export {MouseTracker};