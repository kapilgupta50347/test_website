export default function AccountDetails() {
  const user = {
    name: "Kapil Gupta",
    email: "kapil@example.com",
    address: "Greater Noida, UP",
  };

  return (
    <div className="min-h-screen bg-[var(--beige)] text-[var(--navy)] flex flex-col items-center py-12">
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>
    </div>
  );
}
