import { createContext, useState } from "react";
type UserContextProviderProps = {
  children: React.ReactNode;
};
export type AuthUser = {
  name: string;
  email: string;
};
type userContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const UserContext = createContext<userContextType | null>(null);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
