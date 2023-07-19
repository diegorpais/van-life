import { ReactNode, createContext, useContext, useState } from 'react';

interface LoginProviderProps {
  children?: ReactNode;
}

interface LoginContextData {
  isSignedIn: boolean;
  signin: () => void;
  signout: () => void;
}

export const LoginContext = createContext<LoginContextData>({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }

  return (
    <LoginContext.Provider value={{ isSignedIn, signin, signout }}>
      {children}
    </LoginContext.Provider>
  )
}

export function useLogin() {
  const context = useContext(LoginContext);
  return context;
}