import React, { createContext, useState } from "react";

//import axios from "axios";
export const MyNewContext = createContext();
const MyContext = ({ children }) => {
  const [discoverData, setDiscoverData] = useState([]);

  return (
    <>
      <MyNewContext.Provider
        value={{
          discoverData,
          setDiscoverData,
        }}
      >
        {children}
      </MyNewContext.Provider>
    </>
  );
};

export default MyContext;
