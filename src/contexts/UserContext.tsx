import { ReactNode, createContext, useContext, useState } from "react";

type UserContext = {
  user: string;
  setUser: (newUser: string) => void;
};

const initialState: UserContext = { user: "", setUser: () => {} };

export const UserContext = createContext<UserContext>(initialState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
