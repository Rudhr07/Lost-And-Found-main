import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogin = (e) => {
    e.preventDefault();

    // Predefined admin credentials
    const adminUsername = "admin";
    const adminPassword = "admin123";

    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem("isAdminLoggedIn", true); // Store login state
      enqueueSnackbar("Login Successful", { variant: "success" });
      navigate("/post"); // Redirect to the post page
    } else {
      enqueueSnackbar("Invalid Credentials", { variant: "error" });
    }
  };

  return (
    <main id="adminLogin">
      <section>
        <h1 className="lfh1">Admin Login</h1>
        <div className="form-container">
          <form className="form" onSubmit={handleLogin}>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <button type="submit" className="submitbtn">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}