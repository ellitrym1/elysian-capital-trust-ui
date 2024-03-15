import { useMutation } from "react-query";
import { login } from "../postRequests/loginRequest";
import { ILogin } from "../models/login";

const useLoginUser = () => {
    const loginMutation = useMutation(login);

    const loginUser = async ({ registrationNumber, pinCode }: ILogin) => {
        const token = await loginMutation.mutateAsync({
            registrationNumber,
            pinCode,
        });
        return token;
    };

    return { loginUser, ...loginMutation };
};

export default useLoginUser;
