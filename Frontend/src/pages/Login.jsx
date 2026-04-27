import { useState } from "react";
import API from "../api/api";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  const submit = async () => {
    try {
      const res = await API.post("/auth/login", data);

      login(res.data);

      toast.success("Login successful");
      navigate("/"); //redirect.
    } catch (err) {
      toast.error(err.response?.data?.msg || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="glass w-[350px] p-6 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input className="input" placeholder="Email"
          onChange={(e)=>setData({...data,email:e.target.value})}
        />

        <input type="password" className="input" placeholder="Password"
          onChange={(e)=>setData({...data,password:e.target.value})}
        />

        <button className="btn w-full" onClick={submit}>Login</button>
      </div>
    </div>
  );
}