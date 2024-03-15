import api from "../apiConfig";
import { API_PATHS } from "../apiPaths/apiPaths";
import { ILogin } from "../models/login";

export const login = async ({ registrationNumber, pinCode }: ILogin) => {
    const { data } = await api.post(API_PATHS.post.login, {
        registrationNumber: registrationNumber,
        pinCode: pinCode,
    });
    return data;
};
