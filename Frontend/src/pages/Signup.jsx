import { useState } from "react";
import API from "../api/api";
import toast from "react-hot-toast";

export default function Signup() {
    const [data, setData] = useState({ email: "", password: "" });

    const submit = async () => {
        try {
            await API.post("/auth/signup", data);
            toast.success("Signup successful");
        } catch (err) {
            toast.error(err.response?.data?.msg || "User already exists");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="glass w-[350px] p-6 flex flex-col gap-4">
                <h2 className="text-xl font-bold text-center">Signup</h2>

                <input
                    className="input"
                    placeholder="Email"
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />

                <button className="btn w-full" onClick={submit}>
                    Signup
                </button>
            </div>
        </div>
    );
}