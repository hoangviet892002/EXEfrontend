class AuthService {
  static async Login(userName, password) {
    const response = {
      onSuccess: true,
      data: {
        token: "",
      },
      message: "",
    };
    if (userName === "viet" && password === "viet") {
      response.onSuccess = true;
      response.data.token = "abcxyz";
      response.message = "Login successfully!!!!";
    } else {
      response.onSuccess = false;
      response.message = "Wrong message or password";
    }
    return response;
  }
}
export default AuthService;
