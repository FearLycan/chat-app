import axios from "axios";

const API_URL = "http://localhost:5000/";

class Auth {

    static STATUS_ERROR = 'error';
    static STATUS_SUCCESS = 'success';

    login(email, password) {
        return axios
            .post(API_URL + "login", {
                email,
                password
            })
            .then(response => {
                if (response.data.user.token) {
                    localStorage.setItem("user", JSON.stringify({
                        _id: response.data.user._id,
                        username: response.data.user.username,
                    }));
                }

                return response.data;
            }).catch((error) => {
                return error.response.data;
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