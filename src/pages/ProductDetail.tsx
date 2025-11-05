import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, CheckCircle2, ShoppingCart, Check, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/ProductCard';
import productsData from '../../data/products.json';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);
  const { addToCart, cart } = useCart();
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Browse All Parts</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    // Add the selected quantity to cart
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        brand: product.brand,
      });
    }

    setIsAdded(true);
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${product.name} added to your cart.`,
    });

    setTimeout(() => {
      setIsAdded(false);
      setQuantity(1); // Reset quantity after adding
    }, 2000);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="border-b border-border py-4">
        <div className="container mx-auto px-4">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded text-sm font-medium mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">SKU: {product.sku}</p>
              <p className="text-3xl font-bold text-primary mb-6">${product.price.toLocaleString()}</p>
              
              <p className="text-lg mb-6">{product.short}</p>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decreaseQuantity}
                      className="h-12 w-12 rounded-r-none"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="h-12 w-16 flex items-center justify-center border-x border-border">
                      <span className="text-lg font-semibold">{quantity}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={increaseQuantity}
                      className="h-12 w-12 rounded-l-none"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total: <span className="font-bold text-primary">${(product.price * quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mb-8">
                <Button 
                  onClick={handleAddToCart} 
                  size="lg" 
                  className="w-full"
                  disabled={isAdded}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {isInCart ? 'Add More to Cart' : 'Add to Cart'}
                    </>
                  )}
                </Button>
              </div>

              {/* Compatibility */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Vehicle Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.compatibility.map((vehicle, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{vehicle}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Always confirm fitment with your mechanic or give us a call for assistance.
                  </p>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Material</span>
                      <span className="text-muted-foreground">{product.specs.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-medium">Warranty</span>
                      <span className="text-muted-foreground">{product.specs.warranty}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Box Contents</span>
                      <span className="text-muted-foreground">{product.specs.box_contents}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
