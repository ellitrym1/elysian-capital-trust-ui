import axios from "axios";

const baseURL = "/api/v1";

const instance = axios.create({
    baseURL,
});

export default instance;
