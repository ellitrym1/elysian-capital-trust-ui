import { ILogin } from "@/api/models/login";
import { IRegister } from "@/api/models/register";
import useLoginUser from "@/api/postQueries/loginQuery";
import useRegisterUser from "@/api/postQueries/registerQuery";
import { ReactNode, createContext, useContext, useState } from "react";

interface IUserContext {
    loggedIn: boolean;
    login: ({ registrationNumber, pinCode }: ILogin) => Promise<void>;
    logout: () => void;
    register: ({
        firstName,
        lastName,
        phoneNumber,
        email,
        dateOfBirth,
        address,
    }: IRegister) => Promise<void>;
}

interface UserContextProviderProps {
    children: ReactNode;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const { loginUser } = useLoginUser();
    const { registerUser } = useRegisterUser();

    const login = async ({ registrationNumber, pinCode }: ILogin) => {
        try {
            const data = await loginUser({ registrationNumber, pinCode });
            if (data.token) {
                sessionStorage.setItem("token", data.token);
                setLoggedIn(true);
            } else {
                throw new Error("No token found in response data");
            }
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const logout = () => {
        sessionStorage.removeItem("token");
        setLoggedIn(false);
    };

    const register = async ({
        firstName,
        lastName,
        phoneNumber,
        email,
        dateOfBirth,
        address,
    }: IRegister) => {
        try {
            await registerUser({
                firstName,
                lastName,
                phoneNumber,
                email,
                dateOfBirth,
                address,
            });
        } catch (error) {
            console.error("Register failed:", error);
            throw error;
        }
    };

    return (
        <UserContext.Provider value={{ loggedIn, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );
};
