import { createContext, useContext, useState } from 'react';

export interface User {
  name: string
  nameBusiness: string
  phone: string
  email: string
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => { }
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}