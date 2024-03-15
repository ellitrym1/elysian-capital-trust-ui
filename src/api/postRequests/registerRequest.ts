import api from "../apiConfig";
import { API_PATHS } from "../apiPaths/apiPaths";
import { IRegister } from "../models/register";

export const register = async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    dateOfBirth,
    address,
}: IRegister) => {
    const { data } = await api.post(API_PATHS.post.register, {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        dateOfBirth: dateOfBirth,
        address: address,
    });
    return data;
};
