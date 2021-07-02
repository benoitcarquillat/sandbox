import React from 'react';
import { AppContext } from '../context';

const AppProvider = ({ children }) => {
    const test = 'hello world context'

  return (
    <AppContext.Provider
      value={{
        test
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
