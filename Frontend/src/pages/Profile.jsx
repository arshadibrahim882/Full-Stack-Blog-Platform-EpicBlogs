import { useEffect, useState } from "react";
import API from "../api/api";
import toast from "react-hot-toast";

export default function Profile() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    name: "",
    bio: "",
  });
  const [avatar, setAvatar] = useState(null);

  const fetchProfile = async () => {
    const res = await API.get("/users/profile");
    setUser(res.data);
    setForm({
      name: res.data.name || "",
      bio: res.data.bio || "",
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const updateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("bio", form.bio);

      if (avatar) 
        formData.append("avatar", avatar);

      await API.put("/users/profile", formData);

      toast.success("Profile updated!");
      fetchProfile();
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-5">
      <h1 className="text-3xl font-bold">Your Profile</h1>

      {/*AVATAR*/}
      <div className="flex flex-col items-center gap-3">
        <img
          src={user.avatar || "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"}
          className="w-24 h-24 rounded-full object-cover"
        />

        <input
          type="file"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="text-sm"
        />
      </div>

      {/*EMAIL(READ ONLY)*/}
      <input
        className="input"
        value={user.email || ""}
        disabled
      />

      {/*NAME*/}
      <input
        className="input"
        placeholder="Your name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      {/*BIO*/}
      <textarea
        className="input"
        placeholder="Your bio..."
        value={form.bio}
        onChange={(e) =>
          setForm({ ...form, bio: e.target.value })
        }
      />

      <button className="btn w-full" onClick={updateProfile}>
        Update Profile
      </button>
    </div>
  );
}