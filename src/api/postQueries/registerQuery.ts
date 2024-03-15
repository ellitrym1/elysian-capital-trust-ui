import { useMutation } from "react-query";
import { register } from "../postRequests/registerRequest";
import { IRegister } from "../models/register";

const useRegisterUser = () => {
    const registerMutation = useMutation(register);

    const registerUser = async ({
        firstName,
        lastName,
        phoneNumber,
        email,
        dateOfBirth,
        address,
    }: IRegister) => {
        const token = await registerMutation.mutateAsync({
            firstName,
            lastName,
            phoneNumber,
            email,
            dateOfBirth,
            address,
        });
        return token;
    };

    return { registerUser, ...registerMutation };
};

export default useRegisterUser;
