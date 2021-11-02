import axios from "axios";

const API_URL = "http://localhost:5000/";

class Auth {

    static STATUS_ERROR = 'error';
    static STATUS_SUCCESS = 'success';

    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "register", {
            username,
            email,
            password
        }).then((result) => {
            console.log(result.data)
            return result.data;
        }).catch((error) => {
            return error.response.data;
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new Auth();