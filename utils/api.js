import axios from "axios";
const API_URL = "http://localhost:8080";

// const getAccessToken = () => {
//     return getLS("jwt_token");
// };

// const getHeaders = (token) => {
//     if (!token) token = getAccessToken();
//     if (token)
//         return {
//             headers: {
//                 Accept: "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//         };
//     return {
//         headers: {
//             Accept: "application/json",
//         },
//     };
// };

const post = async (endpoint, body, token) => {
    try {
        const response = await axios.post(
            API_URL + endpoint,
            body,
            // getHeaders(token)
        );
        return response.data;
    } catch (err) {
        return err?.response?.data || err;
    }
};

const get = async (endpoint, token) => {
    try {
        const response = await axios.get(API_URL + endpoint);
        return response.data;
    } catch (err) {
        return err?.response?.data || err;
    }
};

export { post, get };
