'use client'
import { createContext, useState } from 'react';
import { useSession } from 'next-auth/react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [openL, setOpenL] = useState(false);
  const [change, setChange] = useState(false);
  const { data: session, status } = useSession();

  const handleChange = (e) => {
    e.preventDefault();
    setChange(!change);
  };
  const closeModalL = ()=>{
    setOpenL(false)
  }
  const openModalL = ()=>{
    setOpenL(true)
  }
  const handleOpenL = () => {
    setOpenL(true);
    if (status === 'loading') {
      console.log('loading');
    }
    if (session) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  return (
    <AuthContext.Provider value={{ openL, change, handleChange, handleOpenL ,closeModalL,openModalL}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
