
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Plus, Minus, Clock, Package } from "lucide-react";
import { temples } from "@/data/temples";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface PrasadItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  templeId: string;
}

interface Order {
  id: string;
  items: {
    itemId: string;
    quantity: number;
  }[];
  status: "processing" | "shipped" | "delivered";
  date: string;
  trackingId: string;
  estimatedDelivery: string;
}

const prasadItems: PrasadItem[] = [
  {
    id: "1",
    name: "Laddu Prasad",
    description: "Traditional sweet offering blessed at the temple",
    price: 151,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2071&auto=format&fit=crop",
    templeId: "1"
  },
  {
    id: "2",
    name: "Modak Prasad",
    description: "Sweet dumpling offering for special occasions",
    price: 201,
    image: "https://images.unsplash.com/photo-1631033164481-ab1422ee8c2e?q=80&w=1974&auto=format&fit=crop",
    templeId: "2"
  },
  {
    id: "3",
    name: "Kheer Prasad",
    description: "Sacred rice pudding blessed by priests",
    price: 111,
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&w=2070&auto=format&fit=crop",
    templeId: "3"
  },
  {
    id: "4",
    name: "Halwa Prasad",
    description: "Semolina sweet offering for prosperity",
    price: 131,
    image: "https://images.unsplash.com/photo-1515467837915-15c4777cc36a?q=80&w=1974&auto=format&fit=crop",
    templeId: "1"
  },
  {
    id: "5",
    name: "Panjiri Prasad",
    description: "Nutritious whole wheat offering for strength",
    price: 171,
    image: "https://images.unsplash.com/photo-1516747773440-e524372a2c5b?q=80&w=1974&auto=format&fit=crop",
    templeId: "2"
  },
  {
    id: "6",
    name: "Chandan Tilak",
    description: "Sacred sandalwood paste for blessings",
    price: 51,
    image: "https://images.unsplash.com/photo-1612196808214-b7e09f0f0729?q=80&w=1974&auto=format&fit=crop",
    templeId: "4"
  }
];

// Sample order history data
const sampleOrders: Order[] = [
  {
    id: "ORD-001",
    items: [
      { itemId: "1", quantity: 2 },
      { itemId: "3", quantity: 1 }
    ],
    status: "delivered",
    date: "2025-04-10",
    trackingId: "TRK123456",
    estimatedDelivery: "Delivered on April 15, 2025"
  },
  {
    id: "ORD-002",
    items: [
      { itemId: "2", quantity: 1 },
    ],
    status: "shipped",
    date: "2025-04-25",
    trackingId: "TRK789012",
    estimatedDelivery: "Expected by May 3, 2025"
  },
  {
    id: "ORD-003",
    items: [
      { itemId: "5", quantity: 3 },
      { itemId: "6", quantity: 1 }
    ],
    status: "processing",
    date: "2025-05-01",
    trackingId: "TRK345678",
    estimatedDelivery: "Expected by May 7, 2025"
  }
];

const PrasadBooking = () => {
  const [cart, setCart] = useState<Map<string, number>>(new Map());
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [showTrackingDialog, setShowTrackingDialog] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

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
    if (getTotalItems() === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout",
      });
      return;
    }

    // Create new order
    const newOrder: Order = {
      id: `ORD-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      items: Array.from(cart.entries()).map(([itemId, quantity]) => ({ itemId, quantity })),
      status: "processing",
      date: new Date().toISOString().split('T')[0],
      trackingId: `TRK${Math.floor(Math.random() * 1000000)}`,
      estimatedDelivery: `Expected by ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    
    toast({
      title: "Order placed successfully",
      description: `Your prasad order of ₹${getTotalPrice()} has been placed`,
    });
    
    setCart(new Map());
  };

  const trackOrder = (orderId: string) => {
    setSelectedOrderId(orderId);
    setShowTrackingDialog(true);
  };

  const getSelectedOrder = () => {
    return orders.find(order => order.id === selectedOrderId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing": return "bg-blue-500";
      case "shipped": return "bg-orange-500";
      case "delivered": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  // Get details for an item in an order
  const getItemDetails = (itemId: string) => {
    return prasadItems.find(item => item.id === itemId);
  };
  
  // Calculate total for an order
  const calculateOrderTotal = (order: Order) => {
    let total = 0;
    order.items.forEach(item => {
      const prasadItem = prasadItems.find(p => p.id === item.itemId);
      if (prasadItem) {
        total += prasadItem.price * item.quantity;
      }
    });
    return total;
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

      <Tabs defaultValue="shop" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="shop">Shop Prasad</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
        </TabsList>
        
        <TabsContent value="shop">
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
        </TabsContent>
        
        <TabsContent value="orders">
          <div className="bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold p-4 border-b">Order History</h2>
            
            {orders.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-500 mb-4">You haven't placed any prasad orders yet.</p>
                <Button 
                  onClick={() => {
                    // Fix: Instead of using Element.click(), we use the TabsTrigger's value to switch tabs
                    const shopTab = document.querySelector('[data-value="shop"]');
                    if (shopTab && shopTab instanceof HTMLElement) {
                      shopTab.click();
                    }
                  }} 
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Shop Prasad
                </Button>
              </div>
            ) : (
              <div className="divide-y">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 hover:bg-gray-50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{order.id}</h3>
                          <span className={`text-xs text-white px-2 py-0.5 rounded-full ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">Ordered on {new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <Button 
                          variant="outline"
                          size="sm" 
                          onClick={() => trackOrder(order.id)}
                          className="flex items-center gap-2"
                        >
                          <Package className="h-4 w-4" />
                          Track Order
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {order.items.map((item) => {
                        const itemDetails = getItemDetails(item.itemId);
                        return itemDetails ? (
                          <div key={item.itemId} className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded overflow-hidden">
                              <img src={itemDetails.image} alt={itemDetails.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-grow">
                              <p className="font-medium">{itemDetails.name}</p>
                              <p className="text-sm text-gray-500">Quantity: {item.quantity} × ₹{itemDetails.price}</p>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                    
                    <div className="mt-4 pt-2 border-t border-dashed flex justify-between items-center">
                      <p className="text-sm text-gray-500">{order.items.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                      <p className="font-bold">Total: ₹{calculateOrderTotal(order)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Order Tracking Dialog */}
      <Dialog open={showTrackingDialog} onOpenChange={setShowTrackingDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Track Your Order</DialogTitle>
            <DialogDescription>
              View your order status and delivery information.
            </DialogDescription>
          </DialogHeader>
          
          {getSelectedOrder() && (
            <div className="mt-4 space-y-6">
              <div>
                <h4 className="font-medium mb-2">Order Information</h4>
                <div className="rounded-lg border p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Order ID:</span>
                    <span className="font-medium">{getSelectedOrder()?.id}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Order Date:</span>
                    <span>{new Date(getSelectedOrder()?.date || "").toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tracking Number:</span>
                    <span className="font-medium">{getSelectedOrder()?.trackingId}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Delivery Status</h4>
                <div className="rounded-lg border p-3">
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`h-3 w-3 rounded-full ${getSelectedOrder()?.status !== "processing" ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`h-3 w-3 rounded-full ${getSelectedOrder()?.status !== "processing" ? "bg-green-500" : "bg-gray-300"}`}></div>
                      <div className={`h-3 w-3 rounded-full ${getSelectedOrder()?.status === "delivered" ? "bg-green-500" : "bg-gray-300"}`}></div>
                    </div>
                    <div className="absolute top-[5px] left-0 right-0 h-[2px] bg-gray-200 -z-10">
                      <div 
                        className="h-full bg-green-500" 
                        style={{ 
                          width: getSelectedOrder()?.status === "processing" ? "0%" : 
                                 getSelectedOrder()?.status === "shipped" ? "50%" : "100%" 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs mt-1">
                    <span>Processing</span>
                    <span>Shipped</span>
                    <span>Delivered</span>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">{getSelectedOrder()?.estimatedDelivery}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Cart Summary (Fixed at Bottom) */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-10">
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
