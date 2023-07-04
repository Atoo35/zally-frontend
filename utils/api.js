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
        console.log(response);
        return response.data;
    } catch (err) {
        console.log('error in post')
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const get = async (endpoint, token) => {
    try {
        const response = await axios.get(API_URL + endpoint);
        console.log('response in get', response)
        return response.data;
    } catch (err) {
        console.log('error in get', err)
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const put = async (endpoint, body, token = null) => {
    try {
        const response = await axios.put(
            API_URL + endpoint,
            body,
            // getHeaders(token)
        );
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

const remove = async (endpoint, token = null) => {
    try {
        const response = await axios.delete(API_URL + endpoint, getHeaders(token));
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error(err?.response?.data || err);
        return err?.response?.data || err;
    }
};

export { post, get, put, remove };