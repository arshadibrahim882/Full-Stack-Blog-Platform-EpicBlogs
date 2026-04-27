import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

export default function AuthorProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get(`/users/${id}`).then(res => setUser(res.data));
  }, [id]);

  if (!user) 
    return <p>Loading...</p>;

  return (
    <div className="flex justify-center mt-10">
      <div className="glass p-6 w-[400px] text-center">
        <img
          src={user.avatar}
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h2 className="text-xl font-bold mt-3">{user.name}</h2>
        <p className="opacity-70">{user.email}</p>
        <p className="mt-2">{user.bio}</p>
      </div>
    </div>
  );
}