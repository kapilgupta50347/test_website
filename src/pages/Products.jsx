import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart, Star, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/components/ui/use-toast';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'miniatures', name: 'Miniatures' },
    { id: 'prototypes', name: 'Prototypes' },
    { id: 'decorative', name: 'Decorative' },
    { id: 'functional', name: 'Functional' },
    { id: 'jewelry', name: 'Jewelry' }
  ];

  const products = [
    {
      id: 1,
      name: 'Dragon Miniature',
      category: 'miniatures',
      price: 1299,
      rating: 4.8,
      reviews: 156,
      description: 'Highly detailed fantasy dragon miniature perfect for tabletop gaming',
      image: 'https://images.unsplash.com/photo-1635865165118-917ed9e20936'
    },
    {
      id: 2,
      name: 'Phone Stand Pro',
      category: 'functional',
      price: 799,
      rating: 4.9,
      reviews: 203,
      description: 'Adjustable phone stand with cable management',
      image: 'https://images.unsplash.com/photo-1592503255292-3a593f32a9ec'
    },
    {
      id: 3,
      name: 'Geometric Vase',
      category: 'decorative',
      price: 1599,
      rating: 4.7,
      reviews: 89,
      description: 'Modern geometric vase with stunning angular design',
      image: 'https://images.unsplash.com/photo-1603808033192-082f6e4b0b8b'
    },
    {
      id: 4,
      name: 'Custom Pendant',
      category: 'jewelry',
      price: 2299,
      rating: 4.9,
      reviews: 124,
      description: 'Elegant custom pendant with personalized engraving',
      image: 'https://images.unsplash.com/photo-1600180758890-6b94519a8baa'
    },
    {
      id: 5,
      name: 'Prototype Housing',
      category: 'prototypes',
      price: 4499,
      rating: 4.6,
      reviews: 67,
      description: 'Professional prototype housing for electronic devices',
      image: 'https://images.unsplash.com/photo-1581091215367-59ab6b5e2105'
    },
    {
      id: 6,
      name: 'Desk Organizer',
      category: 'functional',
      price: 1299,
      rating: 4.8,
      reviews: 178,
      description: 'Multi-compartment desk organizer for office supplies',
      image: 'https://images.unsplash.com/photo-1588776814546-7f6c1447d6f5'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-[#001F3F] text-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#FFD23F] mb-4">
            Explore Our 3D Creations
          </h1>
          <p className="text-lg text-[#F5F5DC]/80 max-w-2xl mx-auto">
            Handcrafted 3D printed products built with precision and creativity.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#F5F5DC]/10 p-6 rounded-xl mb-8 backdrop-blur-md border border-[#F5F5DC]/20"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F5F5DC]/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#001F3F]/50 border border-[#F5F5DC]/30 rounded-lg text-[#F5F5DC] placeholder-[#F5F5DC]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-[#FFD23F]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#001F3F]/50 border border-[#F5F5DC]/30 rounded-lg px-4 py-3 text-[#F5F5DC] focus:outline-none focus:ring-2 focus:ring-[#FFD23F]"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-[#001F3F] text-[#F5F5DC]">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#F5F5DC]/10 rounded-xl overflow-hidden shadow-lg border border-[#F5F5DC]/20 hover:shadow-[#FFD23F]/30 transition-all duration-300"
            >
              <div className="aspect-square bg-[#001F3F] flex items-center justify-center">
                <img  
                  className="w-full h-full object-cover" 
                  alt={product.name}
                  src={product.image}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-2xl font-bold text-[#FFD23F]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-[#FFD23F] fill-current'
                            : 'text-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#F5F5DC]/60 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                <p className="text-[#F5F5DC]/80 mb-4">{product.description}</p>
                
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#FFD23F] text-[#001F3F] font-semibold hover:bg-yellow-400 transition-all"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Package className="w-16 h-16 text-[#F5F5DC]/40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#F5F5DC]/70 mb-2">No products found</h3>
            <p className="text-[#F5F5DC]/50">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;
