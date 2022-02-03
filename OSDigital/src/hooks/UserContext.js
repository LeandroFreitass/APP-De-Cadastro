/* eslint-disable */
import AsyncStorage from '@react-native-community/async-storage';

import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext({});

export const UserProvider = ({children}) => {
  const [userData, setUserData] = useState({});

  const putUserData = async userInfo => {
    setUserData(userInfo);

    await AsyncStorage.setItem(
      'OSDig:userData:userData',
      JSON.stringify(userInfo),
    );
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await AsyncStorage.getItem('codeburger:userData');

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };
  }, []);

  return (
    <UserContext.Provider value={{putUserData, userData}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext');
  }

  return context;
};
