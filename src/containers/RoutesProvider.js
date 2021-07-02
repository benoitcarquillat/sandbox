import React, { useState, useCallback } from 'react';
import { RoutesContext } from 'context/contexts';
// import { MdDomain } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const pathsNames = [];

const RoutesProvider = ({ children }) => {
  const [routesNames, setRoutesNames] = useState(pathsNames);
  const { pathname } = useLocation();


  const stringifiedRoutesNames = JSON.stringify(routesNames);
  const addRouteName = useCallback(
    ({ path, name }) => setRoutesNames({ ...routesNames, [path]: name }),
    // eslint-disable-next-line
    [stringifiedRoutesNames],
  );

  const addCurrentRouteName = useCallback(
    name => addRouteName({ path: pathname, name }),
    [addRouteName, pathname],
  );

  return (
    <RoutesContext.Provider
      value={{
        routesNames,
        addRouteName,
        addCurrentRouteName,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

export default RoutesProvider;
