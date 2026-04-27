import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateBlog from "./pages/CreateBlog";
import BlogDetail from "./pages/BlogDetail";
import EditBlog from "./pages/EditBlog";
import Profile from "./pages/Profile";
import AuthorProfile from "./pages/AuthorProfile";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/useAuth";
import { Navigate } from "react-router-dom";
import Footer from "./components/Footer";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateBlog />
            </PrivateRoute>
          }
        />

        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/edit/:id" element={<EditBlog />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/author/:id" element={<AuthorProfile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}