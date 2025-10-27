import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[var(--beige)] flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[var(--navy)] rounded-lg p-3 mb-3 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-[var(--navy)] rounded-lg p-3 mb-4 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-[var(--cheese)] text-[var(--navy)] py-3 rounded-lg hover:bg-[var(--navy)] hover:text-[var(--cheese)] transition">
          Login
        </button>
      </div>
    </div>
  );
}
