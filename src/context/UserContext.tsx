import { createContext, useContext, useState } from 'react';

export interface User {
  name: string
  businessName: string
  phone: string
  email: string
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  clearUser: () => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => { },
  clearUser: () => { },
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}