
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { temples } from "@/data/temples";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface PrasadItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  templeId: string;
}

const prasadItems: PrasadItem[] = [
  {
    id: "1",
    name: "Laddu Prasad",
    description: "Traditional sweet offering blessed at the temple",
    price: 151,
    image: "https://via.placeholder.com/300x200?text=Laddu+Prasad",
    templeId: "1"
  },
  {
    id: "2",
    name: "Modak Prasad",
    description: "Sweet dumpling offering for special occasions",
    price: 201,
    image: "https://via.placeholder.com/300x200?text=Modak+Prasad",
    templeId: "2"
  },
  {
    id: "3",
    name: "Kheer Prasad",
    description: "Sacred rice pudding blessed by priests",
    price: 111,
    image: "https://via.placeholder.com/300x200?text=Kheer+Prasad",
    templeId: "3"
  },
  {
    id: "4",
    name: "Halwa Prasad",
    description: "Semolina sweet offering for prosperity",
    price: 131,
    image: "https://via.placeholder.com/300x200?text=Halwa+Prasad",
    templeId: "1"
  },
  {
    id: "5",
    name: "Panjiri Prasad",
    description: "Nutritious whole wheat offering for strength",
    price: 171,
    image: "https://via.placeholder.com/300x200?text=Panjiri+Prasad",
    templeId: "2"
  },
  {
    id: "6",
    name: "Chandan Tilak",
    description: "Sacred sandalwood paste for blessings",
    price: 51,
    image: "https://via.placeholder.com/300x200?text=Chandan+Tilak",
    templeId: "4"
  }
];

const PrasadBooking = () => {
  const [cart, setCart] = useState<Map<string, number>>(new Map());
  const { toast } = useToast();

  const addToCart = (itemId: string) => {
    setCart(prevCart => {
      const newCart = new Map(prevCart);
      const currentQuantity = prevCart.get(itemId) || 0;
      newCart.set(itemId, currentQuantity + 1);
      
      toast({
        title: "Added to cart",
        description: "Prasad item has been added to your cart",
      });
      
      return newCart;
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const newCart = new Map(prevCart);
      const currentQuantity = prevCart.get(itemId) || 0;
      
      if (currentQuantity > 1) {
        newCart.set(itemId, currentQuantity - 1);
      } else {
        newCart.delete(itemId);
      }
      
      return newCart;
    });
  };

  const getCartQuantity = (itemId: string) => {
    return cart.get(itemId) || 0;
  };

  const getTotalItems = () => {
    let total = 0;
    cart.forEach(quantity => {
      total += quantity;
    });
    return total;
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((quantity, itemId) => {
      const item = prasadItems.find(item => item.id === itemId);
      if (item) {
        total += item.price * quantity;
      }
    });
    return total;
  };

  const checkout = () => {
    toast({
      title: "Order placed successfully",
      description: `Your prasad order of ₹${getTotalPrice()} has been placed`,
    });
    setCart(new Map());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Temple Prasad Booking</h1>
          <p className="text-gray-600">
            Order sacred prasad from temples across India
          </p>
        </div>
        
        <div className="relative">
          <Link to="/cart" className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md">
            <ShoppingCart className="h-5 w-5" />
            <span>Cart ({getTotalItems()})</span>
          </Link>
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            placeholder="Search prasad items..."
            className="flex-grow border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option value="">All Temples</option>
            {temples.map((temple) => (
              <option key={temple.id} value={temple.id}>
                {temple.name}
              </option>
            ))}
          </select>
          <select className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
          <Button className="bg-orange-500 hover:bg-orange-600">
            Search
          </Button>
        </div>
      </div>

      {/* Prasad Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {prasadItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full h-1/2"></div>
              <div className="absolute bottom-2 left-2 text-white">
                <p className="font-medium">{temples.find(temple => temple.id === item.templeId)?.name}</p>
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between">
                <p className="font-bold text-lg">₹{item.price}</p>
                
                {getCartQuantity(item.id) === 0 ? (
                  <Button 
                    onClick={() => addToCart(item.id)} 
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center">{getCartQuantity(item.id)}</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => addToCart(item.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart Summary (Fixed at Bottom) */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <p className="text-gray-600">{getTotalItems()} items in cart</p>
              <p className="font-bold text-lg">₹{getTotalPrice()}</p>
            </div>
            <Button 
              onClick={checkout}
              className="bg-orange-500 hover:bg-orange-600 px-8"
            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrasadBooking;
