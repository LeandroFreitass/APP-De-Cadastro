/* eslint-disable */
import AsyncStorage from '@react-native-community/async-storage';

import React, {createContext, useContext, useEffect, useState} from 'react';

const UserContext = createContext({});

export const UserProvider = ({children}) => {
  const [userData, setUserData] = useState({ nome: 'BLABLA'});

  const putUserData = async userInfo => {
    setUserData(userInfo);

    await AsyncStorage.setItem(
      'OSDig:userData:userData',
      JSON.stringify(userInfo),
    );
  };

  const signIn = async ({ email, password }) => {

    if (!email || !password) {
      console.warn('Preencha todos os campos!');
      return;
    }

    try {
      const login = await api.post('/users/authenticate', {
        Email: email, 
        User_Password: password, 
      }) 
  
      AsyncStorage.clear()
      AsyncStorage.setItem('TOKEN', user.Device_Id)

      console.log(login)
    } catch (err) {
      console.warn('Erro: ' + err.message)
    }

    
    // await loadSignatureByUser(user.id)
    // await setUserData(user)
    // await validateDequimentCustomer(user.Company[0]?.id)
  }

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
