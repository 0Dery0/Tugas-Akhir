import React, { useState } from "react";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { login } from "../api/login";
import { useAuth } from "../hooks";
import { axios } from "../configs/axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password });

      if (res.data.message == "success") {
        const { data } = await axios.get("/users/me", {
          headers: { Authorization: `Bearer ${res.data.data.token}` },
        });

        dispatch({
          type: "LOGIN",
          payload: {
            creds: data.data.name,
            token: res.data.data.token,
            
          },
        });
        
        Swal.fire({
          title: "Login Succes!",
          text: "Welcome!",
          icon: "success",
        });
      }
    } catch (error) {
      if (error.response.data.message == "failed") {
        Swal.fire({
          title: "Failed Login",
          text: "Wrong Email or passowrd",
          icon: "warning",
        });
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center login ">
      <div className="background"></div>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center header">
        <img alt="logo" src={require("../assets/images/LoginLogo.png")} />
        <p>
          Haaaiiii, Semoga harimu menyenangkan <br />
          Masuk dulu yukk untuk melanjutkan...
        </p>
      </div>
      <div className="forms">
        <div className="space">
          <form>
            <label>Email</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </div>

            <label>Password</label>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                aria-label="password"
                aria-describedby="basic-addon1"
                required
              />
            </div>
          </form>
          <div className="text-end">
            <NavLink to={"/verifikasi"}>Lupa Kata Sandi</NavLink>
          </div>
        </div>
        <div className="tombol">
          <button
            onClick={handleSubmit}
            className="btn btn-warning"
            data-testid="enter"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}
