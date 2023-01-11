import React from "react";

function Wrapper({ children, styles }) {
  return (
    <div className={`2xl:max-w-[60.5rem] px-32 mx-auto bg-gray-200 overflow-y-hidden font-roboto ${styles}`}>
      {children}
    </div>
  );
}

export default Wrapper;