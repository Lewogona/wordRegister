import axios from "./axios-service"

class AuthService {
  // Send log info to retrieve a token and all user infos
  login(user) {
    return axios
    .post("users/login", {
      pseudo: user.pseudo,
      password: user.password
    })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
        return response.data;
    });
  }
  // Clean localStorage
  logout() {
    localStorage.removeItem('user');
  }
  // Send user infos to create a new user
  register(user) {
    return axios.post('users/signup', {
      pseudo: user.pseudo,
      password: user.password
    });
  }
}

export default new AuthService();