// Wrapper.jsx
import React from 'react';

function Wrapper({ children, className }) {
  return (
    <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || ""}`}>
      {children}
    </div>
  );
}

export default Wrapper;