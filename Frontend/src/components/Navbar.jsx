import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import logo from "../assets/logo-2.png";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div className="glass flex justify-between items-center p-4 m-4">
      <Link to="/" className="flex items-center gap-2 font-bold text-xl">
        <img src={logo} alt="logo" className="w-15 h-10 rounded-full object-cover" />
        EpicBlogs
      </Link>

      <div className="flex gap-4 items-center">
        <button onClick={toggleDark}>
          {dark ? "☀️" : "🌙"}
        </button>

        {user ? (
          <>
            <Link to="/create">Write</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}