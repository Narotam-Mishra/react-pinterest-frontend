import { useState } from 'react'
import './AuthPage.css';
import Image from '../../components/image/Image';
import apiRequest from '../../utils/apiRequest';
import { useNavigate } from 'react-router';
import useAuthStore from '../../utils/authStore';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { setCurrentUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);
    // console.log("User data:", data);

    try {
      const response = await apiRequest.post(
        `/users/auth/${isRegister ? "register" : "login"}`,
        data
      );

      // set global state (zustand)
      setCurrentUser(response.data);

      navigate('/');
      // console.log("User data:", response.data);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/general/logo.png" w={36} h={36} alt="" />
        <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key="registerForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                id="username"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input
                type="text"
                placeholder='Name'
                required
                name="displayName"
                id="displayName"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
              />
            </div>

            <button type="submit">Register</button>
            <p onClick={() => setIsRegister(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form key="loginForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
              />
            </div>

            <button type="submit">Login</button>
            <p onClick={() => setIsRegister(true)}>
              Don&apos;t have an account? <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthPage