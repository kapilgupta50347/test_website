import { Link } from "react-router-dom";

export default function MyAccount() {
  return (
    <div className="min-h-screen bg-[var(--beige)] text-[var(--navy)] flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-6 text-[var(--navy)]">My Account</h1>

      <div className="grid gap-4 w-full max-w-md">
        <Link
          to="account-details"
          className="bg-[var(--navy)] text-[var(--beige)] py-3 px-4 rounded-lg hover:bg-[var(--cheese)] hover:text-[var(--navy)] transition"
        >
          Account Details
        </Link>
        <Link
          to="orders"
          className="bg-[var(--navy)] text-[var(--beige)] py-3 px-4 rounded-lg hover:bg-[var(--cheese)] hover:text-[var(--navy)] transition"
        >
          Orders
        </Link>
        <Link
          to="track-order"
          className="bg-[var(--navy)] text-[var(--beige)] py-3 px-4 rounded-lg hover:bg-[var(--cheese)] hover:text-[var(--navy)] transition"
        >
          Track Order
        </Link>
        <Link
          to="change-password"
          className="bg-[var(--navy)] text-[var(--beige)] py-3 px-4 rounded-lg hover:bg-[var(--cheese)] hover:text-[var(--navy)] transition"
        >
          Change Password
        </Link>
        <Link
          to="login"
          className="bg-[var(--cheese)] text-[var(--navy)] py-3 px-4 rounded-lg hover:bg-[var(--navy)] hover:text-[var(--cheese)] transition"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
