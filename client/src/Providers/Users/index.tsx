import { api } from "../../services";
import { createContext, ReactNode, useState } from "react";

export interface IUser {
  id: string;
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  cpf: string;
  birthdate: string;
  is_admin: boolean;
}

interface IUserProps {
  children: ReactNode;
}

interface UserProviderData {
  user: IUser[];
  createUser: (user: IUser) => void;
  listUser: ()=> void;
  updateUser: (user: IUser) => void;
  deleteUser: (user: IUser) => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

const UserProvider = ({ children }: IUserProps) => {
  const [user, setUsers] = useState<IUser[]>([]);

  const listUser = async () => {
    await api.get("users/").then((response) => {
      setUsers(response.data);
    });

  };

  const createUser = () => {};

  const updateUser = () => {};

  const deleteUser = () => {};

  return (
    <UserContext.Provider
      value={{
        user,
        listUser,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
