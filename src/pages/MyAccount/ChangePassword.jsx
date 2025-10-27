import { useState } from "react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="min-h-screen bg-[var(--beige)] flex items-center justify-center text-[var(--navy)]">
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Change Password</h2>
        <input
          type="password"
          placeholder="Old Password"
          className="w-full border border-[var(--navy)] rounded-lg p-3 mb-3 outline-none"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full border border-[var(--navy)] rounded-lg p-3 mb-4 outline-none"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="w-full bg-[var(--cheese)] text-[var(--navy)] py-3 rounded-lg hover:bg-[var(--navy)] hover:text-[var(--cheese)] transition">
          Update Password
        </button>
      </div>
    </div>
  );
}
