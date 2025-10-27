export default function Orders() {
  const orders = [
    { id: 1, item: "Custom Keychain", date: "Oct 20, 2025", status: "Delivered" },
    { id: 2, item: "3D Printed Showpiece", date: "Oct 22, 2025", status: "In Progress" },
  ];

  return (
    <div className="min-h-screen bg-[var(--beige)] text-[var(--navy)] p-8">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 border border-[var(--navy)] rounded-lg bg-white hover:shadow-md transition"
          >
            <p><strong>Item:</strong> {order.item}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="text-[var(--cheese)]">{order.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
