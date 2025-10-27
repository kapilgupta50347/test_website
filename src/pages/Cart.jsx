import React from "react";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/components/ui/use-toast";

export default function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Your cart is empty",
        description: "Add some 3D printed items before checking out!",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Proceeding to Checkout",
      description: "Redirecting to payment gateway...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#001F3F]/95 to-[#FFD23F]/15 py-16 px-6 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold gradient-text tracking-tight mb-3">
            Your Shopping Cart
          </h1>
          <p className="text-[#F5F5DC]/80 text-lg">
            Review your items and proceed to checkout.
          </p>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-24 bg-[#001F3F]/40 rounded-2xl shadow-inner border border-[#FFD23F]/20">
            <ShoppingCart className="mx-auto text-[#FFD23F] w-16 h-16 mb-4" />
            <p className="text-[#F5F5DC]/80 text-xl">
              Your cart is empty. Start adding products!
            </p>
          </div>
        ) : (
          <Card className="bg-[#001F3F]/50 border border-[#FFD23F]/30 shadow-xl rounded-2xl">
            <CardContent className="p-6 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between border-b border-[#FFD23F]/20 pb-4 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.jpg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl border border-[#FFD23F]/30"
                    />
                    <div>
                      <h2 className="text-[#F5F5DC] font-semibold text-lg">{item.name}</h2>
                      <p className="text-[#FFD23F]/90 font-medium">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent border border-[#FFD23F]/50 text-[#FFD23F] hover:bg-[#FFD23F]/20"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <Minus size={18} />
                    </Button>
                    <span className="text-[#F5F5DC] font-semibold min-w-[30px] text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-transparent border border-[#FFD23F]/50 text-[#FFD23F] hover:bg-[#FFD23F]/20"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Plus size={18} />
                    </Button>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2 text-red-400 hover:text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Footer Section */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                <Button
                  variant="ghost"
                  onClick={() => {
                    clearCart();
                    toast({
                      title: "Cart Cleared",
                      description: "All items have been removed from your cart.",
                    });
                  }}
                  className="text-[#FFD23F] hover:text-[#001F3F] hover:bg-[#FFD23F] border border-[#FFD23F]/50 transition-all"
                >
                  Clear Cart
                </Button>

                <div className="text-right">
                  <p className="text-[#F5F5DC]/80 text-lg">
                    Total:
                    <span className="text-[#FFD23F] font-semibold text-2xl ml-2">
                      ₹{getCartTotal().toFixed(2)}
                    </span>
                  </p>
                  <Button
                    onClick={handleCheckout}
                    className="mt-3 w-full sm:w-auto bg-gradient-to-r from-[#001F3F] to-[#FFD23F] hover:from-[#001A35] hover:to-[#FFC300] text-[#F5F5DC] font-semibold rounded-xl py-2 px-6 shadow-lg"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Inline styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #001F3F, #FFD23F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
