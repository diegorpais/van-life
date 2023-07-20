import { ReactNode, createContext, useContext, useState } from 'react';
import MyVansModel from '../models/host-my-vans.model';

interface MyVanDetailProviderProps {
  children?: ReactNode;
}

interface MyVanDetailContextData {
  myVanData: MyVansModel;
  setVanToContext: (an: MyVansModel) => void;
}

export const MyVanDetailContext = createContext<MyVanDetailContextData>({} as MyVanDetailContextData);

export function MyVanDetailProvider({ children }: MyVanDetailProviderProps) {

  const [myVanData, setMyVanData] = useState<MyVansModel>({} as MyVansModel);

  const setVanToContext = (van: MyVansModel) => {
    setMyVanData(van);
  }


  return (
    <MyVanDetailContext.Provider value={{ myVanData, setVanToContext }}>
      {children}
    </MyVanDetailContext.Provider>
  )

}

export function useMyVanDetail() {
  const context = useContext(MyVanDetailContext);
  return context;
}