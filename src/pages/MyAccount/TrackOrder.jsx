import { useState } from "react";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");

  return (
    <div className="min-h-screen bg-[var(--beige)] flex flex-col items-center justify-center p-6 text-[var(--navy)]">
      <h2 className="text-2xl font-bold mb-6">Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        className="border border-[var(--navy)] rounded-lg p-3 w-full max-w-md mb-4 outline-none"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button className="bg-[var(--cheese)] text-[var(--navy)] py-3 px-6 rounded-lg hover:bg-[var(--navy)] hover:text-[var(--cheese)] transition">
        Track Order
      </button>
    </div>
  );
}
